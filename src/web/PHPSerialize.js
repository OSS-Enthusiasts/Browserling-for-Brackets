/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes :
 *                      String <---> PHP serialize
 *                      Int <---> PHP Serialize
 */

define((require, exports) => {
  /*
    * Format of PHP Serialized datatypes:
    * 1. String => s:<i>:<str>   where <i> is length of string, <str> is the string
    * 2. Int    => i:<int>       where <int> is the integer value
    * 3. Float  => d:<float>     where <float> is the float value
    */

  // To check the format of the input, whether it complies with the above mentioned format
  const checkformat = function checkformat(input, format) {
    if ((input.match(/:/g) || []).length === 2 && input[0] === 's' && format === 's') {
      return true;
    } if ((input.match(/:/g) || []).length === 1 && input[0] === format) {
      return true;
    }
    return false;
  };

  //    PHP Serializing string
  const encodeToPHPSerial = function encodeToPHPSerial(input) {
    const encode = `s:${input.length.toString()}:"${input}"`;
    return encode;
  };

  //    PHP Serializing integer
  const encodeIntToPHPSerial = function encodeIntToPHPSerial(input) {
    if (parseInt(input, 10) === input) {
      const encode = `i:${input}`;
      return encode;
    }
    return null;
  };
  // PHP Serializing float
  const encodeFloatToPHPSerial = function encodeFloatToPHPSerial(input) {
    if (parseFloat(input) === input) {
      const encode = `d:${input}`;
      return encode;
    }
    return null;
  };
  //    Decoding PHP serial to String/Int
  const decodeFromPHPSerial = function decodeFromPHPSerial(input) {
    if (checkformat(input, 's')) {
      const decode = input.split(':');
      const getDecodedString = decode[2].split('"');
      return getDecodedString[1];
    } if (checkformat(input, 'i')) {
      const decode = input.split(':');
      return decode[1];
    } if (checkformat(input, 'd')) {
      const decode = input.split(':');
      return decode[1];
    }
    // console.error('invalid PHPSerial format');
    return null;
  };
  exports.encodeToPHPSerial = encodeToPHPSerial;
  exports.encodeIntToPHPSerial = encodeIntToPHPSerial;
  exports.encodeFloatToPHPSerial = encodeFloatToPHPSerial;
  exports.decodeFromPHPSerial = decodeFromPHPSerial;
});
