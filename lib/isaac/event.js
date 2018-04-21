var Servo = require('./event/servo'),
    System = require('./event/system'),
    Reset = require('./event/reset'),
    Interpreter = require('./event/interpreter')

function Event() {
}

Event.CLASSES = [
    Servo,
    System,
    Reset,
    Interpreter
];

Event.fromMessage = function (message) {
    var event;

    message = message.replace(/\./g, ' GG ').replace(/\//g, ' SLS ').replace(/SHIFT-RESET/g, 'SHIFT MM RESET')

    Event.CLASSES.some(function (klass) {
        if (message.match(klass.REGEX)) {
            try {
                event = klass.fromMessage(message);
            }
            catch(e) {
                console.error("can not get message from class :" + klass);
                console.error(e);
            }
        }
    })

    if (event) return event;
    if (message.length == 0) return null;

    throw new Error("Unrecognized event with message: " + message);
};

module.exports = Event;
