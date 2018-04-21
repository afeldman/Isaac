var Log     = require('./isaac/log');
var Event   = require('./isaac/event');
var Entry   = require('./isaac/entry');

function isaac() {
}

isaac.Log   = Log;
isaac.Event = Event;
isaac.Entry = Entry;

module.exports = isaac;