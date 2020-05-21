/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Shuffles a string
 */

define((require, exports) => {

  //    PHP Serializing string
  const shuffle = function shuffle(input) {
    let chars = input.split(""), strlen = chars.length;

    for(var i = strlen - 1; i > 0; i =i-1) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
    return chars.join("");
  };
  exports.shuffle = shuffle;
});
