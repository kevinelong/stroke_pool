/**
 * THE STROKE POOL GAME
 */

function StrokePool(target, options) {

    var defaultOptions = {
        MAX_BALLS: 15,
        DEFAULT_PLAYERS: 2
    };

    this.options = options ? options : defaultOptions;

    this.target = target;
    this.players = [];

    this.setup();
    this.setupInterface();
    this.draw();

}

StrokePool.prototype.setupInterface = function () {
    this.ballList = div();
    this.playerList = div();
    this.target.appendChild(this.ballList);
    this.target.appendChild(this.playerList);

    var that = this;

    this.table.onBallClick = function (e) {
        var removedBall = that.table.removeBall(e.target.model);
        that.currentPlayer.addBall(removedBall);
        that.draw();
    };

};

StrokePool.prototype.setup = function () {

    this.table = new PoolTable(15);

    for (var p = 1; p <= this.options.DEFAULT_PLAYERS; p++) {
        this.players.push(new Player('Player ' + p));
    }

    this.currentPlayer = this.players[0];

};


StrokePool.prototype.drawPlayer = function (p) {

    var e = create('div');
    // e.innerHTML = p.toString();

    e.classList.add('player');

    if (this.currentPlayer === p) {
        e.classList.add('selected');
    }

    var that = this;

    e.addEventListener('click', function (e) {

        if (e.target.classList.contains('points')) {
            var playerElement = e.target.parentElement.parentElement;
        }else if (e.target.parentElement.classList.contains('points')) {
            var playerElement = e.target.parentElement.parentElement.parentElement;
        }else  if (e.target.classList.contains('pool-table')) {
            var playerElement = e.target.parentElement;
        }else  if (e.target.classList.contains('ball-list')) {
            var playerElement = e.target.parentElement.parentElement;
        }else{
            var playerElement = e.target;
        }

        that.currentPlayer.element.classList.remove('selected');
        playerElement.classList.add('selected');
        that.currentPlayer = playerElement.model;
        that.draw();
    });

    e.appendChild(p.draw());

    e.model = p;
    p.element = e;

    return e;
};

StrokePool.prototype.drawPlayers = function () {

    var output = div();
    output.classList.add('player-list');

    for (var i = 0; i < this.players.length; i++) {
        var e = this.drawPlayer(this.players[i]);
        output.appendChild(e);

        var that = this;

        this.players[i].onBallClick = function (e) {
            var removedBall = e.target.ballOwner.removeBall(e.target.model);
            that.table.addBall(removedBall);
            that.draw();
        };

    }

    return output;
};


StrokePool.prototype.drawOptions = function () {
    var output = div();
    return output;
};


StrokePool.prototype.drawTable = function () {

    var output = div();

    div.innerHTML = this.table.toString();

    return output;

};


StrokePool.prototype.draw = function () {

    this.target.innerHTML = '';

    var output = div();
    output.classList.add('game-surface');

    output.appendChild(this.drawOptions());
    output.appendChild(this.table.draw());
    output.appendChild(this.drawPlayers());

    this.target.appendChild(output);
};