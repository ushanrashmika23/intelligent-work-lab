import React from 'react';
import { Globe, Github, Twitter, Linkedin } from 'lucide-react';
import data from '../data.json';

const Footer: React.FC = () => {
  const contact = (data as any).contact;
  
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
    <footer id="footer" className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <Globe className="h-6 w-6 text-iwl-green" />
               <span className="font-bold text-lg uppercase tracking-tight">Intelligent Work Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advancing the frontier of artificial intelligence to empower human work. 
              Licensed under Open Science Initiative.
            </p>
            <div className="flex space-x-4">
              {contact.social.twitter && <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>}
              {contact.social.linkedin && <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>}
              {contact.social.github && <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Research</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Publications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Datasets</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Laboratory</h4>
            <ul className="space-y-2">
              <li><a href="#research" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Researches</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Achievements</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Team</a></li>
              <li><a href="#publications" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Publications</a></li>
              <li><a href="#footer" className="text-gray-400 hover:text-iwl-blue transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
             <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
             <div className="space-y-2 text-gray-400 text-sm">
               <p>{contact.address.name}</p>
               <p>{contact.address.university}</p>
               <p>{contact.address.street}</p>
               <p>{contact.address.country}</p>
               <p className="mt-4">Email: {contact.email}</p>
               <p>Phone: {contact.phone}</p>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">© 2025 Intelligent Work Lab. All rights reserved.</p>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-500 text-xs hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-500 text-xs hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-500 text-xs hover:text-white">Cookie Settings</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;