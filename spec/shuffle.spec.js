/**
 *  File: hexadecimal.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/generators/shuffle.js =>', () => {
    const { shuffle } = require('../src/generators/shuffle.js');

    describe('single character => ', () => {
      const clearText = 'A';
      //      const shuffledText = 'A';
      it('Shuffled text should equal original text', () => {
        expect(shuffle(clearText)).toEqual(clearText);
      });
    });
    describe('multi character text => ', () => {
      const clearText = 'abc';
      const shuffledText = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
      it('Should encode special characters', () => {
        expect(shuffledText).toContain(shuffle(clearText));
      });
    });
  });
});
