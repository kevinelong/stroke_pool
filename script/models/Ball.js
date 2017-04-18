
/**
 * BALL
 */

function Ball(ordinal) {
    this.ordinal = ordinal;
}

Ball.prototype.toString = function () {
    var i = this.ordinal;
    return i < 9 ? '( ' + i + ' )' : '(/' + i + '/)';
};

