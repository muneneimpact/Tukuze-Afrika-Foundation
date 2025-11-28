import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-tukuze-dark mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-tukuze-blue">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <Phone className="text-tukuze-green mt-1" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="text-tukuze-green mt-1" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-600">{CONTACT_INFO.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-tukuze-green mt-1" />
                            <div>
                                <p className="font-medium">Office</p>
                                <p className="text-gray-600">{CONTACT_INFO.location}</p>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <Clock className="text-tukuze-green mt-1" />
                            <div>
                                <p className="font-medium">Office Hours</p>
                                <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold">
                    Google Maps Placeholder ({CONTACT_INFO.location})
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-green focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-green focus:border-transparent outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-green focus:border-transparent outline-none">
                            <option>General Inquiry</option>
                            <option>Partnership</option>
                            <option>Volunteering</option>
                            <option>School Registration</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-green focus:border-transparent outline-none"></textarea>
                    </div>
                    <button className="w-full bg-tukuze-green text-tukuze-dark font-bold py-3 rounded-lg hover:bg-tukuze-brightGreen transition shadow">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;