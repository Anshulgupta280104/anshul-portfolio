import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2, Database, Layout, Globe } from 'lucide-react';
import gsap from 'gsap';

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: 'Enterprise Blogging Platform',
      description: 'Enterprise-grade blogging platform with authentication, SSR/SSG/ISR, search, comments, pagination, responsive web/mobile UI.',
      tech: ['Next.js', 'Redux-Saga', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/Anshulgupta280104/blog-platform',
      live: 'https://blog-platform-wheat-eta.vercel.app/',
      icon: <Globe size={48} className="text-white opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
      gradient: 'from-violet-600 via-fuchsia-600 to-pink-600'
    },
    {
      title: 'User Management System',
      description: 'Built a full-stack user management system with complete CRUD operations using React, Express.js, and MongoDB, improving data handling efficiency by 40% through optimized REST APIs. Designed a responsive UI with search, filtering, and reusable components.',
      tech: ['React', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Anshulgupta280104/react-user-crud-app',
      live: 'https://react-user-crud-app-one.vercel.app/',
      icon: <Database size={48} className="text-white opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
      gradient: 'from-blue-600 via-indigo-600 to-purple-700'
    },
    {
      title: 'The Atelier – Finance Analytics Dashboard',
      description: 'Built a high-performance finance dashboard using Angular 18+ and RxJS, enabling real-time data updates and improving UI responsiveness by 45% through optimized reactive architecture. Implemented dynamic visualizations and role-based access (RBAC).',
      tech: ['Angular', 'RxJS', 'Chart.js', 'TailwindCSS'],
      github: 'https://github.com/Anshulgupta280104/finance-dashboard',
      live: 'https://finance-dashboard-eight-self.vercel.app/',
      icon: <Layout size={48} className="text-white opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700'
    },
    {
      title: 'Plate2People – Smart Food Redistribution Platform',
      description: 'Designed an AI-driven social welfare platform connecting NGOs, volunteers, and donors for surplus food collection, reducing food wastage by 45% and boosting operational coordination by 50% through an AI-powered chatbot for support, pickup requests, and platform navigation.',
      tech: ['Web App', 'UI/UX', 'AI Chatbot'],
      github: 'https://github.com/Anshulgupta280104/plate2people-chatbot',
      live: 'https://plate2people-chatbot-mine.vercel.app/',
      icon: <Code2 size={48} className="text-white opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />,
      gradient: 'from-orange-500 via-amber-500 to-yellow-600'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current.querySelector('h2'), 
        { opacity: 0, y: 30, filter: 'blur(10px)' },
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
        { opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1,
          stagger: 0.15,
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
      <div className="max-w-[1400px] mx-auto transform-gpu">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient drop-shadow-sm">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="group relative rounded-3xl overflow-hidden bg-zinc-950/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:border-purple-500/50 flex flex-col h-full"
            >
              {/* Project Image/Pattern Preview */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
                {/* Decorative glowing orb behind icon */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-out z-0"></div>
                <div className="transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 ease-out relative z-10">
                  {project.icon}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-md z-20">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/20">
                      <Github size={24} />
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/20">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 flex-1 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-white/5 text-zinc-300 rounded-full border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-5 border-t border-white/10 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors group/link">
                    <Github size={18} className="group-hover/link:text-purple-400 transition-colors" /> Code
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors group/link">
                      <ExternalLink size={18} className="group-hover/link:text-cyan-400 transition-colors" /> Live Demo
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
