
/**
 *  File: SHA256.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/SHA256.js =>', () => {
    const { encodeToSHA256 } = require('../src/hashing/SHA256');
    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      // eslint-disable-next-line max-len
      const encodedText = 'eff2844c77ff2de356e1c16b2ec9b6e238525b1fca3b3c20e7c0b6e41376596b';
      expect(encodeToSHA256(clearText)).toEqual(encodedText);
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'thisISaPUREtextWITH1225';
      // eslint-disable-next-line max-len
      const encodedText = '1cc9943238e13d891948ccdca970f46519b70ce570a6328a619fb34ef44b3474';
      expect(encodeToSHA256(clearText)).toEqual(encodedText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () => {
        const clearText = 'this is a text containing spaces';
        // eslint-disable-next-line max-len
        const encodeText = '021b802593087603fc94881c6529dea4da077307b5043a7f03e068f3cbae1edf';
        expect(encodeToSHA256(clearText)).toEqual(encodeText);
      });
      it('Should encode and decode text with special characters', () => {
        const clearText = 'TEXTwithSPECIALchars\'\\"\\\\/=!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = '821d27059f3a8025e031f58d5a34ff3683d9f9766a2f7c6884c60b88eaa268e0';
        expect(encodeToSHA256(clearText)).toEqual(encodeText);
      });
    });
  });
});
