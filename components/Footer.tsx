import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tukuze-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-tukuze-green rounded flex items-center justify-center">
                <span className="text-tukuze-dark font-bold">T</span>
              </div>
              <span className="font-bold text-xl">TUKUZE AFRIKA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the future through STEM education. We are building the next generation of innovators, engineers, and leaders across Africa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-tukuze-green transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tukuze-green transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tukuze-green transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-tukuze-green transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-tukuze-lime">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition">Our Programs</Link></li>
              <li><Link to="/clubs" className="hover:text-white transition">STEM Clubs</Link></li>
              <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
              <li><Link to="/volunteer" className="hover:text-white transition">Volunteer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-tukuze-lime">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-tukuze-blue" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-tukuze-blue" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-tukuze-blue" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-tukuze-lime">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest activities and STEM challenges.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-tukuze-green text-white text-sm"
              />
              <button className="w-full bg-tukuze-green text-tukuze-dark font-bold py-2 rounded hover:bg-tukuze-brightGreen transition">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tukuze Afrika Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;