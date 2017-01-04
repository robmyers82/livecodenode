var http = require('http');
var express = require('express');
var log = require('./consolelog');

var app = express();

app.get('/', function(req, res) {
	res.write("Hey, we got it working, whoohoo!!");
	log.mainConsole();
	res.end();
});

app.get('/dave', function(req, res) {
	res.write("Hey Dave!!");
	log.nameConsole('Dave');
	res.end();
});

app.get('/ben', function(req, res) {
	res.write("Hey Ben!!");
	log.nameConsole('Ben');
	res.end();
});

app.get('/riley', function(req, res) {
	res.write("Hey Riley!!");
	log.nameConsole('Riley');
	res.end();
});

app.get('/spencer', function(req, res) {
	res.write("Hey Spencer!!");
	log.nameConsole('Spencer');
	res.end();
});

app.listen(8080);
console.log("Listening on port 8080...");