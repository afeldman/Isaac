'use strict';

var express = require('express');
var app     = express();

//app.engine('ejs', require('ejs').renderFile );
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var parser = require('./lib/parser/parser');
var par = new parser('test_data/ERRALL.LS');
var data = par.getDataSet();

app.get('/', function(req, res){
    res.render('index', {data: data});    
});

// Start the server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
