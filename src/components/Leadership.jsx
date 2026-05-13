import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import gsap from 'gsap';

export default function Leadership() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const leadershipRoles = [
    { title: 'National Hackathon', desc: 'Organized events with 10,000+ participants at Google & Microsoft venues' },
    { title: 'Build It Tour', desc: 'Coordinated events at Microsoft offices in Noida and Gurugram' },
    { title: 'Bootcamp Management', desc: 'Managed Pre-Placement Bootcamp for 300+ students' },
    { title: 'Technical Workshops', desc: 'Organized 10+ GDSC BVCOE workshops and coding events' },
    { title: 'TEDx Coordination', desc: 'Coordinated TEDxBVCOE with 200+ attendees' },
    { title: 'GDG Volunteer', desc: 'Active volunteer at Google Developer Groups New Delhi' }
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
        { opacity: 0, y: 80, filter: 'blur(15px)', scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.2)',
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
    <section className="py-24 px-4 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto transform-gpu">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Leadership & Community</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipRoles.map((item, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="glass-card p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] group"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Users className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
