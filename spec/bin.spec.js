
/**
 *  File: MD5.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/MD5.js =>', () => {
    const { encodeToBin } = require('../src/web/bin');

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = '011101000110100001101001011100110100100101010011011000010101000001010101010100100100010101110100011001010111100001110100';
      expect(encodeToBin(clearText)).toEqual(encodedText);
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'thisISaPUREtextWITH1225';
      const encodedText = '0111010001101000011010010111001101001001010100110110000101010000010101010101001001000101011101000110010101111000011101000101011101001001010101000100100000110001001100100011001000110101';
      expect(encodeToBin(clearText)).toEqual(encodedText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('Should encode and decode text with special characters', () => {
        const clearText = 'TEXTwithSPECIALchars\'"\\/=!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = '010101000100010101011000010101000111011101101001011101000110100001010011010100000100010101000011010010010100000101001100011000110110100001100001011100100111001101011100001001110010001001011100010111000010111100111101001000010100000000100011001001000010010101011110001001100010101000101000001010010111101101111101010110110101110100111011';
        expect(encodeToBin(clearText)).toEqual(encodeText);
      });
    });
  });
});
