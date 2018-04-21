function System(nummer, m1, m2, bits) {
    this.id = parseInt(nummer);
    this.message1 = m1.trim();
    this.message2 = m2.trim();
    this.byte = bits;
}

System.REGEX = /SYST-(\d{3})(([a-zA-Z0-9]|\s)*)"(\s+)"(([a-zA-Z]|\s)*)([0-1]*)"(([a-zA-Z]|\s)*)"/

System.fromMessage = function (message) {
    var matches;
    if (matches = message.match(System.REGEX)) {
        return new System(matches[1], matches[2], matches[5], matches[7]);
    }

    throw new Error("Message not recognized: " + message);
}

module.exports = System;
