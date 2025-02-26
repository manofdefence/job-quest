import { useParams, useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, applyToJob, saveJob, savedJobs, appliedJobs } = useJobContext();
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  const handleApply = () => {
    applyToJob(job.id);
    navigate('/tracker');
  };

  const handleSave = () => {
    saveJob(job.id);
  };

  const isSaved = savedJobs.some(j => j.id === job.id);
  const isApplied = appliedJobs.some(j => j.id === job.id);

  return (
   <div className='flex w-full'>
       <div className="bg-white shadow overflow-hidden sm:rounded-lg w-9/12 justify-center mx-auto my-10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base leading-6 font-medium text-gray-900">{job.title}</h3>
        <p className="mt-1 max-w-2xl text-4xl font-extralight text-gray-500">{job.company}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job.location}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Job Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job.type}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary</dt>
            <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">{job.salaryRange}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job.description}</dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          onClick={handleSave}
          className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={isSaved}
        >
          {isSaved ? 'Saved' : 'Save for Later'}
        </button>
        <button
          onClick={handleApply}
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isApplied
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
          disabled={isApplied}
        >
          {isApplied ? 'Applied' : 'Apply'}
        </button>
      </div>
    </div>
   </div>
  );
}

