import React from 'react';
import { Github, ExternalLink, Code2, Database } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'User Management System',
      description: 'Full-stack CRUD application with search, filtering, dynamic forms, and toast notifications. Achieved 40% improved data handling and 55% faster task completion.',
      tech: ['React', 'Express.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/Anshulgupta280104/react-user-crud-app',
      live: 'https://react-user-crud-app-one.vercel.app/',
      icon: <Database size={48} className="text-white opacity-50" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Food Menu Webpage',
      description: 'Static food menu webpage showcasing items with images, descriptions, and prices in a clean, responsive layout featuring a mobile-optimized visual hierarchy.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: '#',
      live: '#',
      icon: <Code2 size={48} className="text-white opacity-50" />,
      gradient: 'from-pink-500 to-orange-400'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:hover:shadow-purple-900/30 flex flex-col">
              {/* Project Image/Pattern Preview */}
              <div className={`h-48 sm:h-64 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hover:scale-110 backdrop-blur-md">
                      <Github size={28} />
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hover:scale-110 backdrop-blur-md">
                      <ExternalLink size={28} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Github size={20} /> Code
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
