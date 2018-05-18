'use strict';

var config = require('config');

console.log(config);

let with_ftp = config.has('ftp')? config.get('ftp') : false;
let robots;

if (with_ftp){
    robots = config.has('robots')? config.get('robots') : [];
}

console.info(robots);

/*if (config.has('optionalFeature.detail')) {
  var detail = config.get('optionalFeature.detail');
  //...
}*/

/*
var Client = require('ftp');
var fs = require('fs');

var c = new Client();

c.on('ready', function() {    
    c.get('errall.ls', function(err, stream) {
	if (err) throw err;
	stream.once('close', function() { c.end(); });
	stream.pipe(fs.createWriteStream('test.txt'));

    });
});

c.connect({
    host: process.env.ROBOT_HOST,
    port: 21,
    user: process.env.ROBOT_USER,
    password: process.env.ROBOT_PASSWD
});
*/
