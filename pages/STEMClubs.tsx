import React, { useState } from 'react';
import { PATHWAYS, SCHOOLS_DATA } from '../constants';
import { SchoolClub, ClubPathway } from '../types';
import { Lightbulb, Calendar, Award, BookOpen, Lock, Upload, Download, School, ChevronRight, Users, Search, X, MapPin, Gift, Briefcase, PlayCircle, User } from 'lucide-react';

const STEMClubs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'login'>('info');
  const [userType, setUserType] = useState<'student' | 'patron'>('student');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal States
  const [selectedSchool, setSelectedSchool] = useState<SchoolClub | null>(null);
  const [selectedPathway, setSelectedPathway] = useState<ClubPathway | null>(null);

  const filteredSchools = SCHOOLS_DATA.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.patron.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Sub-nav / Toggle */}
      <div className="bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8">
            <button 
                onClick={() => setActiveTab('info')}
                className={`py-4 px-2 border-b-2 font-medium transition ${activeTab === 'info' ? 'border-tukuze-green text-tukuze-dark' : 'border-transparent text-gray-500'}`}
            >
                Club Directory & Paths
            </button>
            <button 
                onClick={() => setActiveTab('login')}
                className={`py-4 px-2 border-b-2 font-medium transition ${activeTab === 'login' ? 'border-tukuze-blue text-tukuze-blue' : 'border-transparent text-gray-500'}`}
            >
                Portal Login
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {activeTab === 'info' ? (
          <div className="animate-fade-in space-y-16">
            {/* Intro */}
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-tukuze-dark">STEM Clubs: The Heart of Innovation</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Our clubs are vibrant hubs of creativity tailored for:
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                     <div className="bg-white border border-tukuze-green px-6 py-3 rounded-xl shadow-sm">
                        <span className="block font-bold text-tukuze-dark">Junior Secondary</span>
                        <span className="text-sm text-gray-500">Grade 7 - 9</span>
                     </div>
                     <div className="bg-white border border-tukuze-blue px-6 py-3 rounded-xl shadow-sm">
                        <span className="block font-bold text-tukuze-dark">Senior Secondary</span>
                        <span className="text-sm text-gray-500">Grade 10 - 12</span>
                     </div>
                     <div className="bg-white border border-tukuze-mutedBlue px-6 py-3 rounded-xl shadow-sm">
                        <span className="block font-bold text-tukuze-dark">8-4-4 System</span>
                        <span className="text-sm text-gray-500">Form 3 - 4</span>
                     </div>
                </div>
                <div className="inline-flex flex-wrap justify-center gap-3">
                    <div className="px-4 py-2 bg-blue-50 text-tukuze-blue rounded-full text-sm font-semibold border border-blue-100">
                        3,900+ Students
                    </div>
                    <div className="px-4 py-2 bg-green-50 text-tukuze-green rounded-full text-sm font-semibold border border-green-100">
                        27 Active Schools
                    </div>
                </div>
            </div>

            {/* Pathways */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-center text-tukuze-dark">STEM Discovery Paths</h2>
                <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                    Students choose a path to specialize in. Click a card to watch a preview.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PATHWAYS.map((path, i) => (
                        <div 
                          key={i} 
                          onClick={() => setSelectedPathway(path)}
                          className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer overflow-hidden group"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-tukuze-blue/5 rounded-lg text-tukuze-blue group-hover:bg-tukuze-blue group-hover:text-white transition-colors">
                                        <path.icon size={24} />
                                    </div>
                                    <PlayCircle className="text-gray-300 group-hover:text-tukuze-green transition" size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-tukuze-dark">{path.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{path.description}</p>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-tukuze-blue uppercase">
                                <span>View Details</span>
                                <ChevronRight size={14} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partner Schools Directory */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-tukuze-dark px-8 py-8">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <School className="text-tukuze-green" />
                        School & Club Directory
                    </h2>
                    
                    {/* Search Bar */}
                    <div className="relative max-w-2xl">
                        <input 
                            type="text" 
                            placeholder="Search by school, club nickname, or patron..." 
                            className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-tukuze-blue/30 shadow-xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-4 text-gray-400" />
                    </div>
                </div>

                <div className="p-6">
                     {/* Results Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredSchools.map((school) => (
                            <div 
                                key={school.id} 
                                onClick={() => setSelectedSchool(school)}
                                className="border border-gray-100 rounded-lg p-5 hover:border-tukuze-blue hover:bg-blue-50/20 cursor-pointer transition flex flex-col h-full bg-white shadow-sm hover:shadow-md"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-tukuze-dark leading-tight" title={school.name}>{school.name}</h3>
                                </div>
                                <div className="text-sm text-tukuze-blue font-medium mb-3">"{school.nickname}"</div>
                                
                                <div className="mt-auto space-y-2 text-sm text-gray-500 border-t border-gray-50 pt-3">
                                    <div className="flex items-center gap-2">
                                        <User size={14} /> 
                                        <span className="truncate">Patron: {school.patron}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={14} /> 
                                        <span>{school.members} Members</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-tukuze-green font-medium">
                                        <ChevronRight size={14} /> 
                                        <span>View Club Profile</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                     </div>
                     
                     {filteredSchools.length === 0 && (
                         <div className="text-center py-20 text-gray-400">
                             No schools found matching "{searchTerm}"
                         </div>
                     )}
                </div>
            </div>

            <div className="text-center">
                <a href="#" className="inline-flex items-center space-x-2 bg-tukuze-green text-tukuze-dark px-8 py-4 rounded-lg font-bold hover:bg-tukuze-brightGreen transition shadow-lg">
                    <span>Register a New STEM Club</span>
                    <Upload size={18} />
                </a>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-tukuze-dark p-6 text-center">
                    <Lock className="mx-auto text-tukuze-green mb-2" size={32} />
                    <h2 className="text-2xl font-bold text-white">Portal Access</h2>
                </div>
                <div className="p-8">
                    <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
                        <button 
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${userType === 'student' ? 'bg-white shadow text-tukuze-dark' : 'text-gray-500'}`}
                            onClick={() => setUserType('student')}
                        >Student</button>
                         <button 
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${userType === 'patron' ? 'bg-white shadow text-tukuze-dark' : 'text-gray-500'}`}
                            onClick={() => setUserType('patron')}
                        >Patron / Teacher</button>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {userType === 'student' ? 'Student ID / Club ID' : 'School Email'}
                            </label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-blue focus:border-transparent outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tukuze-blue focus:border-transparent outline-none" />
                        </div>
                        <button className="w-full bg-tukuze-blue text-white py-3 rounded-lg font-bold hover:bg-tukuze-mutedBlue transition">
                            Login
                        </button>
                    </form>
                </div>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      
      {/* School Details Modal */}
      {selectedSchool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
                  <button 
                    onClick={() => setSelectedSchool(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                  >
                      <X size={20} />
                  </button>
                  
                  <div className="bg-tukuze-dark p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedSchool.name}</h2>
                      <div className="text-tukuze-green font-mono text-lg">{selectedSchool.nickname}</div>
                  </div>
                  
                  <div className="p-8 space-y-8">
                      {/* Key People */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 p-4 rounded-xl">
                              <span className="text-xs font-bold text-tukuze-blue uppercase tracking-wide">Club Patron</span>
                              <div className="font-bold text-gray-900 text-lg">{selectedSchool.patron}</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl">
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Principal</span>
                              <div className="font-bold text-gray-900 text-lg">{selectedSchool.principal}</div>
                          </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div>
                               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                   <Briefcase size={18} className="text-tukuze-blue" />
                                   Selling Products
                               </h3>
                               <ul className="space-y-2">
                                   {selectedSchool.products.map((prod, i) => (
                                       <li key={i} className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg text-sm">
                                           <span className="w-1.5 h-1.5 rounded-full bg-tukuze-green"></span>
                                           {prod}
                                       </li>
                                   ))}
                               </ul>
                           </div>
                           
                           <div>
                               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                   <Gift size={18} className="text-red-400" />
                                   Support Needed
                               </h3>
                               <ul className="space-y-2">
                                   {selectedSchool.needs.map((need, i) => (
                                       <li key={i} className="flex items-center gap-2 text-gray-600 bg-red-50 px-3 py-2 rounded-lg text-sm">
                                           <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                           {need}
                                       </li>
                                   ))}
                               </ul>
                           </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              Meets on {selectedSchool.meetingDay}
                          </div>
                          <button className="text-tukuze-blue font-bold hover:underline">
                              Contact Patron &rarr;
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* Pathway Details Modal */}
      {selectedPathway && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row overflow-hidden">
                  <button 
                    onClick={() => setSelectedPathway(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition"
                  >
                      <X size={20} />
                  </button>

                  {/* Video Side */}
                  <div className="w-full md:w-2/3 bg-black relative min-h-[300px] md:min-h-[450px] flex items-center justify-center group">
                        {selectedPathway.videoUrl ? (
                            <iframe 
                                className="w-full h-full absolute inset-0"
                                src={selectedPathway.videoUrl} 
                                title={selectedPathway.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="text-white text-center">
                                <PlayCircle size={64} className="mx-auto mb-4 opacity-50" />
                                <p>Video Preview Coming Soon</p>
                            </div>
                        )}
                  </div>

                  {/* Info Side */}
                  <div className="w-full md:w-1/3 p-8 bg-white overflow-y-auto max-h-[450px] md:max-h-full">
                      <div className="w-12 h-12 bg-blue-50 text-tukuze-blue rounded-xl flex items-center justify-center mb-6">
                           <selectedPathway.icon size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-tukuze-dark mb-2">{selectedPathway.title}</h2>
                      <p className="text-gray-500 text-sm mb-6">{selectedPathway.description}</p>
                      
                      <div className="prose prose-sm text-gray-600">
                          <h4 className="font-bold text-gray-900">What you'll learn:</h4>
                          <p>{selectedPathway.details}</p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-100">
                           <a href="#" className="block w-full text-center bg-tukuze-dark text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                               Explore Curriculum
                           </a>
                      </div>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};

export default STEMClubs;