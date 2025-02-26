import { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Developer',
      company: 'TechWave',
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      category: 'Engineering',
      experienceLevel: 'Mid-level',
      salaryRange: '800000 - 1200000',
      description: 'We are looking for a talented Software Developer proficient in JavaScript, React, and Node.js to build scalable web applications.',
      postedDate: '2025-01-15',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'NextGen Solutions',
      location: 'Gurugram, Haryana',
      type: 'Full-time',
      category: 'Product Management',
      experienceLevel: 'Senior',
      salaryRange: '1500000 - 2000000',
      description: 'Join our team as a Product Manager to lead cross-functional teams and oversee product development.',
      postedDate: '2025-01-16',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Sphere',
      location: 'Remote',
      type: 'Contract',
      category: 'Design',
      experienceLevel: 'Junior',
      salaryRange: '500000 - 800000',
      description: 'We are hiring a creative UI/UX Designer to design engaging interfaces for our web and mobile applications.',
      postedDate: '2025-01-17',
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'DataWiz',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      category: 'Data Analysis',
      experienceLevel: 'Mid-level',
      salaryRange: '1000000 - 1400000',
      description: 'We are seeking a Data Analyst with expertise in Python, SQL, and Tableau to derive actionable insights from data.',
      postedDate: '2025-01-16',
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      company: 'MarketForce',
      location: 'Mumbai, Maharashtra',
      type: 'Part-time',
      category: 'Marketing',
      experienceLevel: 'Mid-level',
      salaryRange: '400000 - 600000',
      description: 'Help us drive growth with creative marketing strategies and campaigns across digital platforms.',
      postedDate: '2025-01-17',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudOps',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      category: 'Engineering',
      experienceLevel: 'Mid-level',
      salaryRange: '1200000 - 1600000',
      description: 'We are seeking a skilled DevOps Engineer to optimize and maintain our CI/CD pipelines and cloud infrastructure.',
      postedDate: '2025-01-15',
    },
    {
      id: 7,
      title: 'Content Writer',
      company: 'WordSmiths',
      location: 'Chennai, Tamil Nadu',
      type: 'Freelance',
      category: 'Content',
      experienceLevel: 'Junior',
      salaryRange: '250000 - 400000',
      description: 'Join our team to create engaging content for blogs, websites, and marketing campaigns.',
      postedDate: '2025-01-14',
    },
    {
      id: 8,
      title: 'Android Developer',
      company: 'AppNation',
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      category: 'Mobile Development',
      experienceLevel: 'Mid-level',
      salaryRange: '1000000 - 1300000',
      description: 'We need an Android Developer proficient in Kotlin and Java to build high-performing mobile applications.',
      postedDate: '2025-01-14',
    },
    {
      id: 9,
      title: 'Machine Learning Engineer',
      company: 'AI Ventures',
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      category: 'AI/ML',
      experienceLevel: 'Senior',
      salaryRange: '1800000 - 2200000',
      description: 'We are looking for a Machine Learning Engineer to develop and deploy state-of-the-art ML models.',
      postedDate: '2025-01-13',
    },
    {
      id: 10,
      title: 'Customer Support Executive',
      company: 'SupportHub',
      location: 'Noida, Uttar Pradesh',
      type: 'Full-time',
      category: 'Customer Service',
      experienceLevel: 'Junior',
      salaryRange: '300000 - 450000',
      description: 'Join us as a Customer Support Executive to resolve customer queries and improve satisfaction levels.',
      postedDate: '2025-01-16',
    }
    
  ]);

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const applyToJob = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    if (job && !appliedJobs.some(j => j.id === jobId)) {
      setAppliedJobs([...appliedJobs, { ...job, status: 'Applied', appliedDate: new Date().toISOString().split('T')[0] }]);
    }
  };

  const saveJob = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    if (job && !savedJobs.some(j => j.id === jobId)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeSavedJob = (jobId) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  return (
    <JobContext.Provider value={{ jobs, appliedJobs, savedJobs, applyToJob, saveJob, removeSavedJob }}>
      {children}
    </JobContext.Provider>
  );
}

