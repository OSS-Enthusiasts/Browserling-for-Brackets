/**
 *  File: password.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Generates a strong password of length 8-12
 */

define((require, exports) => {
  //    PHP Serializing string
  const passwordGen = function shuffle() {
    const length = Math.random() * (12 - 8) + 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&_*+-/';
    let password = '';
    for (let i = 0, n = charset.length; i < length; i += 1) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  };
  const strength = function strength(password) {
    return `${password}NA`;
  };
  exports.passwordGen = passwordGen;
  exports.strength = strength;
});
