/**
 *  File: BIN.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> Binary
 */

define((require, exports) => {
  // encode the provided string. function must return a string;
  const encodeToBin = function encodeToBin(text) {
    const zeroPad = (num) => '00000000'.slice(String(num).length) + num;
    return text.replace(/[\s\S]/g, (str) => {
      const binstr = zeroPad(str.charCodeAt().toString(2));
      return binstr;
    });
  };

  // decode the provided string. function must return a string;
  const decodeFromBin = function decodeFromBin(text) {
    return text.split(' ').map((i) => String.fromCharCode(parseInt(i, 2)).toString(10)).join('');
  };

  // export the encoder for use in the main module
  exports.encodeToBin = encodeToBin;
  // export the decoder for use in the main module
  exports.decodeFromBin = decodeFromBin;
});
