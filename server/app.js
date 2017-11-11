var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index'));
});

server.listen(3000, function(){
  console.log('Express server listening on port 3000')
});

require('./socket')(server)
