var express = require('express');
var app = express();
var path = require('path');

// To make JS files work from index.html
app.use(express.static(__dirname + '/js'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.listen(3000, '192.168.0.10');
