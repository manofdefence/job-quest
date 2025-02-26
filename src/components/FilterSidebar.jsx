export default function FilterSidebar({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <div className="bg-white w-60 shadow rounded-lg px-6 py-4 md:h-[86dvh] ">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700">
            Search
          </label>
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            value={filters.searchTerm}
            onChange={handleFilterChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Job title, company, or keywords"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="City, State, or Remote"
          />
        </div>
        <div>
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            value={filters.jobType}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div>
          <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
            Experience Level
          </label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={filters.experienceLevel}
            onChange={handleFilterChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All</option>
            <option value="Junior">Junior</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div>
          <label htmlFor="minSalary" className="block text-sm font-medium text-gray-700">
            Min Salary
          </label>
          <input
            type="number"
            name="minSalary"
            id="minSalary"
            value={filters.minSalary}
            onChange={handleFilterChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. 50000"
          />
        </div>
        <div>
          <label htmlFor="maxSalary" className="block text-sm font-medium text-gray-700">
            Max Salary
          </label>
          <input
            type="number"
            name="maxSalary"
            id="maxSalary"
            value={filters.maxSalary}
            onChange={handleFilterChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g. 150000"
          />
        </div>
      </div>
    </div>
  );
}

