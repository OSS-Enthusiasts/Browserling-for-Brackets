'use strict';
/* eslint-disable new-cap */
/**
 *  File: SHA512.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> SHA512
 *  SHA512 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define(function (require, exports) {
  var crypto = require('crypto-js');
  var encodeToSHA512 = function encodeToSHA512(text) {
    var hash = crypto.SHA512(text).toString();
    return hash;
  };
  exports.encodeToSHA512 = encodeToSHA512;
});