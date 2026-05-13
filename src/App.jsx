import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent text-foreground transition-colors duration-300">
        <div className="global-background"></div>
        <Navbar />
        <main className="content-layer relative z-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
