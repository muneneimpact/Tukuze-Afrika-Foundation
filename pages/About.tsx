import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-tukuze-dark mb-6">About Tukuze Afrika</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a movement dedicated to demystifying STEM education across Africa, making it accessible, practical, and fun for every child.
          </p>
        </div>

        {/* Vision Mission Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-tukuze-green">
            <h3 className="text-2xl font-bold text-tukuze-dark mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the premier catalyst for STEM innovation in Africa, creating a generation of problem solvers.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-tukuze-blue">
            <h3 className="text-2xl font-bold text-tukuze-dark mb-4">Our Mission</h3>
            <p className="text-gray-600">Equipping young minds with technical skills through hands-on learning, mentorship, and real-world application.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-tukuze-lime">
            <h3 className="text-2xl font-bold text-tukuze-dark mb-4">Our Purpose</h3>
            <p className="text-gray-600">Bridging the gap between theoretical education and practical industrial skills needed for the future economy.</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-tukuze-mutedBlue rounded-3xl p-12 text-white mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Innovation', 'Curiosity', 'Collaboration', 'Excellence'].map((val, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{val}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-tukuze-dark mb-12">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { year: '2020', title: 'The Inception', desc: 'Tukuze Afrika Foundation was formed with a pilot in 1 school.' },
              { year: '2022', title: 'Expansion', desc: 'Reached 5 partner schools and launched the first Robotics challenge.' },
              { year: '2023', title: 'Recognition', desc: 'Awarded Best Community STEM Initiative. Reached 350+ students.' },
              { year: '2024', title: 'Scaling Up', desc: 'Launched the Online STEM Portal and Apiculture program.' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-tukuze-blue text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <time className="font-caveat font-medium text-tukuze-blue">{item.year}</time>
                  </div>
                  <div className="text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Section */}
        <div className="bg-gradient-to-r from-tukuze-dark to-gray-900 rounded-3xl overflow-hidden relative min-h-[400px] flex items-center">
            <img src="https://picsum.photos/1200/600?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
            <div className="relative z-10 px-8 md:px-20 py-12">
                <h2 className="text-4xl font-bold text-white mb-6">STEM for Africa's Future</h2>
                <p className="text-gray-300 text-lg max-w-2xl mb-8">
                    We believe that the next Einstein, the next great innovator, is sitting in an African classroom right now. Our job is to give them the tools to realize their potential. By 2030, we aim to impact 100,000 students.
                </p>
                <div className="h-1 w-32 bg-tukuze-lime"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
