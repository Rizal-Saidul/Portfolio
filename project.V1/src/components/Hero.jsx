import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    'Full-Stack Developer',
    'Frontend Specialist',
    'Backend Engineer',
    'UI/UX Enthusiast'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && currentIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 100);
      } else if (!isDeleting && currentIndex === currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentTitle.slice(0, currentIndex - 1));
        currentIndex--;
        setTimeout(typeWriter, 50);
      } else if (isDeleting && currentIndex === 0) {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        isDeleting = false;
        setTimeout(typeWriter, 500);
      }
    };

    typeWriter();
  }, [currentTitleIndex]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile Picture */}
        <div className="relative mb-8 inline-block">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-800">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4">
              HELLO!
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              I'M <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ALEX</span>
            </h2>
            
            <div className="border-t border-cyan-400/30 w-24 mx-auto my-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {displayText}
              <span className="animate-blink text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about creating digital experiences that push boundaries. 
            I transform ideas into elegant, scalable solutions using modern technologies.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50"></div>
    </section>
  );
};

export default Hero;