const jobs = require('../models/jobs.model');
const applications = require('../models/applications.model');

// ======================
// HOME
// ======================
exports.home = (req, res) => {
    res.render('layout');
};

// ======================
// JOB LIST
// ======================
exports.getJobs = (req, res) => {
    res.render('jobs', { jobs });
};

// ======================
// JOB DETAILS
// ======================
exports.getJobById = (req, res) => {
    const job = jobs.find(j => j.id == req.params.id);

    if (!job) return res.send("Job not found");

    res.render('jobDetails', { job });
};

// ======================
// APPLY JOB
// ======================
exports.applyJob = (req, res) => {
    const job = jobs.find(j => j.id == req.params.id);

    if (!job) return res.send("Job not found");

    const { name, email, phone } = req.body;

    applications.push({
        jobId: job.id,
        name,
        email,
        phone
    });

    job.applicants += 1;

    res.redirect('/jobs/' + job.id);
};

// ======================
// DASHBOARD
// ======================
exports.dashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth');
    }

    res.render('dashboard', { applications, jobs });
};

// ======================
// POST JOB PAGE
// ======================
exports.postPage = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth');
    }

    res.render('postJob');
};

// ======================
// ADD JOB (FINAL FIXED)
// ======================
exports.addJob = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth');
    }

    const newJob = {
        id: jobs.length + 1,

        // BASIC INFO
        title: req.body.title || "Untitled Job",
        company: req.body.company || "Unknown Company",

        // FILE UPLOAD
        companyLogo: req.file ? '/uploads/' + req.file.filename : '',

        // JOB INFO
        applicants: 0,
        openings: req.body.openings || 0,

        location: {
            city: req.body.city || "N/A",
            country: "India",
            type: "Remote"
        },

        salary: {
            min: req.body.min || 0,
            max: req.body.max || 0,
            currency: "LPA"
        },

        // ARRAYS (SAFE SPLIT)
        skills: req.body.skills
            ? req.body.skills.split(',').map(s => s.trim())
            : [],

        // 🔥 MAIN FIX (NOW DATA WILL SHOW IN UI)
        description: req.body.description || "No description provided",

        responsibilities: req.body.responsibilities
            ? req.body.responsibilities.split(',').map(r => r.trim())
            : [],

        requirements: req.body.requirements
            ? req.body.requirements.split(',').map(r => r.trim())
            : [],

        benefits: req.body.benefits
            ? req.body.benefits.split(',').map(b => b.trim())
            : [],

        deadline: "Not specified"
    };

    jobs.push(newJob);

    res.redirect('/jobs');
};