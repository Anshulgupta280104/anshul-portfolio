import React from 'react';
import { Terminal, Monitor, Award } from 'lucide-react';

export default function Skills() {
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
      bgHover: 'hover:border-blue-400 dark:hover:border-blue-500'
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
      bgHover: 'hover:border-purple-400 dark:hover:border-purple-500'
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
      bgHover: 'hover:border-pink-400 dark:hover:border-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-purple-900/20 group border-2 border-transparent ${category.bgHover}`}>
              <div className={`mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl inline-block ${category.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              {category.content ? (
                <div className="space-y-5">
                  {category.content.map((item, i) => (
                    <div key={i}>
                      <span className="block text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">{item.label}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-lg leading-snug">{item.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {category.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium text-lg">
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
