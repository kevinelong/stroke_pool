/**
 * PLAYER
 */

function Player(name) {
    this.name = name;
    BallContainer.call(this, 0);
}
Player.prototype = Object.create(BallContainer.prototype);


Player.prototype.toString = function () {
    return 'Name: ' + this.name + '<br>Score: ' + this.getValue() + '<br>';
};
