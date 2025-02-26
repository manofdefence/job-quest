import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <header className="bg-white shadow-sm h-auto ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " aria-label="Top">
        <div className="w-full py-3 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div>
          <Link to="/">
          <img width={140} src={Logo} alt="Logo" />
              </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link to="/" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link to="/jobs" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                Job Listings
              </Link>
              <Link to="/saved-jobs" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                Saved Jobs
              </Link>
              <Link to="/tracker" className="text-lg font-medium text-gray-500 hover:text-gray-900">
                Application Tracker
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 hidden lg:block">
            <Link
              to="/"
              className="inline-block bg-primary py-2 px-4 border border-transparent rounded-md text-lg font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/jobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Job Listings
              </Link>
              <Link to="/saved-jobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Saved Jobs
              </Link>
              <Link to="/tracker" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Application Tracker
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-indigo-600"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </div>
  );
}

