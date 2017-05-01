/**
 * POOL TABLE
 * @constructor
 */

function PoolTable(ballQuantity) {
    BallContainer.call(this, ballQuantity);
}
PoolTable.prototype = Object.create(BallContainer.prototype);

PoolTable.prototype.toString = function () {
    return 'Balls on Table:' + this.ballList.length + '<br>Point Available: ' + this.getValue() + '<br>';
};


PoolTable.prototype.draw = function () {

    var output = div();

    var number = div();
    number.classList.add('points');

    number.innerHTML = this.getValue();
    output.appendChild(number);

    var l = label();
    l.innerHTML = "Points Available";
    number.appendChild(l);

    output.classList.add('pool-table');

    //output.innerHTML = this.toString();
    output.appendChild(this.drawBallList());

    return output;

};