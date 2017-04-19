/**
 * CREATE GAME INSTANCE
 */

function getBallElement(number) {

    var s = svg(60, 60);
    s.setAttributeNS(null, 'style', "position:absolute;top:0;left:0;z-index:-1");

    var c = circle(30, 30, 20, 'white', '#DDDD00', 15);
    s.appendChild(c);

    var d = div('class':'ballElement');

    d.appendChild(text(number));
    d.appendChild(s);

    return d;
}


defer(function () {


    append(getBallElement(1));
    append(getBallElement(9));

    //d.appendChild(s);

    new StrokePool(
        get('stroke_pool')
    );
});

