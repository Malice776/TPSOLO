const express = require('express');
const { createClient } = require('redis');

const app = express();
const port = 3000;

//attention pas de redis-1
const client = createClient({
  url: 'redis://redis:6379'
});

// gestion des événements pour rédis (souvent des erreurs sinon)
client.on('error', (err) => console.error('Redis Client Error:', err));

async function startServer() {
  try {
    await client.connect();  
    console.log('Connected to Redis');

    app.get('/', async (req, res) => {
      try {
        await client.set('key', 'Hello Redis!');
        const value = await client.get('key');
        res.send(`Value from Redis: ${value}`);
      } catch (err) {
        res.status(500).send('Erreur avec Redis: ' + err.message);
      }
    });

    // lancé le serveur
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

  } catch (err) {
    console.error('Could not connect to Redis:', err);
  }
}

startServer();
