import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(elementsRef.current,
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-32 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center transform-gpu">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-5xl md:text-6xl font-bold mb-8 text-gradient tracking-tight"
        >
          Let's Connect
        </h2>
        <p 
          ref={el => elementsRef.current[1] = el}
          className="text-xl text-zinc-700 dark:text-zinc-300 mb-14 leading-relaxed max-w-2xl mx-auto"
        >
          I'm passionate about building innovative solutions, contributing to open source, and organizing impactful tech events. Always open to collaborating on exciting projects and opportunities.
        </p>
        
        <div 
          ref={el => elementsRef.current[2] = el}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="mailto:anshulgupta282004@gmail.com"
            className="group relative inline-flex items-center justify-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-glow overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full"></span>
            <Mail size={24} className="group-hover:-translate-y-1 transition-transform" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/anshul-gupta-64a033283/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 glass-card text-purple-600 dark:text-purple-400 border border-purple-600/30 dark:border-purple-400/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-all hover:scale-105"
          >
            <Linkedin size={24} className="group-hover:-translate-y-1 transition-transform" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Anshulgupta280104"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 glass-card text-purple-600 dark:text-purple-400 border border-purple-600/30 dark:border-purple-400/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-all hover:scale-105"
          >
            <Github size={24} className="group-hover:-translate-y-1 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
