import React from 'react';
import { Heart, Smartphone, CreditCard, Gift, Laptop, Users, Sprout, Calendar, ArrowRight } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Emotional Hero */}
      <div className="relative h-[450px] bg-tukuze-dark flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden opacity-30">
             <img src="https://picsum.photos/1920/600?grayscale" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Invest in Africa's Future Innovators</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Help us bridge the digital divide. Your contribution equips schools, trains teachers, and sparks curiosity in thousands of students.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Donate & What to Donate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* Why Donate */}
            <div>
                <h2 className="text-3xl font-bold text-tukuze-dark mb-6">Why Donate?</h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                        In many parts of Meru and Tharaka Nithi, brilliant young minds lack access to basic scientific tools. A donation to Tukuze Afrika is not just charity; it is a direct investment in the region's technological future.
                    </p>
                    <p>
                        We operate with transparency and direct impact. Every shilling goes towards programs that directly touch the lives of students in our 26+ partner schools.
                    </p>
                </div>
                
                <h3 className="text-xl font-bold text-tukuze-dark mb-4">What Your Donation Supports</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <Laptop className="text-tukuze-blue mr-3 shrink-0" />
                        <div>
                            <span className="font-bold text-gray-900 block">Digital Education</span>
                            <span className="text-sm text-gray-500">Equipping computer labs.</span>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <Users className="text-tukuze-blue mr-3 shrink-0" />
                        <div>
                            <span className="font-bold text-gray-900 block">Teacher Training</span>
                            <span className="text-sm text-gray-500">Upskilling our 40+ patrons.</span>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <Sprout className="text-tukuze-blue mr-3 shrink-0" />
                        <div>
                            <span className="font-bold text-gray-900 block">STEM Agriculture</span>
                            <span className="text-sm text-gray-500">Apiculture & farm tech kits.</span>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <Calendar className="text-tukuze-blue mr-3 shrink-0" />
                        <div>
                            <span className="font-bold text-gray-900 block">Events & Hackathons</span>
                            <span className="text-sm text-gray-500">Funding student competitions.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* How to Donate / Channels */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tukuze-green/10 rounded-bl-full -mr-8 -mt-8"></div>
                <h2 className="text-3xl font-bold text-tukuze-dark mb-8">How to Donate</h2>

                <div className="space-y-6">
                    {/* M-Pesa */}
                    <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Smartphone size={20} />
                            </div>
                            <h3 className="font-bold text-lg text-green-900">M-PESA (Paybill)</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Paybill Number</span>
                                <div className="text-2xl font-mono font-bold text-gray-800">891300</div>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Account Number</span>
                                <div className="text-xl font-mono font-bold text-gray-800">110258</div>
                            </div>
                        </div>
                    </div>

                    {/* Bank */}
                    <div className="border border-gray-200 bg-white p-6 rounded-2xl hover:border-tukuze-blue transition cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                                <CreditCard className="text-gray-400 group-hover:text-tukuze-blue transition" />
                                <h3 className="font-bold text-lg">Bank Transfer</h3>
                            </div>
                            <ArrowRight className="text-gray-300 group-hover:text-tukuze-blue opacity-0 group-hover:opacity-100 transition" />
                        </div>
                        <p className="text-sm text-gray-500">Click to reveal KCB Bank details for direct transfers.</p>
                    </div>

                    {/* In-Kind */}
                    <div className="border border-gray-200 bg-white p-6 rounded-2xl hover:border-tukuze-blue transition cursor-pointer group">
                         <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                                <Gift className="text-gray-400 group-hover:text-tukuze-blue transition" />
                                <h3 className="font-bold text-lg">Support a Specific School</h3>
                            </div>
                             <ArrowRight className="text-gray-300 group-hover:text-tukuze-blue opacity-0 group-hover:opacity-100 transition" />
                        </div>
                        <p className="text-sm text-gray-500">Donate computers, books, or kits directly to one of our 26 partner schools.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Sponsor Sections */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-10">Choose Your Impact Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-100 p-8 rounded-2xl text-center hover:shadow-xl transition hover:-translate-y-1">
                    <div className="text-5xl font-bold text-tukuze-blue mb-4">Bronze</div>
                    <p className="text-gray-500 mb-6">Support a single student's project materials.</p>
                    <div className="text-3xl font-bold text-gray-900 mb-6">$50 <span className="text-sm font-normal text-gray-400">/ once</span></div>
                    <button className="w-full py-3 border-2 border-tukuze-blue text-tukuze-blue font-bold rounded-lg hover:bg-tukuze-blue hover:text-white transition">Select</button>
                </div>
                <div className="bg-tukuze-blue p-8 rounded-2xl text-center shadow-xl transform scale-105 border-4 border-tukuze-green/30 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tukuze-green text-tukuze-dark text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
                    <div className="text-5xl font-bold text-white mb-4">Silver</div>
                    <p className="text-blue-100 mb-6">Equip a STEM Club with a Robotics Kit.</p>
                    <div className="text-3xl font-bold text-white mb-6">$200 <span className="text-sm font-normal text-blue-200">/ kit</span></div>
                    <button className="w-full py-3 bg-white text-tukuze-blue font-bold rounded-lg hover:bg-gray-100 transition">Select</button>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-2xl text-center hover:shadow-xl transition hover:-translate-y-1">
                    <div className="text-5xl font-bold text-tukuze-dark mb-4">Gold</div>
                    <p className="text-gray-500 mb-6">Adopt a School: Full year mentorship & equipment.</p>
                    <div className="text-3xl font-bold text-gray-900 mb-6">$1,000 <span className="text-sm font-normal text-gray-400">/ year</span></div>
                    <button className="w-full py-3 border-2 border-tukuze-dark text-tukuze-dark font-bold rounded-lg hover:bg-tukuze-dark hover:text-white transition">Contact Us</button>
                </div>
            </div>
        </div>

      </div>

      {/* Floating Donate Button (visible mostly on mobile or as a persistent reminder) */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
        <a href="#donate-section" className="flex items-center space-x-2 bg-tukuze-green text-tukuze-dark font-bold px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition border-2 border-white">
            <Heart size={20} fill="currentColor" />
            <span>Donate Now</span>
        </a>
      </div>

    </div>
  );
};

export default Donate;