'use strict';

/**
 *  File: hexadecimal.js
 *  Author: Zyoruk <ce.zyoruk@gmail.com>
 *  Description:  Encodes and decodes String <--> Hex
 */

define(function (require, exports) {
  // Create N size chunks from array
  var groupArrayInGroups = function groupArrayInGroups(array, chunksSize) {
    return array.reduce(function (chunks, element, index) {
      return (index % chunksSize ? chunks[chunks.length - 1].push(element) : chunks.push([element])) && chunks;
    }, []).map(function (finalChunk) {
      return finalChunk.join('');
    });
  };

  var encodeToHex = function encodeToHex(text) {
    return text.split('').map(function (char, index) {
      var encoded = text.charCodeAt(index).toString(16).toUpperCase();

      // Fix any case that starts with 0. For example: LF => 0A
      if (encoded.length === 1) encoded = '0' + encoded;

      return encoded;
    }).join('');
  };

  var decodeFromHex = function decodeFromHex(text) {
    var array = text.trim().split('');
    var chunks = groupArrayInGroups(array, 2);

    return chunks.map(function (charCode) {
      return String.fromCharCode(parseInt('0x' + charCode, 10).toString());
    }).join('');
  };

  exports.encodeToHex = encodeToHex;
  exports.decodeFromHex = decodeFromHex;
});