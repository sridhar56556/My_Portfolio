import React from 'react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
        <p className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Konda Sridhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
