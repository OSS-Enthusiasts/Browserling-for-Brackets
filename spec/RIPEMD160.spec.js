/**
 *  File: SHA1.spec.js
 *  Author(s): unguest (Based on a work of Shankhanil <shankha.rik@gmail.com>)
 */

require('amd-loader');

// for tests that need RequireJS
define((require) => {
  describe('src/RIPEMD160.js =>', () => {
    const { encodeToRIPEMD160 } = require('../src/hashing/RIPEMD160');
    it('Should encode and decode pure text', () => {
      const clearText = 'javascript';
      const encodedText = 'c10b83bcea4ab21102611a10ff9add87e2b3e7be';
      expect(encodeToRIPEMD160(clearText)).toEqual(encodedText);
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'Python3';
      const encodedText = '447da4169eed534a51f2c8a5c1d2d88eabcd81df';
      expect(encodeToRIPEMD160(clearText)).toEqual(encodedText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () => {
        const clearText = 'I am an HTML developer.';
        const encodeText = 'b623aa45cd96afa80d6b9522e747330ff32e450e';
        expect(encodeToRIPEMD160(clearText)).toEqual(encodeText);
      });
      it('Should encode and decode text with special characters', () => {
        const clearText = 'I am $ure buT I am tout à fait sure que c\'est un coup de Fantomas !'; // A very good french reference :p
        const encodeText = '08d94410de558a66a71cea97d69c356254ab3e3e';
        expect(encodeToRIPEMD160(clearText)).toEqual(encodeText);
      });
    });
  });
});
