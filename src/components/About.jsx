import React, { useEffect, useRef } from 'react';
import { BookOpen, Code, Layers, Layout, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const competencies = [
    { icon: <Layout size={20} />, text: 'Web Development (HTML, CSS, React, Angular)' },
    { icon: <Code size={20} />, text: 'Software Development & Feature Implementation' },
    { icon: <ShieldCheck size={20} />, text: 'Software Testing & Quality Assurance' },
    { icon: <Layers size={20} />, text: 'UI/UX Improvement & Design Optimization' },
    { icon: <BookOpen size={20} />, text: 'Collaboration & Agile Exposure' }
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
        { opacity: 0, y: 100, filter: 'blur(15px)', rotationX: 10 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto transform-gpu">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div ref={el => cardsRef.current[0] = el} className="glass-card p-8 rounded-3xl h-fit relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] group flex flex-col justify-center">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.2),transparent_50%)] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-700 dark:text-purple-400 flex items-center gap-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm"><BookOpen size={24} /></span>
                Education
              </h3>
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800/50">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1 ring-4 ring-white dark:ring-zinc-900 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                <p className="text-xl font-bold mb-1 text-zinc-900 dark:text-zinc-100">Bachelor of Technology</p>
                <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">Computer Science & Engineering</p>
                <p className="text-zinc-700 dark:text-zinc-400 mb-5">Bharati Vidyapeeth's College of Engineering, Delhi</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full font-semibold shadow-sm border border-purple-200/50 dark:border-purple-700/30">
                    CGPA: 8.86
                  </span>
                  <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 rounded-full font-medium shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                    Sep 2023 – June 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={el => cardsRef.current[1] = el} className="glass-card p-8 rounded-3xl h-fit relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] group flex flex-col justify-center">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-400 flex items-center gap-3">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm"><Layers size={24} /></span>
                Core Competencies
              </h3>
              <ul className="space-y-6">
                {competencies.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group/item">
                    <div className="mt-1 text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-xl group-hover/item:scale-110 transition-transform shadow-sm">
                      {comp.icon}
                    </div>
                    <span className="font-medium text-lg leading-tight mt-1.5">{comp.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
