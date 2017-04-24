/**
 * COMMON UTILITIES
 */

function create(tagName, attributeList) {

    var element = document.createElement(tagName);

    var attributeList = attributeList ? attributeList : {};

    for (var i = 0, keys = Object.keys(attributeList); i < keys.length; i++) {
        var key = keys[i];
        var value = attributeList[key];
        element.setAttribute(key, value);
    }

    return element;
}

function text(text) {
    return document.createTextNode(text);
}


function div(attributeList) {
    return create('div', attributeList);
}


function get(id) {
    return document.getElementById(id);
}


function defer(f) {
    document.addEventListener('DOMContentLoaded', f);
}


function append(element) {
    document.body.appendChild(element);
}


function merge(objectTarget, objectSource) {

    var keys = Object.keys(objectSource), i, length = keys.length, key;

    for (i = 0; i < length; ++i) {
        key = keys[i];
        objectTarget[key] = objectSource[key];
    }

    return objectTarget;
}