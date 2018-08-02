var eyes = require('eyes');
var http = require('http');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

const args = process.argv;

parser.on('error', function(err) {
    console.log('Parser error', err);
});

function get_rss(feedUrl){
    var data = '';
    http.get(feedUrl, function(res) {
        if( res.statusCode >= 200 && res.statusCode < 400 ){
            res.on('data', function(data_) {
                data += data_.toString();
            });
            res.on('end', function() {
                parser.parseString(data, function(err, result) {
                    console.log('FINISHED', err, result);
                });
            });
        }
    });

}
