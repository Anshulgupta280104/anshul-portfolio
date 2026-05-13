import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2, Database, Layout } from 'lucide-react';
import gsap from 'gsap';

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: 'User Management System',
      description: 'Built a full-stack user management system with complete CRUD operations using React, Express.js, and MongoDB, improving data handling efficiency by 40% through optimized REST APIs. Designed a responsive UI with search, filtering, and reusable components, enhancing user experience and task completion speed by 55%.',
      tech: ['React', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Anshulgupta280104/react-user-crud-app',
      live: 'https://react-user-crud-app-one.vercel.app/',
      icon: <Database size={48} className="text-white opacity-50" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'The Atelier – Finance Analytics Dashboard',
      description: 'Built a high-performance finance dashboard using Angular 18+ and RxJS, enabling real-time data updates and improving UI responsiveness by 45% through optimized reactive architecture. Implemented dynamic visualizations and role-based access (RBAC), enhancing data interpretation and user interaction efficiency by 40%.',
      tech: ['Angular', 'RxJS', 'Chart.js', 'TailwindCSS'],
      github: 'https://github.com/Anshulgupta280104/finance-dashboard',
      live: 'https://finance-dashboard-eight-self.vercel.app/',
      icon: <Layout size={48} className="text-white opacity-50" />,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Plate2People – Smart Food Redistribution Platform',
      description: 'Designed an AI-driven social welfare platform connecting NGOs, volunteers, and donors for surplus food collection, reducing food wastage by 45% and boosting operational coordination by 50% through an AI-powered chatbot for support, pickup requests, and platform navigation.',
      tech: ['Web App', 'UI/UX', 'AI Chatbot'],
      github: 'https://github.com/Anshulgupta280104/plate2people-chatbot',
      live: 'https://plate2people-chatbot-mine.vercel.app/',
      icon: <Code2 size={48} className="text-white opacity-50" />,
      gradient: 'from-pink-500 to-orange-400'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current.querySelector('h2'), 
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 100, filter: 'blur(15px)', scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto transform-gpu">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] flex flex-col"
            >
              {/* Project Image/Pattern Preview */}
              <div className={`h-48 sm:h-56 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
                <div className="transform group-hover:scale-110 transition-transform duration-700 ease-out">
                  {project.icon}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-md">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hover:scale-110 backdrop-blur-lg">
                      <Github size={28} />
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all hover:scale-110 backdrop-blur-lg">
                      <ExternalLink size={28} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 flex-1 text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 rounded-full shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Github size={20} /> Code
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
