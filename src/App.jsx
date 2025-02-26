import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import JobDetails from './components/JobDetails';
import ApplicationTracker from './components/ApplicationTracker';
import JobListingPage from './pages/JobListingPage';
import SavedJobs from './components/SavedJobs';
import { JobProvider } from './context/JobContext';

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<JobListingPage />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/tracker" element={<ApplicationTracker />} />
              <Route path="/saved-jobs" element={<SavedJobs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;

