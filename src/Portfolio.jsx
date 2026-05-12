import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code, Briefcase, Award, Users, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/75 backdrop-blur-md z-50 border-b border-purple-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Anshul Gupta
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-purple-200">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-purple-50 text-gray-900"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section className="pt-32 pb-20 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
      Hi, I'm Anshul Gupta
    </h1>

    <p className="text-xl md:text-2xl text-gray-700 mb-8">
      Computer Science Engineering Student | Software Developer | Open Source Contributor
    </p>

    <div className="flex justify-center gap-6 mb-8">

      <a
        href="mailto:anshulgupta282004@gmail.com"
        className="text-purple-600 hover:text-purple-800 transition-colors"
      >
        <Mail size={28} />
      </a>

      <a
        href="https://www.linkedin.com/in/anshul-gupta-64a033283/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800 transition-colors"
      >
        <Linkedin size={28} />
      </a>

      <a
        href="https://github.com/Anshulgupta280104"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800 transition-colors"
      >
        <Github size={28} />
      </a>

      <a
        href="https://x.com/AnshulBuildss"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800 transition-colors"
      >
        <Twitter size={28} />
      </a>

    </div>

    <button
      onClick={() => scrollToSection('contact')}
      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-300"
    >
      Get In Touch
    </button>
  </div>
</section>

      {/* About Section */}
<section
  id="about"
  className="relative py-20 px-4 overflow-hidden"
>

  {/* Background Image */}
  <div
   className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{
      backgroundImage: "url('/1500x500.jpg')",
    }}
  ></div>

  {/* Purple Overlay */}
  <div className="absolute inset-0 bg-purple-100/35 backdrop-blur-[1px]"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto z-10">

    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
      About Me
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Education Card */}
      <div className="bg-white/75 p-8 rounded-2xl border border-purple-200 shadow-xl backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">
          Education
        </h3>

        <p className="text-lg font-semibold mb-2 text-gray-900">
          Bachelor of Technology
        </p>

        <p className="text-gray-700 mb-2">
          Computer Science and Engineering
        </p>

        <p className="text-gray-600 mb-2">
          Bharati Vidyapeeth's College of Engineering, Delhi
        </p>

        <p className="text-purple-700 font-semibold">
          CGPA: 8.86
        </p>

        <p className="text-gray-600">
          Sep 2023 – June 2027
        </p>
      </div>

      {/* Competencies Card */}
      <div className="bg-white/75 p-8 rounded-2xl border border-purple-200 shadow-xl backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">
          Core Competencies
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>• Web Development (HTML, CSS, Angular, JavaScript, TypeScript)</li>
          <li>• Software Development & Feature Implementation</li>
          <li>• Software Testing & Quality Assurance</li>
          <li>• UI/UX Improvement & Design Optimization</li>
          <li>• Collaboration & Agile Exposure</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Professional Experience</h2>
          
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200 shadow-lg mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-purple-700">Software Developer Intern</h3>
                <p className="text-xl text-gray-800">Commudle</p>
                <p className="text-gray-600">June 2025 – August 2025 | New Delhi, India</p>
              </div>
              <Briefcase className="text-purple-600" size={40} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg text-center border border-purple-100 shadow">
                <p className="text-3xl font-bold text-purple-700">40%</p>
                <p className="text-sm text-gray-700">Efficiency Boost</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-purple-100 shadow">
                <p className="text-3xl font-bold text-purple-700">30%</p>
                <p className="text-sm text-gray-700">Usability Gain</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-purple-100 shadow">
                <p className="text-3xl font-bold text-purple-700">25%</p>
                <p className="text-sm text-gray-700">Mobile Improvement</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-purple-100 shadow">
                <p className="text-3xl font-bold text-purple-700">45%</p>
                <p className="text-sm text-gray-700">Team Efficiency</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <Code size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Feature Development</h4>
                  <p className="text-gray-700">Developed and deployed newsletter preview feature with notifications, tooltips, and labels for enhanced accessibility</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <Code size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Responsive Design</h4>
                  <p className="text-gray-700">Delivered mobile-first designs for campaign pages and strategically positioned help sections</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <Code size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">API Integration</h4>
                  <p className="text-gray-700">Collaborated with APIs to integrate backend services, ensuring 20% faster data flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-20 px-4 bg-purple-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-2">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">
          User Management System
        </h3>

        <p className="text-gray-700 mb-4">
          Built a full-stack user management system with complete CRUD
          operations using React, Express.js, and MongoDB with optimized
          REST APIs, search, filtering, and reusable components.
        </p>

        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-2 font-semibold">
            Impact:
          </p>

          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Improved data handling efficiency by 40%</li>
            <li>• Enhanced user experience by 55%</li>
            <li>• Reduced development effort by 30%</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            React
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Express.js
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            MongoDB
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            REST API
          </span>
        </div>

        {/* Project 1 Links */}
<div className="flex gap-4">
  <a
    href="https://github.com/Anshulgupta280104/react-user-crud-app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <Github size={20} /> GitHub
  </a>

  <a
    href="https://react-user-crud-app-one.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <ExternalLink size={20} /> Live Demo
  </a>
</div>
      </div>


      {/* Project 2 */}
      <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-2">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">
          The Atelier – Finance Analytics Dashboard
        </h3>

        <p className="text-gray-700 mb-4">
          High-performance finance analytics dashboard built using Angular
          18+, RxJS, Chart.js, and TailwindCSS with real-time updates,
          dynamic visualizations, and RBAC implementation.
        </p>

        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-2 font-semibold">
            Impact:
          </p>

          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Improved UI responsiveness by 45%</li>
            <li>• Enhanced user interaction efficiency by 40%</li>
            <li>• Real-time reactive architecture</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Angular
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            RxJS
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Chart.js
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            TailwindCSS
          </span>
        </div>

       {/* Project 2 Links */}
<div className="flex gap-4">
  <a
    href="https://github.com/Anshulgupta280104/finance-dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <Github size={20} /> GitHub
  </a>

  <a
    href="https://finance-dashboard-eight-self.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <ExternalLink size={20} /> Live Demo
  </a>
</div>
      </div>


      {/* Project 3 */}
      <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-2">
        <h3 className="text-2xl font-semibold mb-4 text-purple-700">
          Plate2People – AI Food Redistribution Platform
        </h3>

        <p className="text-gray-700 mb-4">
          AI-powered food redistribution platform connecting NGOs,
          volunteers, restaurants, and donors to reduce food wastage and
          improve operational coordination through AI chatbot support.
        </p>

        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-2 font-semibold">
            Impact:
          </p>

          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Reduced food wastage by 45%</li>
            <li>• Improved coordination by 50%</li>
            <li>• Smart AI chatbot integration</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            AI Chatbot
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            UI/UX
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Web App
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Social Impact
          </span>
        </div>

        {/* Project 3 Links */}
<div className="flex gap-4">
  <a
    href="https://github.com/Anshulgupta280104/plate2people-chatbot"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <Github size={20} /> GitHub
  </a>

  <a
    href="https://plate2people-chatbot-mine.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
  >
    <ExternalLink size={20} /> Live Demo
  </a>
</div>
      </div>

    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Languages & Tools</h3>
              <p className="text-gray-700 mb-2"><strong>Programming:</strong> C, C++, SQL, JavaScript, TypeScript</p>
              <p className="text-gray-700 mb-2"><strong>Web:</strong> HTML5, CSS3, Angular, React</p>
              <p className="text-gray-700"><strong>Tools:</strong> Git, GitHub, MS Office</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Frameworks</h3>
              <p className="text-gray-700 mb-2"><strong>Frontend:</strong> Nebular, PrimeNG, Tailwind CSS, Angular CLI</p>
              <p className="text-gray-700 mb-2"><strong>Backend:</strong> Express.js, Node.js</p>
              <p className="text-gray-700"><strong>Concepts:</strong> OOPs, DBMS, API Development</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Certifications</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Google Cloud Innovator</li>
                <li>• React Bootcamp</li>
                <li>• AI Tools Workshop</li>
                <li>• DSA Workshop (GeeksforGeeks)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Leadership & Community</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'National Hackathon', desc: 'Organized events with 10,000+ participants at Google & Microsoft venues' },
              { title: 'Build It Tour', desc: 'Coordinated events at Microsoft offices in Noida and Gurugram' },
              { title: 'Bootcamp Management', desc: 'Managed Pre-Placement Bootcamp for 300+ students' },
              { title: 'Technical Workshops', desc: 'Organized 10+ GDSC BVCOE workshops and coding events' },
              { title: 'TEDx Coordination', desc: 'Coordinated TEDxBVCOE with 200+ attendees' },
              { title: 'GDG Volunteer', desc: 'Active volunteer at Google Developer Groups New Delhi' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-purple-200 hover:border-purple-400 transition-all shadow-lg hover:shadow-xl">
                <Users className="text-purple-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="py-20 px-4 bg-white">
  <div className="max-w-3xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-8 text-gray-900">
      Let's Connect
    </h2>

    <p className="text-xl text-gray-700 mb-8">
      I'm passionate about building innovative solutions, contributing to
      open source, and organizing impactful tech events. Always open to
      collaborating on exciting projects and opportunities.
    </p>

    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">

      <a
        href="mailto:anshulgupta282004@gmail.com"
        className="flex items-center justify-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-300"
      >
        <Mail size={24} />
        Email Me
      </a>

      <a
        href="https://www.linkedin.com/in/anshul-gupta-64a033283/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
      >
        <Linkedin size={24} />
        LinkedIn
      </a>

      <a
        href="https://github.com/Anshulgupta280104"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
      >
        <Github size={24} />
        GitHub
      </a>

      <a
        href="https://x.com/AnshulBuildss"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors"
      >
        <Twitter size={24} />
        Twitter
      </a>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-purple-100 py-8 px-4 border-t border-purple-200">
        <div className="max-w-7xl mx-auto text-center text-gray-700">
          <p>© 2026 Anshul Gupta. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}