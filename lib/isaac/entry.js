var Event = require('./event')

function Entry(iter, date, message) {
    this.iterator   = iter
    this.date       = date
    this.event      = null;

    try {
        this.event = Event.fromMessage(message);
    } catch (e) {
        console.error(e);
    }
}

Entry.fromString = function (string) {
    // find iterator number
    var quotePosition = string.indexOf("\"");
    var iter = string.substring(0, quotePosition);
    var iterless = string.substring(quotePosition + 1, string.length).trim();
    
    //find date 
    quotePosition = iterless.indexOf("\"");
    var date = iterless.substring(0, quotePosition).trim();

    //message
    var message = iterless.substring(quotePosition + 1, iterless.length).trim();   
    
    return new Entry(parseInt(iter), new Date(date), message);
}

module.exports = Entry;
