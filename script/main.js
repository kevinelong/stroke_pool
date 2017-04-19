/**
 * CREATE GAME INSTANCE
 */
defer(function () {
    var s = svg();
    var c = circle(15,15,15);
    s.appendChild(c);
    append(s);
    new StrokePool(
        get('stroke_pool')
    );
});

