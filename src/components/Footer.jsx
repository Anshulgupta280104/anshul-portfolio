import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-4 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
          © {new Date().getFullYear()} Anshul Gupta. Built with React, Tailwind CSS, & GSAP.
        </p>
      </div>
    </footer>
  );
}
