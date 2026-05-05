const jobs = [
  {
    id: 1,

    // Basic Info
    title: "Senior Frontend Developer",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",

    // Company Info (NEW)
    companyInfo: {
      founded: 1998,
      employees: "190,000+",
      website: "https://google.com"
    },

    // Job Details
    location: {
      city: "Gurgaon",
      country: "India",
      type: "Remote"
    },

    experience: "3 - 5 years",
    salary: {
      min: 14,
      max: 20,
      currency: "LPA"
    },

    jobType: "Full-time",
    category: "Tech",

    // Stats
    applicants: 127,
    openings: 5,
    postedDate: "2025-05-19",
    deadline: "2025-03-30",

    // Extra (NEW)
    jobLevel: "Mid-Senior Level",
    workMode: "Remote",
    industry: "Software Development",

    // Skills
    skills: ["React", "NodeJs", "JavaScript", "SQL", "MongoDB", "Express", "AWS"],

    // Description
    description: `
      We are seeking a Senior Frontend Developer with expertise in React.js, TypeScript, 
      and modern frontend architectures to build scalable applications.
    `,

    // Responsibilities
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Optimize performance and scalability",
      "Ensure best UI/UX practices",
      "Lead frontend architecture decisions"
    ],

    // Requirements
    requirements: [
      "3-5 years of experience in frontend development",
      "Strong knowledge of React & TypeScript",
      "Experience with REST APIs",
      "Familiar with Git & CI/CD pipelines",
      "Understanding of SDLC"
    ],

    // Benefits
    benefits: [
      "Work from anywhere",
      "Learning & development",
      "Open door policy",
      "Health insurance",
      "Flexible working hours"
    ]
  },

  {
    id: 2,
    title: "Angular Developer",
    company: "Facebook",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png",

    companyInfo: {
      founded: 2004,
      employees: "250,000+",
      website: "https://meta.com"
    },

    location: {
      city: "Pune",
      country: "India",
      type: "On-Site"
    },

    experience: "2 - 4 years",
    salary: {
      min: 6,
      max: 10,
      currency: "LPA"
    },

    jobType: "Full-time",
    category: "Tech",

    applicants: 90,
    openings: 3,
    postedDate: "2025-05-18",
    deadline: "2025-04-10",

    jobLevel: "Associate",
    workMode: "On-Site",
    industry: "Software Development",

    skills: ["Angular", "JavaScript", "SQL", "MongoDB"],

    description: `
      We are looking for an Angular Developer to build modern web applications.
    `,

    responsibilities: [
      "Develop Angular applications",
      "Work with backend APIs",
      "Improve UI performance",
      "Collaborate with design teams"
    ],

    requirements: [
      "Experience in Angular",
      "Strong JS knowledge",
      "Database basics",
      "Good problem-solving skills"
    ],

    benefits: [
      "Health insurance",
      "Flexible work hours",
      "Paid leaves"
    ]
  },

  {
    id: 3,
    title: "Software Development Engineer",
    company: "Juspay",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",

    companyInfo: {
      founded: 2012,
      employees: "200+",
      website: "https://juspay.in"
    },

    location: {
      city: "Bangalore",
      country: "India",
      type: "Hybrid"
    },

    experience: "5 - 7 years",
    salary: {
      min: 20,
      max: 26,
      currency: "LPA"
    },

    jobType: "Full-time",
    category: "Tech",

    applicants: 60,
    openings: 2,
    postedDate: "2025-05-17",
    deadline: "2025-04-20",

    jobLevel: "Senior",
    workMode: "Hybrid",
    industry: "FinTech",

    skills: ["React", "NodeJs", "JavaScript", "SQL"],

    description: `
      We are hiring SDEs to work on scalable fintech systems and payment solutions.
    `,

    responsibilities: [
      "Design scalable systems",
      "Write clean and maintainable code",
      "Collaborate with backend teams",
      "Optimize application performance"
    ],

    requirements: [
      "Strong problem-solving skills",
      "Experience with system design",
      "Knowledge of backend technologies",
      "Familiar with cloud services"
    ],

    benefits: [
      "Stock options",
      "Work from anywhere",
      "Learning budget",
      "Team outings"
    ]
  }
];

module.exports = jobs;