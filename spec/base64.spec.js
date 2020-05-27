/**
 *  File: base64.spec.js
 *  Author(s): Chif <nadchif@gmail.com>, Shankhanil <shankha.rik@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/base64.js =>', () => {
    const { encodeToBase64 } = require('../src/web/base64');
    const { decodeFromBase64 } = require('../src/web/base64');

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = 'dGhpc0lTYVBVUkV0ZXh0';
      expect(encodeToBase64(clearText)).toEqual(encodedText);
      expect(decodeFromBase64(encodedText)).toEqual(clearText);
    });
    it('Should encode and decode pure numbers', () => {
      const clearText = '223.2455';
      const encodedText = 'MjIzLjI0NTU=';
      expect(encodeToBase64(clearText)).toEqual(encodedText);
      expect(decodeFromBase64(encodedText)).toEqual(clearText);
    });
    describe('Encode/decode special characters =>', () => {
      it('should encode and decode text with spaces', () => {
        const clearText = 'this is a text containing spaces';
        const encodeText = 'dGhpcyBpcyBhIHRleHQgY29udGFpbmluZyBzcGFjZXM=';
        expect(encodeToBase64(clearText)).toEqual(clearText);
        expect(decodeFromBase64(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with special characters', () => {
        // NEED REVIEW
        const clearText = 'this is a \'text\':spaces and "special_characters",along with more-special-chars,including =!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = 'dGhpcyBpcyBhIFwndGV4dFwnOnNwYWNlcyBhbmQgInNwZWNpYWxfY2hhcmFjdGVycyIsYWxvbmcgd2l0aCBtb3JlLXNwZWNpYWwtY2hhcnMsaW5jbHVkaW5nID0hQCMkJV4mKigpe31bXTs=';
        expect(encodeToBase64(clearText)).toEqual(encodeText);
        expect(decodeFromBase64(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with New line', () => {
        // NEED REVIEW
        const clearText = 'this is a line of text\nThis is another line of text';
        const encodeText = 'dGhpcyBpcyBhIGxpbmUgb2YgdGV4dA0KVGhpcyBpcyBhbm90aGVyIGxpbmUgb2YgdGV4dA==';
        expect(encodeToBase64(clearText)).toEqual(encodeText);
        expect(decodeFromBase64(encodeText)).toEqual(clearText);
      });
    });
  });
});
