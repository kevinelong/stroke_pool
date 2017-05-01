function BallElement(ordinal) {
    this.ordinal = ordinal;
}

BallElement.prototype.get = function (number) {

    var none = "none";
    var cream = "#fff8f0";
    var yellow = "#FFBB11";
    var blue = "#336699";
    var red = "#bb2211";
    var purple = "#663399";
    var orange = "#ff6600";
    var green = "#116633";
    var brown = "#663311";
    var charcoal = "#222222";

    var colors = {
        0: cream,
        1: yellow,
        2: blue,
        3: red,
        4: purple,
        5: orange,
        6: green,
        7: brown,
        8: charcoal
    };

    for (var c = 1; c <= 7; c++) {
        colors[c + 8] = colors[c];
    }

    var size = 60;
    var half = size * 0.5;
    var quarter = size * 0.25;
    var third = size * 0.333333;
    var sixth = third * 0.5;
    var twoThirds = size * 0.666666;
    var thin = '0.1';
    var thick = '2';
    var normal = '1';

    var s = svg(size, size);
    s.setAttributeNS(null, 'style', "position:absolute;top:0;left:0;z-index:-1");

    var d = defs();
    var mask = circle(half, half, half, 'black', 'black', 0);
    var cp = clipPath('cp1');

    cp.appendChild(mask);
    d.appendChild(cp);
    s.appendChild(d);

    s.appendChild(circle(half, half, half - 1, colors[number], none, 0));

    if (number < 9) {
        s.appendChild(circle(half, half, half - 1, colors[number], none, 0));
    } else {
        s.appendChild(circle(half, half, half - 1, cream, none, 0));
        s.appendChild(rect(0, sixth, size, twoThirds, colors[number], charcoal, thin, 'url(#cp1)'));
    }

    var container = div({'class': 'ballElement'});

    if (number > 0) {
        s.appendChild(circle(half, half, half - 1, none, cream, normal));
        s.appendChild(circle(half, half, quarter, cream, cream, normal));
        container.appendChild(text(number));
    }

    container.appendChild(s);

    return container;
};
