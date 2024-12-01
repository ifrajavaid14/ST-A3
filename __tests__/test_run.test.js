const Login = require('../login'); // Adjust the path if login.js is in a different directory

describe('Login Class Tests', () => {
    let login;

    beforeEach(() => {
        login = new Login(); // Create a new instance before each test
    });

    test('Valid login credentials should return true', () => {
        const result = login.validate('user', 'pass');
        expect(result).toBe(true); // Assertion
    });

    test('Invalid username should return false', () => {
        const result = login.validate('wrongUser', 'pass');
        expect(result).toBe(false); // Assertion
    });

    test('Invalid password should return false', () => {
        const result = login.validate('user', 'wrongPass');
        expect(result).toBe(false); // Assertion
    });

    test('Both username and password invalid should return false', () => {
        const result = login.validate('wrongUser', 'wrongPass');
        expect(result).toBe(false); // Assertion
    });
});

  test('SQL injection attempt should return false', () => {
    expect(login.validate("' OR 1=1 --", 'password123')).toBe(false);
  });
});
