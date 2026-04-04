import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Let's Connect</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          I'm passionate about building innovative solutions, contributing to open source, and organizing impactful tech events. Always open to collaborating on exciting projects and opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:anshulgupta282004@gmail.com"
            className="group flex items-center justify-center gap-3 bg-purple-600 dark:bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <Mail size={24} className="group-hover:-translate-y-1 transition-transform" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/anshul-gupta-64a033283/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 glass-card text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-all hover:scale-105"
          >
            <Linkedin size={24} className="group-hover:-translate-y-1 transition-transform" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Anshulgupta280104"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 glass-card text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-all hover:scale-105"
          >
            <Github size={24} className="group-hover:-translate-y-1 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
