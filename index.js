const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// ======================
// BODY PARSER
// ======================
app.use(express.urlencoded({ extended: true }));

// ======================
// STATIC FILES
// ======================
app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ======================
// SESSION SETUP (IMPORTANT)
// ======================
app.use(session({
    secret: 'fastrole_secret',
    resave: false,
    saveUninitialized: true
}));

// ======================
// GLOBAL USER (VERY IMPORTANT)
// ======================
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

// ======================
// VIEW ENGINE
// ======================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// ======================
// ROUTES
// ======================
const jobRoutes = require('./src/routes/job.routes');
const authRoutes = require('./src/routes/login.routes');

// Auth routes (login/register/logout)
app.use('/', authRoutes);

// Job routes
app.use('/jobs', jobRoutes);

// ======================
// HOME ROUTE (YOUR UI PAGE)
// ======================
app.get('/', (req, res) => {
    res.render('layout'); // your main UI file
});

// ======================
// 404 PAGE
// ======================
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// ======================
// SERVER
// ======================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});