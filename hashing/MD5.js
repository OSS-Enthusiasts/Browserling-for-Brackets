'use strict';
/* eslint-disable new-cap */
/**
 *  File: MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes String --> MD5
 *  MD5 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define(function (require, exports) {
  var crypto = require('crypto-js');
  var encodeToMD5 = function encodeToMD5(text) {
    var hash = crypto.MD5(text).toString();
    return hash;
  };
  exports.encodeToMD5 = encodeToMD5;
});