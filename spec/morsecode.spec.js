/**
 *  File: morsecode.spec.js
 *  Author(s):
 */

global.brackets = require('./support/mock.brackets')();

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/morsecode.js =>', () => {
    const { encodeToMorseCode } = require('../src/web/morsecode');
    const { decodeFromMorseCode } = require('../src/web/morsecode');

    it('Should handle pure text', () => {
      const clearText = 'thisisapuretext';
      const encodedText = '- .... .. ... .. ... .- .--. ..- .-. . - . -..- -';
      expect(encodeToMorseCode(clearText)).toEqual(encodedText);
      expect(decodeFromMorseCode(encodedText)).toEqual(clearText);
    });
    it('Should handle text with spaces', () => {
      const clearText = 'this is a text with spaces';
      const encodedText = '- .... .. ... ^ .. ... ^ .- ^ - . -..- - ^ .-- .. - .... ^ ... .--. .- -.-. . ...';
      expect(encodeToMorseCode(clearText)).toEqual(encodedText);
      expect(decodeFromMorseCode(encodedText)).toEqual(clearText);
    });

    it('Should handle text with numbers', () => {
      const clearText = 'this is a text with 21455';
      const encodedText = '- .... .. ... ^ .. ... ^ .- ^ - . -..- - ^ .-- .. - .... ^ ..--- .---- ....- ..... .....';
      expect(encodeToMorseCode(clearText)).toEqual(encodedText);
      expect(decodeFromMorseCode(encodedText)).toEqual(clearText);
    });
  });
});
