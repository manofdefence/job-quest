import { Link } from 'react-router-dom';
import JobList from '../components/JobList';
import { useJobContext } from '../context/JobContext';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  const { jobs } = useJobContext();

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0" id="featured-jobs">
          <h2 className="text-3xl font-bold text-gray-900">Featured Job Listings</h2>
          <div className="mt-6">
            <JobList jobs={jobs.slice(0, 3)} />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              More Jobs
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

