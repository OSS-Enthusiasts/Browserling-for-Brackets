'use strict';

/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes :
 *                      String <---> PHP serialize
 *                      Int <---> PHP Serialize
 */

define(function (require, exports) {
  /*
    * Format of PHP Serialized datatypes:
    * 1. String => s:<i>:<str>   where <i> is length of string, <str> is the string
    * 2. Int    => i:<int>       where <int> is the integer value
    * 3. Float  => d:<float>     where <float> is the float value
    */

  // To check the format of the input, whether it complies with the above mentioned format
  var checkformat = function checkformat(input, format) {
    if ((input.match(/:/g) || []).length === 2 && input[0] === 's' && format === 's') {
      return true;
    }if ((input.match(/:/g) || []).length === 1 && input[0] === format) {
      return true;
    }
    return false;
  };

  //    PHP Serializing string
  var encodeToPHPSerial = function encodeToPHPSerial(input) {
    var encode = 's:' + input.length.toString() + ':"' + input + '"';
    return encode;
  };

  //    PHP Serializing integer
  var encodeIntToPHPSerial = function encodeIntToPHPSerial(input) {
    if (parseInt(input, 10) === input) {
      var encode = 'i:' + input;
      return encode;
    }
    return null;
  };
  // PHP Serializing float
  var encodeFloatToPHPSerial = function encodeFloatToPHPSerial(input) {
    if (parseFloat(input) === input) {
      var encode = 'd:' + input;
      return encode;
    }
    return null;
  };
  //    Decoding PHP serial to String/Int
  var decodeFromPHPSerial = function decodeFromPHPSerial(input) {
    if (checkformat(input, 's')) {
      var decode = input.split(':');
      var getDecodedString = decode[2].split('"');
      return getDecodedString[1];
    }if (checkformat(input, 'i')) {
      var _decode = input.split(':');
      return _decode[1];
    }if (checkformat(input, 'd')) {
      var _decode2 = input.split(':');
      return _decode2[1];
    }
    // console.error('invalid PHPSerial format');
    return null;
  };
  exports.encodeToPHPSerial = encodeToPHPSerial;
  exports.encodeIntToPHPSerial = encodeIntToPHPSerial;
  exports.encodeFloatToPHPSerial = encodeFloatToPHPSerial;
  exports.decodeFromPHPSerial = decodeFromPHPSerial;
});