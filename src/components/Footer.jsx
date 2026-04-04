import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          © {new Date().getFullYear()} Anshul Gupta. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
