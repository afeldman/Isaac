function Reset(bits) {
    this.byte = bits;
}

Reset.REGEX = /R E S E T(\s*)"(\s+)"(\s*)([0-1]*)"(\s*)"/

Reset.fromMessage = function (message) {
    var matches;
    if (matches = message.match(Reset.REGEX)) {
        return new Reset(matches[4]);
    }

    throw new Error("Message not recognized: " + message);
}

module.exports = Reset;
