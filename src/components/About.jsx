import React from 'react';
import { BookOpen, Code, Layers, Layout, ShieldCheck } from 'lucide-react';

export default function About() {
  const competencies = [
    { icon: <Layout size={20} />, text: 'Web Development (HTML, CSS, React, Angular)' },
    { icon: <Code size={20} />, text: 'Software Development & Feature Implementation' },
    { icon: <ShieldCheck size={20} />, text: 'Software Testing & Quality Assurance' },
    { icon: <Layers size={20} />, text: 'UI/UX Improvement & Design Optimization' },
    { icon: <BookOpen size={20} />, text: 'Collaboration & Agile Exposure' }
  ];

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-purple-900/20 group">
            <h3 className="text-2xl font-semibold mb-6 text-purple-700 dark:text-purple-400 flex items-center gap-3">
              <span className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300"><BookOpen size={24} /></span>
              Education
            </h3>
            <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1 ring-4 ring-white dark:ring-gray-800 transition-colors"></div>
              <p className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">Bachelor of Technology</p>
              <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">Computer Science & Engineering</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Bharati Vidyapeeth's College of Engineering, Delhi</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full font-semibold">
                  CGPA: 8.86
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 rounded-full font-medium">
                  Sep 2023 – June 2027
                </span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-900/20 group">
            <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-400 flex items-center gap-3">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"><Layers size={24} /></span>
              Core Competencies
            </h3>
            <ul className="space-y-6">
              {competencies.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group/item">
                  <div className="mt-1 text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg group-hover/item:scale-110 transition-transform">
                    {comp.icon}
                  </div>
                  <span className="font-medium text-lg leading-tight mt-1.5">{comp.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
