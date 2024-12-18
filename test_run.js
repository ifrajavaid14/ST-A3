// __tests__/login.test.js

const Login = require('../login');  // Adjust the path if necessary

describe('Login Tests', () => {
  const login = new Login();

  test('Invalid login should return false', () => {
    console.log('Testing CI/CD pipeline');
    expect(login.validate('ifrajavaid@example.com', 'password456')).toBe(true);
    expect(login.validate('invalid@example.com', 'password456')).toBe(false);
  });

  test('Invalid email should return false', () => {
    expect(login.validate('invalid@example.com', 'password123')).toBe(false);
  });

  test('Incorrect password should return false', () => {
    expect(login.validate('johndoe@example.com', 'wrong password')).toBe(false);
  });

  test('Empty fields should return false', () => {
    expect(login.validate('', '')).toBe(false);
    expect(login.validate('email@example.com', '')).toBe(false);
    expect(login.validate('', 'password')).toBe(false);
  });

  test('SQL injection attempt should return false', () => {
    expect(login.validate("' OR 1=1 --", 'password123')).toBe(false);
  });
});
