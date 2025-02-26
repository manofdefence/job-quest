import { Link } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

export default function SavedJobs() {
  const { savedJobs, removeSavedJob } = useJobContext();

  return (
    <div className='w-full mt-2'>
      <div className="bg-white shadow overflow-hidden sm:rounded-md w-9/12 mx-auto">
      <ul className="divide-y divide-gray-200 m-2 px-2">
        {savedJobs.map((job) => (
          <li key={job.id}>
            <div className="pt-4 pb-6 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-indigo-600 ">{job.title}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {job.type}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-gray-500">
                    {job.company}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    {job.location}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-lg text-gray-500 sm:mt-0">
                  <p>
                  ₹{job.salaryRange.split('-')[0]} - ₹{job.salaryRange.split('-')[1]}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <Link
                  to={`/job/${job.id}`}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeSavedJob(job.id)}
                  className="text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

