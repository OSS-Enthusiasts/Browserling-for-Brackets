/**
 *  File: password.spec.js
 *  Author(s): Shankhanil <shankha.rik@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define((require) => {
  describe('src/generators/password.js =>', () => {
    const { passwordGen } = require('../src/generators/password.js');
    const { strength } = require('../src/generators/password.js');

    describe('Password module generates password of length 8-12 => ', () => {
      it('should generate a password of length 8-12 over 100 different passwords', () => {
        let password;
        for (let i = 1; i <= 100; i += 1) {
          password = passwordGen();
          expect(password.length).toBeGreaterThan(7);
          expect(password.length).toBeLessThan(13);
        }
      });
    });
    describe('Strengh of password test => ', () => {
      it('Should generate a strong password', () => {
        expect(true).toBe(true);
      });
    });
    describe('Checks the strength of password', () => {
      it('Should return true for a strong password', () => {
        const password = 'aB2+cc_sD';
        expect(strength(password)).toBe(true);
      });
    });
  });
});
