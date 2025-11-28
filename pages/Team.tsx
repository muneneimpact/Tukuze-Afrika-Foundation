import React, { useState } from 'react';
import { FOUNDATION_TEAM, PATRONS } from '../constants';
import { Search } from 'lucide-react';

const Team: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState(6);

  const filteredPatrons = PATRONS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.school?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.expertise?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
        {/* Foundation Team */}
        <div className="bg-tukuze-dark py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white text-center mb-16">The Foundation Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FOUNDATION_TEAM.map((member) => (
                        <div key={member.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300">
                            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-tukuze-lime text-sm font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Patrons Directory */}
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-tukuze-dark">School Patrons</h2>
                    <p className="text-gray-500 mt-2">The heroes guiding our STEM clubs on the ground.</p>
                </div>
                <div className="relative w-full md:w-96">
                    <input 
                        type="text" 
                        placeholder="Search by name, school or skill..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-tukuze-green focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPatrons.length > 0 ? filteredPatrons.slice(0, limit).map((patron) => (
                    <div key={patron.id} className="border border-gray-100 rounded-xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition">
                        <img src={patron.image} alt={patron.name} className="w-16 h-16 rounded-full object-cover border-2 border-tukuze-green" />
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">{patron.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{patron.school}</p>
                            <span className="inline-block bg-blue-50 text-tukuze-blue text-xs px-2 py-1 rounded font-medium">
                                {patron.expertise}
                            </span>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full text-center py-10 text-gray-500">No patrons found matching your search.</div>
                )}
            </div>
            
            {/* Fake Load More */}
            {filteredPatrons.length > limit && (
                <div className="text-center mt-12">
                    <button 
                        onClick={() => setLimit(prev => prev + 6)}
                        className="text-tukuze-blue font-semibold hover:underline"
                    >
                        Load More Patrons
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default Team;
