var fs = require('fs');
var Entry = require('./entry');


function Log() {
    this.entries = [];

    this.addEntry = function (entry) {
        this.entries.push(entry);
    }
}

Log.fromString = function (string) {
    var log = new Log();
    var entry;

    var lines = string.split(/\n/);
    var i = 0;

    lines.forEach(function (line) {
        if (line.length > 0) {
             if (i > 2) {
                log.addEntry(Entry.fromString(line));
             }
             ++i;
        }
    });

    return log; 
}

Log.fromPath = function (path) {
    var data = fs.readFileSync(path).toString();
    return Log.fromString(data);
}

Log.prototype.entriesByEventType = function (type) {
    return this.entries.filter(function (entry) { return entry.event.constructor.name === type });
}

module.exports = Log;
