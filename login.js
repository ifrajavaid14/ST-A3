class Login {
    // Simulate SQL validation logic
    validate(username, password) {
        const validUser = 'user';
        const validPass = 'pass';

        // Simulate protection against SQL Injection
        if (username.includes("'") || password.includes("'")) {
            return false; // Reject SQL injection attempts
        }

        return username === validUser && password === validPass;
    }
}

module.exports = Login;

