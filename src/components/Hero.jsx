import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Computer Science Engineering Student | Software Developer | Open Source Contributor";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
          Hi, I'm Anshul Gupta
        </h1>
        <div className="h-20 md:h-12 mb-8">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            {text}<span className="animate-pulse font-bold">|</span>
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="mailto:anshulgupta282004@gmail.com" className="p-3 glass-card rounded-full text-purple-600 hover:text-white hover:bg-purple-600 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white transition-all transform hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anshul-gupta-64a033283/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-purple-600 hover:text-white hover:bg-purple-600 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white transition-all transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Anshulgupta280104" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-purple-600 hover:text-white hover:bg-purple-600 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white transition-all transform hover:scale-110">
            <Github size={24} />
          </a>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex h-14 active:scale-95 transition-all overflow-hidden rounded-full p-[2px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-purple-600 px-8 py-2 text-sm font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-950/90 gap-2">
              Get In Touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
