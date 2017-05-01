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

Player.prototype.draw = function () {

    var output = div();

    var number = div();
    number.classList.add('points');

    number.innerHTML = this.getValue();
    output.appendChild(number);

    var l = label();
    l.innerHTML = this.name;
    number.appendChild(l);

    output.classList.add('pool-table');

//output.innerHTML = this.toString();
    output.appendChild(this.drawBallList());

    return output;
};
