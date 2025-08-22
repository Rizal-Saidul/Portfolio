import React, { useState } from 'react';
import { ExternalLink, Github, X, ZoomIn } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Redux', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media API',
      category: 'Backend',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'RESTful API for social media platform with features like user management, posts, comments, and real-time notifications.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Full-Stack',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Responsive portfolio website with modern design, smooth animations, and content management system.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Headless CMS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time cryptocurrency price tracker with portfolio management, price alerts, and market analysis.',
      technologies: ['Vue.js', 'CoinGecko API', 'Vuex', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my recent projects showcasing modern web development practices and innovative solutions
          </p>
        </div>

        {/* Portfolio Button */}
        <div className="text-center mb-12">
          <button className="inline-flex items-center px-8 py-3 border border-cyan-400/50 text-cyan-400 font-medium tracking-wide hover:bg-cyan-400/10 transition-colors duration-300">
            MY PORTFOLIO
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;