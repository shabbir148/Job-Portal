export const topCompanies = [
  {
    name: "Google",
    logo: "🌟",
    openJobs: 1247,
    industry: "Technology",
    rating: 4.5,
  },
  {
    name: "Microsoft",
    logo: "🔷",
    openJobs: 892,
    industry: "Technology",
    rating: 4.4,
  },
  {
    name: "Apple",
    logo: "🍎",
    openJobs: 673,
    industry: "Technology",
    rating: 4.3,
  },
  {
    name: "Amazon",
    logo: "📦",
    openJobs: 1856,
    industry: "E-commerce",
    rating: 4.1,
  },
  {
    name: "Meta",
    logo: "📘",
    openJobs: 542,
    industry: "Social Media",
    rating: 4.2,
  },
  {
    name: "IBM",
    logo: "⚡",
    openJobs: 384,
    industry: "Automotive",
    rating: 4.0,
  },
  {
    name: "Netflix",
    logo: "🎬",
    openJobs: 156,
    industry: "Entertainment",
    rating: 4.3,
  },
  {
    name: "Spotify",
    logo: "🎵",
    openJobs: 98,
    industry: "Music Streaming",
    rating: 4.4,
  },
];

export const jobOpenings = [
  {
    id: 1,
    company: {
      name: "Figma",
      logo: "F",
      logoClass: "figma",
      location: "Mumbai, India",
    },
    title: "Senior Product Designer",
    description:
      "Your job role would be to work alongside UX researchers, product managers, and engineers to create...",
    tags: [
      { text: "15 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "15,00,000 INR", type: "salary" },
    ],
    requirements: [
      "5+ years of experience in product design",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Strong understanding of user-centered design principles",
      "Experience with design systems and component libraries",
      "Bachelor's degree in Design, HCI, or related field",
    ],
    featured: false,
  },
  {
    id: 2,
    company: {
      name: "Google Inc.",
      logo: "G",
      logoClass: "google",
      location: "Hyderabad, India",
    },
    title: "Project Manager",
    description:
      "As a project manager, you'll work with our diverse group of software engineering, design, marketing...",
    tags: [
      { text: "8 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "12,00,000 INR", type: "salary" },
    ],
    requirements: [
      "3+ years of project management experience",
      "PMP or equivalent certification preferred",
      "Experience with Agile/Scrum methodologies",
      "Strong communication and leadership skills",
      "Bachelor's degree in Engineering, Business, or related field",
    ],
    featured: false,
  },
  {
    id: 3,
    company: {
      name: "LinkedIn",
      logo: "in",
      logoClass: "linkedin",
      location: "Bengaluru, India",
    },
    title: "Full Stack Developer",
    description:
      "The ideal candidate will be responsible for conceptualizing and executing clear, quality code to develop...",
    tags: [
      { text: "12 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "21,00,000 INR/Year", type: "salary" },
    ],
    requirements: [
      "4+ years of full-stack development experience",
      "Proficiency in React, Node.js, and databases (SQL/NoSQL)",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of microservices architecture",
      "Bachelor's degree in Computer Science or related field",
    ],
    featured: false,
  },
  {
    id: 4,
    company: {
      name: "Amazon",
      logo: "a",
      logoClass: "amazon",
      location: "Bengaluru, India",
    },
    title: "Front-end Developer",
    description:
      "We are looking for a qualified front-end developer to join our IT team. You will be responsible for...",
    tags: [
      { text: "20 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "33,00,000 INR/Year", type: "salary" },
    ],
    requirements: [
      "3+ years of front-end development experience",
      "Expert knowledge of HTML5, CSS3, JavaScript, and TypeScript",
      "Experience with React, Angular, or Vue.js",
      "Understanding of responsive design and cross-browser compatibility",
      "Bachelor's degree in Computer Science or equivalent experience",
    ],
    featured: false,
  },
  {
    id: 5,
    company: {
      name: "Twitter",
      logo: "t",
      logoClass: "twitter",
      location: "Pune, India",
    },
    title: "ReactJS Developer",
    description:
      "We are actively looking for a front-end web developer who is motivated and has extensive...",
    tags: [
      { text: "6 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "30,00,000 inr/Year", type: "salary" },
    ],
    requirements: [
      "3+ years of React.js development experience",
      "Strong knowledge of JavaScript ES6+, JSX, and Redux",
      "Experience with modern build tools (Webpack, Babel, npm/yarn)",
      "Understanding of RESTful APIs and GraphQL",
      "Bachelor's degree in Computer Science or related field",
    ],
    featured: false,
  },
  {
    id: 6,
    company: {
      name: "Microsoft",
      logo: "⊞",
      logoClass: "microsoft",
      location: "Noida, India",
    },
    title: "Python Developer",
    description:
      "We are currently hiring a Python developer to join our product development team and work on our...",
    tags: [
      { text: "8 Position", type: "position" },
      { text: "Full Time", type: "type" },
      { text: "32,00,000/Year", type: "salary" },
    ],
    requirements: [
      "4+ years of Python development experience",
      "Strong knowledge of Django or Flask frameworks",
      "Experience with databases (PostgreSQL, MySQL, MongoDB)",
      "Understanding of data structures, algorithms, and software design patterns",
      "Bachelor's degree in Computer Science, Engineering, or related field",
    ],
    featured: false,
  },
];

export const jobCategories = [
  {
    name: "Technology",
    icon: "💻",
    jobCount: 2340,
    color: "#3b82f6",
  },
  {
    name: "Design",
    icon: "🎨",
    jobCount: 1205,
    color: "#8b5cf6",
  },
  {
    name: "Marketing",
    icon: "📈",
    jobCount: 987,
    color: "#10b981",
  },
  {
    name: "Sales",
    icon: "💼",
    jobCount: 1456,
    color: "#f59e0b",
  },
  {
    name: "Finance",
    icon: "💰",
    jobCount: 678,
    color: "#ef4444",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    jobCount: 892,
    color: "#06b6d4",
  },
  {
    name: "Education",
    icon: "📚",
    jobCount: 534,
    color: "#84cc16",
  },
  {
    name: "Engineering",
    icon: "⚙️",
    jobCount: 1789,
    color: "#f97316",
  },
];

export const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Software Engineer at Google",
      image: "👩‍💻",
      content: "I found my dream job through this platform in just 2 weeks! The process was smooth and the job recommendations were spot on.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager at Microsoft",
      image: "👨‍💼",
      content: "The best job portal I've ever used. Great companies, easy application process, and excellent support team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "UX Designer at Apple",
      image: "👩‍🎨",
      content: "Thanks to this platform, I was able to transition from freelancing to a full-time role at my dream company!",
      rating: 5,
    },
    {
      id: 4,
      name: "Peter Parkinson",
      position: "Full Stack Developer",
      image: "👨‍💻",
      content: "I was just a graduate of computer science from not so well-known university and even didn't have any internship experience in fullstack development. However, my knowledge in the domain, excitement to learn new things, and the help from this Job Portal for good job posting gave me a chance to boost my career at my first developed skill made working in industry.",
      rating: 5,
    },
    {
      id: 5,
      name: "Jessica Wu",
      position: "Data Scientist at Netflix",
      image: "👩‍🔬",
      content: "The AI-powered job matching feature is incredible. It connected me with opportunities I never would have found otherwise.",
      rating: 5,
    },
  ];

export const workStepsData = [
  {
    step: "01",
    title: "Create Account",
    description:
      "Sign up and create your professional profile with all your details and preferences",
    icon: "👥",
    color: "#3b82f6",
  },
  {
    step: "02",
    title: "Upload CV/Resume",
    description:
      "Upload your resume and showcase your skills, experience, and achievements",
    icon: "📄",
    color: "#8b5cf6",
  },
  {
    step: "03",
    title: "Find Suitable Job",
    description:
      "Browse through thousands of jobs and find the ones that match your profile",
    icon: "🔍",
    color: "#10b981",
  },
  {
    step: "04",
    title: "Apply for Job",
    description:
      "Apply to your dream job with one click and track your application status",
    icon: "📨",
    color: "#f59e0b",
  },
];

export const stats = [
  {
    number: "50K+",
    label: "Jobs Available",
    icon: "💼",
  },
  {
    number: "12K+",
    label: "Companies",
    icon: "🏢",
  },
  {
    number: "1M+",
    label: "Candidates",
    icon: "👥",
  },
  {
    number: "95%",
    label: "Success Rate",
    icon: "🎯",
  },
];

// Helper functions for data manipulation
export const getJobsByCategory = (category) => {
  return jobOpenings.filter((job) =>
    job.requirements.some((req) =>
      req.toLowerCase().includes(category.toLowerCase())
    )
  );
};

export const getJobsByLocation = (location) => {
  return jobOpenings.filter((job) =>
    job.company.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getJobsByCompany = (company) => {
  return jobOpenings.filter((job) =>
    job.company.name.toLowerCase().includes(company.toLowerCase())
  );
};

export const searchJobs = (query) => {
  const searchTerm = query.toLowerCase();
  return jobOpenings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.name.toLowerCase().includes(searchTerm) ||
      job.company.location.toLowerCase().includes(searchTerm) ||
      job.requirements.some((req) => req.toLowerCase().includes(searchTerm))
  );
};
