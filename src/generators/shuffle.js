/**
 *  File: shuffle.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Shuffles a string
 */

define((require, exports) => {
  //    PHP Serializing string
  const shuffle = function shuffle(input) {
    const chars = input.split('');
    const strlen = chars.length;

    for (let i = strlen - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = chars[i];
      chars[i] = chars[j];
      chars[j] = tmp;
    }
    return chars.join('');
  };
  exports.shuffle = shuffle;
});
