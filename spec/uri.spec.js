/**
 *  File: uri.spec.js
 *  Author(s): Chif <nadchif@gmail.com>, Shankhanil <shankha.rik@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/uri.js =>', () => {
    const { encodeToURI } = require('../src/web/uri');
    const { decodeFromURI } = require('../src/web/uri');

    it('Should keep pure text unchanged', () => {
      const clearText = 'ThisISaPUREtext';
      expect(encodeToURI(clearText)).toEqual(clearText);
      expect(decodeFromURI(clearText)).toEqual(clearText);
    });
    describe('Encode special characters =>', () => {
      it('should encode and decode text with spaces', () => {
        const clearText = 'this is a text containing spaces';
        const encodeText = 'this%20is%20a%20text%20containing%20spaces';
        expect(encodeToURI(clearText)).toEqual(encodeText);
        expect(decodeFromURI(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with special characters', () => {
        const clearText = 'this is a text and "special_characters",along with more-special-chars,including =!@#$%^&*(){}[];';
        const encodeText = 'this%20is%20a%20text%20and%20%22special_characters%22,along%20with%20more-special-chars,including%20=!@#$%25%5E&*()%7B%7D%5B%5D;';
        expect(encodeToURI(clearText)).toEqual(encodeText);
        expect(decodeFromURI(encodeText)).toEqual(clearText);
      });
    });
  });
});
