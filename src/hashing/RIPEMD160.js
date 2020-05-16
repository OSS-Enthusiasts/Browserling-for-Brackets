'use strict';
/* eslint-disable new-cap */
/**
 *  File: RIPEMD160.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> RIPEMD-160
 *  RIPEMD160 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define(function (require, exports) {
  var crypto = require('crypto-js');
  var encodeToRIPEMD160 = function encodeToRIPEMD160(text) {
    var hash = crypto.RIPEMD160(text).toString();
    return hash;
  };
  exports.encodeToRIPEMD160 = encodeToRIPEMD160;
});