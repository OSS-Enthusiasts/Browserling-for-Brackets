
/**
 *  File: BASE64.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> Base 64
 */

define((require, exports) => {
  // fallback support for node environment
  const uniBtoa = function uniBtoa(str) {
    try {
      return btoa(str);
    } catch (err) {
      return Buffer.from(str).toString('base64');
    }
  };
  const uniAtob = function uniAtob(b64Encoded) {
    try {
      return atob(b64Encoded);
    } catch (err) {
      return Buffer.from(b64Encoded, 'base64').toString();
    }
  };

  // encode the provided string. function must return a string;
  const encodeToBase64 = function encodeToBase64(text) {
    return uniBtoa(unescape(encodeURIComponent(text)));
  };
  // decode the provided string. function must return a string;
  const decodeFromBase64 = function decodeFromBase64(text) {
    let encoded = null;
    try {
      encoded = decodeURIComponent(escape(uniAtob(text)));
    } catch (e) {
      alert('Not valid Base64 string');
    }
    return encoded;
  };
  // export the encoder for use in the main module
  exports.encodeToBase64 = encodeToBase64;
  // export the decoder for use in the main module
  exports.decodeFromBase64 = decodeFromBase64;
});
