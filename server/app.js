  const express = require('express');

  const app = express();
  const server = require('http').createServer(app);
  const path = require('path');

  const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, '..', 'client')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index'));
  });

  server.listen(PORT, function(){
    console.log(`Express server listening on port ${PORT}`)
  });
