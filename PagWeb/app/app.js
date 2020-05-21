var express = require('express');
var app = express(); 
const path = require('path');
const Pagdir=path.join(__dirname, '../Pagine')

app.get('/', function (req, res) {
  res.sendFile(path.join(Pagdir, 'about.html'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
