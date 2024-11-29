const Login = require('../login.js');  // Correct relative path to login.js

describe('Login Tests', () => {
  const login = new Login();

  test('Invalid login should return false', () => {
    expect(login.validate('invalid@example.com', 'wrongpassword')).toBe(false);
  });
});
