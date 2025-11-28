import React from 'react';
import { Users, CheckCircle, ArrowRight, Heart, Coffee, Globe } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-tukuze-dark mb-6">Join Our Volunteer Army</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We are looking for passionate individuals to mentor students, organize events, and help us run our operations in Meru and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-tukuze-blue/20 mix-blend-multiply"></div>
            <img src="https://picsum.photos/800/600?random=15" alt="Volunteers" className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-tukuze-dark mb-6">Why Volunteer?</h2>
            <ul className="space-y-5 mb-10">
                {[
                    'Make a tangible difference in a child\'s future',
                    'Network with other professionals in Tech & Education',
                    'Gain leadership and organizational skills',
                    'Be part of a vibrant, innovative community'
                ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-700">
                        <div className="bg-blue-50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="text-tukuze-blue flex-shrink-0" size={18} />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center md:text-left">
                <h3 className="text-xl font-bold text-tukuze-dark mb-2">Ready to start?</h3>
                <p className="text-gray-500 mb-6">Click below to access our volunteer application portal.</p>
                <a 
                    href="https://tr.ee/Volunteertoday" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-tukuze-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-tukuze-mutedBlue hover:shadow-xl transition transform hover:-translate-y-0.5"
                >
                    <span>Volunteer Now</span>
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
      </div>

      {/* Volunteer Life / Blog Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-tukuze-dark mb-8 flex items-center gap-2">
            <Heart className="text-tukuze-green" />
            Volunteer Life at Tukuze
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: 'A Day in the Life: Robotics Mentor', excerpt: 'How Brian spends his Saturdays teaching Arduino basics at Burieruri Boys.', icon: Coffee },
                { title: 'Community Impact Stories', excerpt: 'Volunteers helped install solar lighting for a rural library in Tharaka.', icon: Globe },
                { title: 'Skill Share Weekends', excerpt: 'Our volunteers don\'t just teach; they learn from each other during monthly meetups.', icon: Users },
            ].map((post, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition group cursor-pointer">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-tukuze-dark mb-4 group-hover:bg-tukuze-blue group-hover:text-white transition">
                        <post.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-tukuze-blue transition">{post.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>
                    <span className="text-xs font-bold text-tukuze-blue uppercase">Read Story</span>
                </div>
            ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-center text-tukuze-dark mb-10">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { title: 'Technical Mentor', desc: 'Teach coding, robotics, or engineering concepts on weekends.' },
                  { title: 'Event Coordinator', desc: 'Help organize hackathons, symposiums, and school visits.' },
                  { title: 'Content Creator', desc: 'Document our impact through photography, videography, and storytelling.' }
              ].map((role, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border-t-4 border-tukuze-blue">
                      <div className="w-14 h-14 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center text-tukuze-blue">
                          <Users size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{role.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{role.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Volunteer;