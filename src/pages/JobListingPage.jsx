import React, { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import JobList from '../components/JobList';
import FilterSidebar from '../components/FilterSidebar';

export default function JobListingPage() {

  const { jobs } = useJobContext();
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    jobType: '',
    category: '',
    experienceLevel: '',
    minSalary: '',
    maxSalary: '',
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesLocation = filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesJobType = filters.jobType === '' || job.type === filters.jobType;
    const matchesCategory = filters.category === '' || job.category === filters.category;
    const matchesExperienceLevel = filters.experienceLevel === '' || job.experienceLevel === filters.experienceLevel;
    
    const [minSalary, maxSalary] = job.salaryRange.split(' - ').map(Number);
    const matchesSalary = (filters.minSalary === '' || minSalary >= filters.minSalary) &&
                          (filters.maxSalary === '' || maxSalary <= filters.maxSalary);

    return matchesSearch && matchesLocation && matchesJobType && matchesCategory && matchesExperienceLevel && matchesSalary;
  });

  return (
    <div className="mx-auto py-6 sm:px-6 lg:px-8">
      {/* Floating Filter Button for Small Devices */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar and Job List Container */}
      <div className="w-full flex justify-center px-4 sm:px-0">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar for Medium and Larger Devices */}
          <div className="w-full md:w-4/12 md:block hidden">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Sidebar for Small Devices */}
          {isSidebarOpen && (
            <div className="fixed top-0 left-0 bg-white z-40 w-3/4 h-full shadow-lg px-6 py-4 transform transition-transform duration-300 ease-in-out md:hidden">
              <FilterSidebar filters={filters} setFilters={setFilters} />
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Job Listings */}
          <div className="md:w-[69dvw] md:0 m-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Listings</h1>
            <JobList jobs={filteredJobs} />
          </div>
        </div>
      </div>
    </div>
  );
}

