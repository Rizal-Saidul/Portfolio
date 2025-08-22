import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 78 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 }
      ]
    }
  ];

  const technologies = [
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-600' },
    { name: 'Python', icon: '🐍', color: 'from-green-500 to-blue-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-500' },
    { name: 'GraphQL', icon: '🚀', color: 'from-pink-400 to-purple-500' }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="text-white text-sm font-medium">{tech.name}</h3>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="inline-block bg-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Current Status</h3>
            <div className="border-t border-cyan-400/30 w-16 mx-auto mb-4"></div>
            <button className="inline-flex items-center px-6 py-3 border border-cyan-400/50 text-cyan-400 font-medium hover:bg-cyan-400/10 transition-colors duration-300 rounded-lg">
              AVAILABLE FOR NEW PROJECTS
            </button>
            <p className="text-gray-400 text-sm mt-4 italic">
              Available and accepting new freelance projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;