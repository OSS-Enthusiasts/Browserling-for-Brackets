'use strict';
/* eslint-disable new-cap */
/**
 *  File: ASCII.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> ASCII Code
 *
 */

define(function (require, exports) {
  var encodeToASCII = function encodeToASCII(text) {
    var asciiArray = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Array.from(text)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var char = _step.value;

        asciiArray.push(char.charCodeAt(0));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return asciiArray.join('');
  };

  var decodeFromASCII = function decodeFromASCII(text) {
    var codes = [];
    for (var i = 0; i < text.length;) {
      var numDigits = text[i] === '1' ? 3 : 2;
      codes.push(text.substr(i, numDigits));
      i += numDigits;
    }

    return String.fromCharCode.apply(String, codes);
  };
  exports.encodeToASCII = encodeToASCII;
  exports.decodeFromASCII = decodeFromASCII;
});