function createNS(URI, tagName, attributeList) {
    var element = document.createElementNS(URI, tagName);

    var attributeList = attributeList ? attributeList : {};

    for (var i = 0, keys = Object.keys(attributeList); i < keys.length; i++) {
        var key = keys[i];
        var value = attributeList[key];
        element.setAttributeNS(null, key, value);
    }

    return element;
}

function createSVG(tagName, attributeList) {
    return createNS('http://www.w3.org/2000/svg', tagName, attributeList)
}

function svg(width, height) {
    var element = createSVG('svg', {
        'width':width,
        'height':height
    });
    return element;
}

function circle(center_x, center_y, radius, fill, stroke, width) {
    return createSVG('circle', {
        'cx': center_x,
        'cy': center_y,
        'r': radius,
        'fill': fill,
        'stroke': stroke,
        'stroke-width': width
    });
}

//
// <?xml version="1.0" encoding="utf-8"?>
// <svg width="120" height="120" viewPort="0 0 120 120" version="1.1" xmlns=>
//     <circle cx="60" cy="60" r="50"/>
//     </svg>

