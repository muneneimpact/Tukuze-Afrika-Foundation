import React from 'react';
import { Bot, Code, Sprout, Hammer, Mic, Zap, Globe, Layers } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    { title: 'Robotics', icon: Bot, desc: 'Design, build, and program autonomous robots using Arduino and Raspberry Pi.' },
    { title: 'Artificial Intelligence', icon: Zap, desc: 'Introduction to Machine Learning concepts and simple AI model training.' },
    { title: 'Programming', icon: Code, desc: 'Full stack development basics: HTML, CSS, JavaScript, and Python.' },
    { title: 'Apiculture', icon: Sprout, desc: 'Smart bee-keeping combining agriculture with sensor technology.' },
    { title: 'Carpentry', icon: Hammer, desc: 'Woodworking skills combined with design thinking and CAD.' },
    { title: 'Electronics', icon: Layers, desc: 'Circuit design, soldering, and PCB creation.' },
    { title: 'Conservation', icon: Globe, desc: 'Environmental science projects focusing on sustainability.' },
    { title: 'Public Speaking', icon: Mic, desc: 'Debates, technical presentations, and confidence building.' },
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-tukuze-dark mb-4">Our Programs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Diverse tracks designed to spark creativity and build practical competence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((prog, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 bg-tukuze-blue/10 rounded-lg flex items-center justify-center text-tukuze-blue mb-4 group-hover:bg-tukuze-blue group-hover:text-white transition-colors">
                <prog.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Program Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
                <div className="text-5xl font-bold text-gray-100 mb-4">01</div>
                <h3 className="text-lg font-bold text-tukuze-green mb-2">Foundation</h3>
                <p className="text-sm text-gray-500">6 Months. Basics, safety, and intro projects. Ends with a project presentation.</p>
            </div>
            <div className="p-4 relative">
                 <div className="hidden md:block absolute left-0 top-1/2 w-px h-16 bg-gray-200 -mt-8"></div>
                <div className="text-5xl font-bold text-gray-100 mb-4">02</div>
                <h3 className="text-lg font-bold text-tukuze-blue mb-2">Intermediate</h3>
                <p className="text-sm text-gray-500">Advanced problem solving, competition preparation, and team leadership.</p>
                 <div className="hidden md:block absolute right-0 top-1/2 w-px h-16 bg-gray-200 -mt-8"></div>
            </div>
            <div className="p-4">
                <div className="text-5xl font-bold text-gray-100 mb-4">03</div>
                <h3 className="text-lg font-bold text-tukuze-mutedBlue mb-2">Specialization</h3>
                <p className="text-sm text-gray-500">Career-focused tracks, industry mentorship, and complex innovation.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
            <a href="#" className="inline-block px-8 py-4 bg-tukuze-dark text-white font-bold rounded-lg hover:bg-gray-800 transition shadow-xl">
                Register Your School via Monday.com
            </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
