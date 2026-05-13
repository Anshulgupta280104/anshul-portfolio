import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Code, TrendingUp, Users, Layout, Zap } from 'lucide-react';
import gsap from 'gsap';

const AnimatedCounter = ({ target, duration = 2000, suffix = '%' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef} className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
      {count}{suffix}
    </span>
  );
};

export default function Experience() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const metrics = [
    { icon: <Zap size={24} />, value: 40, label: 'Efficiency Boost' },
    { icon: <Layout size={24} />, value: 30, label: 'Usability Gain' },
    { icon: <TrendingUp size={24} />, value: 25, label: 'Mobile Improvement' },
    { icon: <Users size={24} />, value: 45, label: 'Team Efficiency' },
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

      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 100, filter: 'blur(15px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
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
    <section id="experience" className="py-24 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto transform-gpu">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Professional Experience</h2>

        <div className="relative" ref={contentRef}>
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-[2.25rem] top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full opacity-30 dark:opacity-50"></div>

          <div className="relative md:pl-24 mb-12">
            {/* Timeline node */}
            <div className="hidden md:flex absolute left-[15px] top-8 w-12 h-12 bg-white dark:bg-zinc-900 border-4 border-purple-500 rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Briefcase size={20} className="text-purple-600 dark:text-purple-400" />
            </div>

            <div className="glass-card p-6 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                    Software Developer Intern
                  </h3>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">Commudle</p>
                </div>
                <div className="text-left md:text-right flex flex-col gap-2 md:items-end">
                  <span className="inline-block px-5 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-sm font-bold tracking-wide shadow-sm">
                    June 2025 – August 2025
                  </span>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">New Delhi, India</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/50 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] group/metric">
                    <div className="flex justify-center mb-4 text-purple-500 dark:text-purple-400 group-hover/metric:text-blue-500 dark:group-hover/metric:text-blue-400 transition-colors group-hover/metric:scale-110 duration-300">
                      {metric.icon}
                    </div>
                    <div className="mb-1">
                      <AnimatedCounter target={metric.value} />
                    </div>
                    <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/60 dark:to-purple-800/60 text-purple-700 dark:text-purple-300 rounded-xl p-3 shrink-0 shadow-sm">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Feature Development</h4>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">Developed and deployed newsletter preview feature with notifications, tooltips, and labels for enhanced accessibility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/60 dark:to-blue-800/60 text-blue-700 dark:text-blue-300 rounded-xl p-3 shrink-0 shadow-sm">
                    <Layout size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Responsive Design</h4>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">Delivered mobile-first designs for campaign pages and strategically positioned help sections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/60 dark:to-pink-800/60 text-pink-700 dark:text-pink-300 rounded-xl p-3 shrink-0 shadow-sm">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">API Integration</h4>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">Collaborated with APIs to integrate backend services, ensuring <strong className="text-purple-600 dark:text-purple-400 font-bold">20% faster</strong> data flow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
