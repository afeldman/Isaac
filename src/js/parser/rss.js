var http = require('http');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

parser.on('error', function(err) {
    console.log('Parser error', err);
});

const args = process.argv;

const getContent = function(feedUrl){
    return new Promise((resolve, reject) => {
        const lib = feedUrl.startsWith('https') ? require('https') : require('http');
        const request = lib.get (feedUrl, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299){
                reject(new Error('fail to load: ' + feedUrl + ' with status code: ' + response.statusCode));
            }

            const body = [];
            response.on('data', (chunk) => body.push(chunk));
            response.on('end', () => resolve(body.join('')));
        });

        request.on('error', (err) => reject(err));
    });
//            parser.parseString(data, function(err, result) {
                //console.log('FINISHED', err, result);

  //          });
}

async function rss2json() {
    try{
        const html = await getContent(args[2]);
        console.log(html);
    }catch(error){
        console.error('ERROR: ');
        console.error(error);
    }
}

rss2json();
