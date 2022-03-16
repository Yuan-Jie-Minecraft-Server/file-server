var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname))); //  "public" off of current is root

app.get('/', (req, res) => {
  res.send('A minecraft server')
})

app.listen(80);
console.log('Listening on port 80')
