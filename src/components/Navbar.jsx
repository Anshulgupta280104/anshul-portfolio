import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4 px-4 transition-all duration-500 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 ease-in-out ${scrolled ? 'w-full max-w-5xl rounded-full glass-nav shadow-lg py-3 px-6' : 'w-full max-w-7xl bg-transparent py-5 px-6'}`}>
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Anshul Gupta
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors font-medium relative group ${activeSection === id ? 'text-purple-600 dark:text-purple-400' : 'text-zinc-600 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400'}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-600 dark:bg-purple-400 rounded-full transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors text-zinc-600 dark:text-zinc-300 hover-glow"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 rounded-full"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 p-2 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[120%] left-0 w-full glass-card rounded-2xl overflow-hidden shadow-2xl origin-top animate-fade-in-up">
            <div className="py-2 px-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
