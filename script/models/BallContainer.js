/**
 * BALL CONTAINER
 */

function BallContainer(quantity) {
    this.ballList = [];

    for (var i = 1; i <= quantity; i++) {
        this.addBall(
            new Ball(i)
        );
    }
}

BallContainer.prototype.addBall = function (ball) {
    return this.ballList.push(ball);
};

BallContainer.prototype.removeBall = function (ball) {
    var i = this.ballList.indexOf(ball);
    var removedBall = this.ballList.splice(i, 1)[0];

    return removedBall;
};

BallContainer.prototype.getValue = function () {
    var value = 0;
    for (var i = 0; i < this.ballList.length; i++) {
        value += this.ballList[i].ordinal;
    }
    return value;
};

BallContainer.prototype.onBallClick = function (e) {
    console.log('Clicked: ' + e.model.toString())
};


BallContainer.prototype.drawBall = function (b) {

    var factory = new BallElement();
    var e = factory.get(b.ordinal);
    e.ballOwner = this;
    e.addEventListener('click', this.onBallClick);
    b.element = e;
    e.model = b;

    return e;
};

BallContainer.prototype.drawBallList = function () {

    var e = div();

    for (var i = 0; i < this.ballList.length; i++) {

        e.appendChild(
            this.drawBall(this.ballList[i])
        );

    }

    return e;

};