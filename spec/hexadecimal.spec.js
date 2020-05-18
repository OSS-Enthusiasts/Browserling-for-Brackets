/**
 *  File: hexadecimal.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/hexadecimal.js =>', () => {
    const { encodeToHex } = require('../src/web/hexadecimal');
    const { decodeFromHex } = require('../src/web/hexadecimal');

    describe('plain text => ', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = '746869734953615055524574657874';
      it('Should encode plain text', () => {
        expect(encodeToHex(clearText)).toEqual(encodedText);
      });
      it('Should decode plain text', () => {
        expect(decodeFromHex(encodedText)).toEqual(clearText);
      });
    });
    describe('special characters => ', () => {
      const clearText = '\'This\' is with: special/char_acters;';
      const encodeText = '27546869732720697320776974683a207370656369616c2f636861725f6163746572733b';
      it('Should encode special characters', () => {
        expect(encodeToHex(clearText).toLowerCase()).toEqual(encodeText.toLowerCase());
      });
      it('Should decode special characters', () => {
        expect(decodeFromHex(encodeText)).toEqual(clearText);
      });
    });
  });
});
