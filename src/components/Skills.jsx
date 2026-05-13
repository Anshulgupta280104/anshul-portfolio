import React, { useEffect, useRef } from 'react';
import { Terminal, Monitor, Award } from 'lucide-react';
import gsap from 'gsap';

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const skillCategories = [
    {
      title: 'Languages & Tools',
      icon: <Terminal size={32} />,
      content: [
        { label: 'Programming', value: 'C, C++, SQL, JavaScript, TypeScript' },
        { label: 'Web', value: 'HTML5, CSS3, Angular, React' },
        { label: 'Tools', value: 'Git, GitHub, MS Office' }
      ],
      color: 'text-blue-500',
      bgHover: 'hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
    },
    {
      title: 'Frameworks',
      icon: <Monitor size={32} />,
      content: [
        { label: 'Frontend', value: 'Nebular, PrimeNG, Tailwind CSS, Angular CLI' },
        { label: 'Backend', value: 'Express.js, Node.js' },
        { label: 'Concepts', value: 'OOPs, DBMS, API Development' }
      ],
      color: 'text-purple-500',
      bgHover: 'hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
    },
    {
      title: 'Certifications',
      icon: <Award size={32} />,
      list: [
        'Google Cloud Innovator',
        'React Bootcamp',
        'AI Tools Workshop',
        'DSA Workshop (GeeksforGeeks)'
      ],
      color: 'text-pink-500',
      bgHover: 'hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]'
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
        { opacity: 0, y: 100, filter: 'blur(15px)', rotationY: -10 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          rotationY: 0,
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
    <section id="skills" className="py-24 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto transform-gpu">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className={`glass-card p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 group border border-transparent ${category.bgHover}`}
            >
              <div className={`mb-6 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl inline-block ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
                {category.title}
              </h3>
              
              {category.content ? (
                <div className="space-y-5">
                  {category.content.map((item, i) => (
                    <div key={i} className="group/item">
                      <span className={`block text-sm font-bold uppercase tracking-wider mb-1 ${category.color}`}>{item.label}</span>
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium text-lg leading-snug group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100 transition-colors">{item.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {category.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium text-lg hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text', 'bg')}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
