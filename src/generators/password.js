/**
 *  File: password.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Generates a strong password of length 8-12
 */

define((require, exports) => {
  //    PHP Serializing string
  const passwordGen = function passwordGen() {
    const length = Math.random() * (12 - 8) + 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&_*+-/';
    let password = '';
    for (let i = 0, n = charset.length; i < length; i += 1) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  };
  const strength = function strength(password) {
    let isLong = false; let hasLower = false; let hasUpper = false; let hasNum = false; let
      hasSpC = false;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&_*+-/';
    if (password.length >= 6) {
      isLong = true;
    }
    for (let i = 0; i < password.length; i += 1) {
      if (hasLower === false && charset.slice(0, 26).includes(password.charAt(i))) {
        hasLower = true;
      }
      if (hasUpper === false && charset.slice(26, 26 + 26).includes(password.charAt(i))) {
        hasUpper = true;
      }
      if (hasNum === false && charset.slice(52, 62).includes(password.charAt(i))) {
        hasNum = true;
      }

      if (hasSpC === false && charset.slice(62, charset.length).includes(password.charAt(i))) {
        hasSpC = true;
      }
    }
    return isLong && hasLower && hasUpper && hasNum && hasSpC;
  };
  exports.passwordGen = passwordGen;
  exports.strength = strength;
});
