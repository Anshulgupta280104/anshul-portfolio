import React from 'react';
import { Users } from 'lucide-react';

export default function Leadership() {
  const leadershipRoles = [
    { title: 'National Hackathon', desc: 'Organized events with 10,000+ participants at Google & Microsoft venues' },
    { title: 'Build It Tour', desc: 'Coordinated events at Microsoft offices in Noida and Gurugram' },
    { title: 'Bootcamp Management', desc: 'Managed Pre-Placement Bootcamp for 300+ students' },
    { title: 'Technical Workshops', desc: 'Organized 10+ GDSC BVCOE workshops and coding events' },
    { title: 'TEDx Coordination', desc: 'Coordinated TEDxBVCOE with 200+ attendees' },
    { title: 'GDG Volunteer', desc: 'Active volunteer at Google Developer Groups New Delhi' }
  ];

  return (
    <section className="py-24 px-4 relative z-10 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Leadership & Community</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipRoles.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-900/20 group">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-purple-600 dark:text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
