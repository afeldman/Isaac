'use strict';

require('dotenv').config();
var tempfile = require('tempfile');
var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
    /*c.list(function(err, list) {
	if (err) throw err;
	console.dir(list);
    });*/
    
    c.get('errall.ls', function(err, stream) {
	if (err) throw err;
	stream.once('close', function() { c.end(); });
	stream.pipe(fs.createWriteStream('local.txt'));

    });
});

c.connect({
    host: process.env.FANUC_HOST,
    port: 21,
    user: process.env.FANUC_USER,
    password: process.env.FANUC_PASSWD
    });
