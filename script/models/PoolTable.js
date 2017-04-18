
/**
 * POOL TABLE
 * @constructor
 */

function PoolTable(ballQuantity) {
    BallContainer.call(this, ballQuantity);
}
PoolTable.prototype = Object.create(BallContainer.prototype);
