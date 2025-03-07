import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="text-blue-400 hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
