"use strict";

/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Shuffles a string
 */
define(function (require, exports) {
  //    PHP Serializing string
  var shuffle = function shuffle(input) {
    var chars = input.split('');
    var strlen = chars.length;

    for (var i = strlen - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = chars[i];
      chars[i] = chars[j];
      chars[j] = tmp;
    }

    return chars.join('');
  };

  exports.shuffle = shuffle;
});