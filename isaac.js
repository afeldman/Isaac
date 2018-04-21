'use strict';

var Isaac = require('./lib/isaac')
var http = require('http');


//get file
var file = process.argv.slice(2);
//parse file
var log = Isaac.Log.fromPath(file[0])

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<!DOCTYPE \"html\">");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Isaac</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(8080);
console.log("Server is listening");
