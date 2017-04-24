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
    return createSVG('svg', {
        'width': width,
        'height': height
    });
}

function defs() {
    return createSVG('defs');
}

function clipPath(id) {
    return createSVG('clipPath', {'id': id});
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

function rect(x, y, width, height, fill, stroke, strokeWidth, clipPathID) {
    return createSVG('rect', {
        'x': x,
        'y': y,
        'width': width,
        'height': height,
        'fill': fill,
        'stroke': stroke,
        'stroke-width': strokeWidth,
        'clip-path': clipPathID
    });
}

function line(x1, y1, x2, y2, width, height, fill, stroke, strokeWidth) {
    return createSVG('line', {
        'x1': x1,
        'y1': y1,
        'x2': x2,
        'y2': y2,
        'width': width,
        'height': height,
        'fill': fill,
        'stroke': stroke,
        'stroke-width': strokeWidth
    });
}

//
// <?xml version="1.0" encoding="utf-8"?>
// <svg width="120" height="120" viewPort="0 0 120 120" version="1.1" xmlns=>
//     <circle cx="60" cy="60" r="50"/>
//     </svg>

/*
 <?xml version="1.1" encoding="utf-8" ?>
 <svg viewBox="-10.0 -10.0 600.0 600.0"
 fill="silver"
 stroke="black"
 stroke-linecap=""
 stroke-miterlimit="10"
 xmlns="http://www.w3.org/2000/svg" background-color="green"
 >
 <defs>
 <clipPath id="cp1">
 <circle cx="30" cy="30" r="30"/>
 </clipPath>
 </defs>

 <circle cx="30" cy="30" r="30" fill="#fff8f0" stroke="#222222" stroke-width="0.1"/>

 <rect x="0" y="10" width="60" height="40" fill="#f8e800" stroke="none" clip-path="url(#cp1)" />

 <circle cx="30" cy="30" r="30" fill="none" stroke="#222222" stroke-width="1"/>
 <circle cx="30" cy="30" r="15" fill="#fff8f0" stroke="black" stroke-width="2"/>

 <rect x="25" y="40" width="10" height="1" fill="#222222" />

 <circle cx="30" cy="25" r="5" fill="#fff8f0" stroke="#222222" stroke-width="2"/>
 <line x1="34" y1="28" x2="27" y2="38" stroke="#222222" stroke-width="2" />
 </svg>
 */

/*
 <!--<?xml version="1.0" encoding="utf-8" ?>-->
 <svg viewBox="-10.0 -10.0 600.0 600.0"
 fill="silver"
 stroke="black"
 stroke-linecap=""
 stroke-miterlimit="10"
 xmlns="http://www.w3.org/2000/svg" background-color="green"
 >
 <defs>
 <clipPath id="cp1">
 <circle cx="30" cy="30" r="30"/>
 </clipPath>
 <linearGradient
 id="MyGradient"
 x1="0%" y1="0%"
 x2="0%" y2="100%"
 spreadMethod="pad"
 >
 <stop offset="0%"  stop-color="#ffee33" stop-opacity="0.01"/>
 <stop offset="100%" stop-color="#39966" stop-opactiy="0.01"/>
 </linearGradient>
 </defs>

 <circle cx="30" cy="30" r="30" fill="#ffee99" stroke="#222222" stroke-width="0.1"/>

 <rect x="0" y="10" width="60" height="40" fill="#f8e800" stroke="none" clip-path="url(#cp1)" />

 <circle cx="30" cy="30" r="30" fill="none" stroke="#222222" stroke-width="1"/>
 <circle cx="30" cy="30" r="15" fill="#fff8f0" stroke="black" stroke-width="2"/>

 <rect x="25" y="40" width="10" height="1" fill="#222222" />

 <circle cx="30" cy="25" r="5" fill="#fff8f0" stroke="#222222" stroke-width="2"/>
 <line x1="34" y1="28" x2="27" y2="38" stroke="#222222" stroke-width="2" />

 <circle cx="30" cy="30" r="30" fill="url(#MyGradient)" stroke="#222222" stroke-width="1"/>

 </svg>
 */