import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
   <footer className="bg-gray-800 text-white">
   <div className="max-w-screen-xl mx-auto p-10 md:flex md:justify-between md:items-center">
     {/* Logo and Brand */}
     <div className="flex items-center justify-center mb-6 md:mb-0">
       <img
         src={Logo}
         alt="JobQuest Logo"
         className="h-12 mr-3" // Increased logo size slightly
       />
     </div>
 
     {/* Navigation Links */}
     <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm text-gray-300">
       <div>
         <h3 className="font-medium text-gray-400 mb-3">Company</h3>
         <ul className="px-2 -ml-1">
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               About Us
             </Link>
           </li>
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               Careers
             </Link>
           </li>
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               Contact
             </Link>
           </li>
         </ul>
       </div>
       <div>
         <h3 className="font-medium text-gray-400 mb-3">Support</h3>
         <ul>
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               FAQ
             </Link>
           </li>
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               Terms of Service
             </Link>
           </li>
           <li>
             <Link
               to="/"
               className="hover:underline hover:text-white"
             >
               Privacy Policy
             </Link>
           </li>
         </ul>
       </div>
       <div>
         <h3 className="font-medium text-gray-400 mb-3">Connect</h3>
         <ul>
           <li>
             <a
               href="https://facebook.com"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline hover:text-white"
             >
               Facebook
             </a>
           </li>
           <li>
             <a
               href="https://twitter.com"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline hover:text-white"
             >
               Twitter
             </a>
           </li>
           <li>
             <a
               href="https://linkedin.com"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline hover:text-white"
             >
               LinkedIn
             </a>
           </li>
         </ul>
       </div>
     </div>
   </div>
 
   {/* Bottom Section */}
   <div className="bg-gray-700 text-gray-400 py-6">
     <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
       <p className="text-sm text-center md:text-left">
         © {new Date().getFullYear()} JobQuest. All rights reserved.
       </p>
       <div className="flex space-x-4 mt-4 md:mt-0">
         <Link to="/terms" className="hover:text-white text-sm">
           Terms of Use
         </Link>
         <Link to="/privacy" className="hover:text-white text-sm">
           Privacy Policy
         </Link>
       </div>
     </div>
   </div>
 </footer>
 
  );
};

export default Footer;
