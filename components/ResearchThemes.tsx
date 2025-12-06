import React from 'react';
import { Brain, Users, ShieldCheck, Zap } from 'lucide-react';
import data from '../data.json';
import { ResearchTheme } from '../types';

const iconMap = {
  Brain,
  Users,
  ShieldCheck,
};

const researchThemes = (data as { researchThemes: ResearchTheme[] }).researchThemes;

const ResearchThemes: React.FC = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="research" className="py-24 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-iwl-blue font-semibold tracking-wide uppercase text-sm mb-2">Our Focus</h2>
        <h3 className="text-4xl font-bold text-slate-900 sm:text-5xl">Research Themes</h3>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          We tackle the hard problems in applying artificial intelligence to real-world complexity.
        </p>
      </div>

      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {researchThemes.map((theme, index) => {
          const Icon = iconMap[theme.icon as keyof typeof iconMap] || Brain;

          return (
            <div
              key={theme.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-iwl-blue/10 transform translate-x-4 translate-y-4 rounded-xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                  <img
                      src={theme.imageUrl}
                      alt={theme.title}
                      className="rounded-xl shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-lg text-slate-900 mb-2">
                      <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900">{theme.title}</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">{theme.description}</p>
                  <a href="#" className="inline-flex items-center font-bold text-iwl-blue hover:text-blue-700 transition-colors">
                      Read the Whitepaper <Zap className="ml-2 w-4 h-4" />
                  </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchThemes;