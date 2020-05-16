'use strict';
/* eslint-disable new-cap */
/**
 *  File: SHA1.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> SHA1
 *  SHA1 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define(function (require, exports) {
  var crypto = require('crypto-js');
  var encodeToSHA1 = function encodeToSHA1(text) {
    var hash = crypto.SHA1(text).toString();
    return hash;
  };
  exports.encodeToSHA1 = encodeToSHA1;
});