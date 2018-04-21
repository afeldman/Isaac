function Servo(nummer, m1, m2, bits) {
    this.id = parseInt(nummer);
    this.message1 = m1.trim();
    this.message2 = m2.trim();
    this.byte = bits;
}

Servo.REGEX = /SRVO-(\d{3})(([a-zA-Z]|\s)*)"(\s+)"(([a-zA-Z]|\s)*)([0-1]*)"(([a-zA-Z]|\s)*)"/

Servo.fromMessage = function (message) {
    var matches;
    if (matches = message.match(Servo.REGEX)) {
        return new Servo(matches[1], matches[2], matches[5], matches[7]);
    }

    throw new Error("Message not recognized: " + message);
}

module.exports = Servo;
