'use strict';

/**
 *  File: BIN.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> Binary
 */

define(function (require, exports) {
  // encode the provided string. function must return a string;
  var encodeToBin = function encodeToBin(text) {
    var returnValue = '';
    for (var i = 0; i < text.length; i++) {
      var e = text[i].charCodeAt(0);
      var s = '';
      do {
        var a = e % 2;
        e = (e - a) / 2;
        s = a + s;
      } while (e !== 0);
      while (s.length < 8) {
        s = '0' + s;
      }
      returnValue += s;
    }
    return returnValue;
  };

  // decode the provided string. function must return a string;
  var decodeFromBin = function decodeFromBin(text) {
    var str = text.replace(/\s+/g, '');
    str = str.match(/.{1,8}/g).join(' ');
    var newBinary = str.split(' ');
    var binaryCode = [];
    for (var i = 0; i < newBinary.length; i++) {
      binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join('');
  };

  // export the encoder for use in the main module
  exports.encodeToBin = encodeToBin;
  // export the decoder for use in the main module
  exports.decodeFromBin = decodeFromBin;
});