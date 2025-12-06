import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import data from '../data.json';
import { TeamMember } from '../types';

const teamMembers = (data as { teamMembers: TeamMember[] }).teamMembers;

const Team: React.FC = () => {
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
    <section id="team" className="py-24 bg-gray-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-iwl-blue font-semibold tracking-wide uppercase text-sm mb-2">The People</h2>
          <h3 className="text-4xl font-bold text-slate-900">Meet the Minds</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse group of researchers, engineers, and visionaries working together to define the future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-4">
                        {member.social?.linkedin && (
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-iwl-blue">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {member.social?.twitter && (
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-iwl-blue">
                                <Twitter size={20} />
                            </a>
                        )}
                        {member.social?.email && (
                            <a href={member.social.email} className="text-white hover:text-iwl-blue">
                                <Mail size={20} />
                            </a>
                        )}
                    </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-iwl-blue text-sm font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 font-semibold uppercase mb-3 tracking-wider">{member.bio}</p>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-xl text-slate-900 mb-6">Interested in joining our mission?</p>
            <a href="#footer" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
                Contact Us
            </a>
        </div>
      </div>
    </section>
  );
};

export default Team;