const express = require('express');
const path = require('path');
const scoketIO = require('socket.io');
const http = require('http');
var publicPath = path.join(__dirname , '../public' );



var app = express();
var port =   process.env.port || 3000;
var server = http.createServer(app);



console.log(__dirname + '/public');
console.log(publicPath);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  