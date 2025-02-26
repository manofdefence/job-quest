import { Link } from 'react-router-dom';
import jobb from '../assets/jobb.png';

export default function Hero() {
  const scrollToJobs = (event) => {
    event.preventDefault();
    const jobsSection = document.getElementById('featured-jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-primary flex items-center justify-center'>
      <div className="bg-primary flex flex-col lg:flex-row items-center justify-between p-5">
      {/* Left Content */}
      <div className="max-w-3xl mx-auto px-3 py-16 sm:py-24 sm:px-6 lg:px-8 lg:w-1/2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Find Your Dream Job
        </h1>
        <p className="mt-6 text-lg text-indigo-100 max-w-3xl">
          Discover opportunities that match your skills and aspirations. <br />
          Our job search platform connects you with top employers and exciting career paths.
        </p>
        <div className="mt-10 max-w-sm sm:flex sm:max-w-none lg:-ml-28">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#featured-jobs"
              onClick={scrollToJobs}
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
            >
              Explore Jobs
            </a>
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-500 sm:px-8"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:px-0 lg:justify-end px-4 py-8 lg:py-0">
        <img
          src={jobb}
          alt="Job Search Illustration"
          className="max-w-full h-auto object-cover rounded-lg lg:max-w-md"
        />
      </div>
    </div>
    </div>
  );
}
