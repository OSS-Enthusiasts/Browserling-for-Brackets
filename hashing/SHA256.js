'use strict';

/* eslint-disable new-cap */
/**
 *  File: SHA256.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes String --> SHA256
 *  SHA256 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define(function (require, exports) {
  var crypto = require('crypto-js');
  var encodeToSHA256 = function encodeToSHA256(text) {
    var hash = crypto.SHA256(text).toString();
    return hash;
  };
  exports.encodeToSHA256 = encodeToSHA256;
});