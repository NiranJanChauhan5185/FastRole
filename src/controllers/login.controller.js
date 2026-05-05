const { v4: uuid } = require('uuid');

const users = [];

// Show login page
exports.showLogin = (req, res) => {
    res.render('auth'); // ✅ matches your file auth.ejs
};

// Register
exports.register = (req, res) => {
    const { name, email, password } = req.body;

    const user = {
        id: uuid(),
        name,
        email,
        password
    };

    users.push(user);

    res.redirect('/auth');
};

// Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.send("Invalid credentials");
    }

    req.session.user = user;

    res.redirect('/');
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth');
    });
};