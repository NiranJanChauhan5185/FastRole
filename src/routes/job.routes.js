const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const job = require('../controllers/job.controller');

// 🔥 MULTER CONFIG (inside same file)
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
router.get('/', job.getJobs);

router.get('/dashboard', job.dashboard);
router.get('/post-job', job.postPage);

// 🔥 IMPORTANT CHANGE HERE
router.post('/post-job', upload.single('logo'), job.addJob);

router.get('/:id', job.getJobById);
router.post('/:id/apply', job.applyJob);

module.exports = router;