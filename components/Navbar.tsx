import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Researches', href: '#research' },
    { name: 'Achievments', href: '#impact' },
    { name: 'Team', href: '#team' },
    { name: 'Publications', href: '#publications' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-slate-900 text-white shadow-md' : 'bg-transparent text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Globe className="h-8 w-8 text-iwl-green" />
            <span className="font-bold text-xl tracking-tight uppercase">
              <span className="sm:hidden">IWL</span>
              <span className="hidden sm:inline">Intelligent Work Lab</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-iwl-green transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-gray-600 pl-6">
              <button className="hover:text-iwl-blue transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button className="w-full bg-iwl-blue text-white px-5 py-3 rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;