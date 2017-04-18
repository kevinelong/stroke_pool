/**
 * COMMON UTILITIES
 */

function create(tagName, attributeList) {

    var element = document.createElement(tagName);

    var attributeList = attributeList ? attributeList : {};

    for (var i = 0, keys = Object.keys(attributeList); keys.length; i++) {
        var key = keys[i];
        var value = attributeList[key];
        element.setAttribute(key, value);
    }

    return element;
}


function div() {
    return document.createElement('div');
}

function get(id) {
    return document.getElementById(id);
}

function defer(f) {
    document.addEventListener('DOMContentLoaded', f);
}

function append(element){
    document.body.appendChild(element);
}