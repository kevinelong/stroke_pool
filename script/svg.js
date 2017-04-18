function createNS(URI, tagName) {
    var element = document.createElementNS(URI, tagName);

    var list = attributeList ? attributeList : {};

    for (var i = 0, keys = Object.keys(attributeList); keys.length; i++) {
        var key = keys[i];
        var value = attributeList[key];
        element.setAttributeNS(URI, key, value);
    }

    return element;
}

function createSVG(tagName) {
    return createNS('http://www.w3.org/2000/svg', tagName)
}

function svg(width, height, viewPort) {
    var element = create('svg', {
        'width': width !== undefined ? width : 120,
        'height': height !== undefined ? height : 120,
        'viewPort': viewPort !== undefined ? viewPort : '0 0 120 120',
        'version': '1.1',
        'xmlns': "http://www.w3.org/2000/svg"
    });
    return element;
}

function circle(center_x, center_y, radius) {
    return createSVG('circle', {
        'cx': center_x,
        'cy': center_y,
        'r': radius
    });
}

//
// <?xml version="1.0" encoding="utf-8"?>
// <svg width="120" height="120" viewPort="0 0 120 120" version="1.1" xmlns=>
//     <circle cx="60" cy="60" r="50"/>
//     </svg>

