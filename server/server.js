const express = require('express');
const path = require('path');

var publicPath = path.join(__dirname , '../public' );



var app = express();
var port =   process.env.port || 3000;

console.log(__dirname + '/public');
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  