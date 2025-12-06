import React from 'react';
import { ArrowRight, Activity, Cpu, Network } from 'lucide-react';
import data from '../data.json';

const Hero: React.FC = () => {
  const publications = (data as { publications?: any[] }).publications ?? [];
  const latest = publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
          alt="Global Intelligent Network"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <span className="px-3 py-1 bg-iwl-blue/20 border border-iwl-blue/50 text-iwl-blue text-xs font-bold uppercase tracking-wider rounded-full">
              New Research Published
            </span>
            <a href="#publications" className="text-gray-300 text-sm hover:text-iwl-blue transition-colors">
              {latest?.title} &rarr;
            </a>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
            Visibly <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-iwl-blue to-iwl-green">
              Intelligent.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            We map the cognitive landscape of future work. 
            The Intelligent Work Lab provides foundational research and models to understand how AI transforms industry, creativity, and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#publications" className="flex items-center justify-center gap-2 bg-iwl-green hover:bg-green-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
              Explore Our Data
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#team" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Meet the Team
            </a>
          </div>
        </div>
      </div>

      {/* Floating abstract stats card (Decorative) */}
      <div className="absolute bottom-10 right-10 hidden lg:block bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700 max-w-sm">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
                <Activity className="text-blue-400 w-6 h-6" />
            </div>
            <div>
                <p className="text-xs text-gray-400 uppercase">Active Research</p>
                <p className="text-2xl font-bold text-white">25</p>
            </div>
        </div>
         <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-4/5"></div>
         </div>
         <p className="text-xs text-gray-400 mt-2">Research output growth +40%</p>
      </div>
    </div>
  );
};

export default Hero;