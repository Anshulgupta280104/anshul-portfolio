import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Computer Science Engineering Student | Software Developer | Open Source Contributor";
  const [index, setIndex] = useState(0);
  
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic initial reveal
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      gsap.fromTo(
        linksRef.current.children,
        { y: 20, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.8, ease: 'back.out(1.5)' }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth - 0.5) * 20; // 20 max rotation
    const yPos = (clientY / innerHeight - 0.5) * -20;
    
    // Foreground 3D tilt
    gsap.to(heroRef.current, {
      rotationY: xPos,
      rotationX: yPos,
      ease: 'power2.out',
      duration: 0.5,
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!heroRef.current) return;
    gsap.to(heroRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: 'elastic.out(1, 0.3)',
      duration: 1.5,
    });
  };

  return (
    <section 
      className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Premium Cinematic Foreground Elements (Global background is behind this) */}
      
      {/* 1. Base Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-500/20 dark:bg-purple-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/20 dark:bg-blue-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 pointer-events-none"></div>
      
      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTY4LCA4NSLCAyNDcsIDAuMSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-30 pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center transform-gpu" ref={heroRef}>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-gradient tracking-tight drop-shadow-sm" ref={textRef}>
          Hi, I'm Anshul Gupta
        </h1>
        <div className="h-24 md:h-12 mb-12 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed drop-shadow-sm">
            {text}<span className="animate-pulse font-bold text-purple-500">|</span>
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-16" ref={linksRef}>
          <a href="mailto:anshulgupta282004@gmail.com" className="p-4 glass-card rounded-2xl text-zinc-600 hover:text-white hover:bg-purple-600 dark:text-zinc-300 dark:hover:bg-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anshul-gupta-64a033283/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl text-zinc-600 hover:text-white hover:bg-blue-600 dark:text-zinc-300 dark:hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Anshulgupta280104" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl text-zinc-600 hover:text-white hover:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <Github size={24} />
          </a>
          <a href="https://x.com/AnshulBuildss" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl text-zinc-600 hover:text-white hover:bg-black dark:text-zinc-300 dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <Twitter size={24} />
          </a>
        </div>
        
        <div className="animate-float">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-[2px] font-semibold active:scale-95 transition-all shadow-xl dark:shadow-purple-900/20"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#a855f7_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/90 dark:bg-zinc-950/90 px-10 py-2 text-sm text-purple-700 dark:text-purple-300 backdrop-blur-3xl transition-all group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600 dark:group-hover:text-white">
              Explore My Work
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
