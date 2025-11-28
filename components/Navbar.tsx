import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'STEM Clubs', path: '/clubs' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-tukuze-blue rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-md">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-tukuze-dark tracking-tight">TUKUZE AFRIKA</span>
              <span className="text-xs text-tukuze-blue font-semibold tracking-wider">FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-tukuze-blue font-bold'
                    : 'text-gray-600 hover:text-tukuze-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="flex items-center space-x-2 bg-tukuze-blue text-white px-6 py-2.5 rounded-full hover:bg-tukuze-mutedBlue transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart size={16} fill="currentColor" />
              <span className="font-semibold text-sm">Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-tukuze-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl h-screen overflow-y-auto pb-20">
          <div className="px-6 pt-6 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-tukuze-blue'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full text-center mt-2 bg-tukuze-blue text-white px-5 py-4 rounded-xl font-bold shadow-md active:scale-95 transition"
                >
                <Heart size={20} fill="currentColor" />
                <span>Donate Now</span>
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;