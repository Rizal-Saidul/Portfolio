import React from 'react';
import { Code, Rocket, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'TechVision Solutions',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      description: 'Built responsive web applications and improved user experience for 50+ client projects.'
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'StartupHub',
      description: 'Started my journey in web development, focusing on JavaScript and modern frameworks.'
    }
  ];

  const highlights = [
    { icon: Code, title: 'Clean Code', description: '3+ years of writing maintainable, scalable code' },
    { icon: Rocket, title: 'Performance', description: 'Optimized applications for speed and efficiency' },
    { icon: Zap, title: 'Innovation', description: 'Always exploring new technologies and methodologies' },
    { icon: Users, title: 'Collaboration', description: 'Strong team player with excellent communication skills' }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a love for creating digital experiences 
                that make a difference. My journey in tech started with curiosity about how websites 
                work, and it has evolved into a deep passion for building scalable, user-friendly applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I specialize in modern web technologies including React, Node.js, TypeScript, and cloud 
                platforms. I believe in writing clean, maintainable code and creating intuitive user 
                experiences that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-slate-900/30 backdrop-blur-sm border border-blue-500/10 rounded-xl p-4 hover:border-cyan-400/30 transition-colors duration-300">
                  <item.icon className="text-cyan-400 mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-2 text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-8">Experience Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6 mb-12">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white font-bold text-sm">
                    {exp.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-cyan-400 font-medium">{exp.year}</span>
                    </div>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;