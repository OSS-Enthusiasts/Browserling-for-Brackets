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

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      // eslint-disable-next-line max-len
      const encodedText = '746869734953615055524574657874';
      expect(encodeToHex(clearText)).toEqual(encodedText);
      expect(decodeFromHex(encodedText)).toEqual(clearText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () => {
        const clearText = 'this is a text with spaces';
        // eslint-disable-next-line max-len
        const encodeText = '7468697320697320612074657874207769746820737061636573';
        expect(encodeToHex(clearText)).toEqual(clearText);
        expect(decodeFromHex(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with special characters', () => {
        // NEED REVIEW
        const clearText = '\'This\' is with: special/char_acters;';
        // eslint-disable-next-line max-len
        const encodeText = '27546869732720697320776974683a207370656369616c2f636861725f6163746572733b';
        expect(encodeToHex(clearText)).toEqual(encodeText);
        expect(decodeFromHex(encodeText)).toEqual(clearText);
      });
    });
  });
});
