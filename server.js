var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
  console.log('Express server listening on port 3000')
});

require('./socket')(server)
