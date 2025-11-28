import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, School, Calendar, ChevronDown, ChevronUp, Target, Lightbulb, Heart, Award } from 'lucide-react';
import { EVENTS, STATISTICS } from '../constants';

const CountUp: React.FC<{ end: string; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const numericEnd = parseInt(end.replace(/,/g, '').replace(/\D/g, ''), 10) || 0;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * numericEnd));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const AccordionItem: React.FC<{ title: string; icon: any; children: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ title, icon: Icon, children, isOpen, onClick }) => {
    return (
        <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <button 
                onClick={onClick}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-blue-50/50' : 'bg-white'}`}
            >
                <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${isOpen ? 'bg-tukuze-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                        <Icon size={24} />
                    </div>
                    <span className="text-xl font-bold text-tukuze-dark">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="text-tukuze-blue" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Home: React.FC = () => {
  const nextEvent = EVENTS.find(e => e.isUpcoming);
  const [openSection, setOpenSection] = useState<string | null>('mission');

  const toggleSection = (section: string) => {
      setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-tukuze-dark">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="STEM Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-tukuze-dark/95 via-tukuze-dark/80 to-tukuze-blue/30 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-tukuze-green animate-pulse"></span>
            <span className="text-white font-medium tracking-wide text-sm uppercase">Empowering the Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Igniting Curiosity Through <span className="text-tukuze-blue">STEM</span> Education
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Equipping African youth (Grade 7-12) with the skills of tomorrow: Robotics, AI, Coding, and Innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/clubs" className="w-full sm:w-auto px-8 py-4 bg-tukuze-blue text-white font-bold rounded-full hover:bg-white hover:text-tukuze-blue transition transform hover:-translate-y-1 shadow-lg shadow-tukuze-blue/25">
              Join a STEM Club
            </Link>
            <Link to="/donate" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-tukuze-dark transition backdrop-blur-sm">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white py-12 relative z-30 -mt-16 mx-4 md:mx-10 rounded-xl shadow-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-gray-100">
          {STATISTICS.map((stat, idx) => (
            <div key={idx} className="p-2">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-tukuze-blue">
                <CountUp end={stat.value} />
              </div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are - Accordion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-tukuze-dark mb-4">Who We Are</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Tukuze Afrika Foundation is a catalyst for change, driving the adoption of Science, Technology, Engineering, and Mathematics across Meru, Tharaka Nithi, and beyond.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                    <AccordionItem 
                        title="Our Mission" 
                        icon={Target} 
                        isOpen={openSection === 'mission'} 
                        onClick={() => toggleSection('mission')}
                    >
                        To equip young minds with technical skills through hands-on learning, mentorship, and real-world application, bridging the gap between theoretical knowledge and industrial demands.
                    </AccordionItem>
                    
                    <AccordionItem 
                        title="Our Vision" 
                        icon={Lightbulb} 
                        isOpen={openSection === 'vision'} 
                        onClick={() => toggleSection('vision')}
                    >
                        To be the premier catalyst for STEM innovation in Africa, creating a generation of problem solvers who leverage technology to address local and global challenges.
                    </AccordionItem>
                    
                    <AccordionItem 
                        title="Our Purpose" 
                        icon={Heart} 
                        isOpen={openSection === 'purpose'} 
                        onClick={() => toggleSection('purpose')}
                    >
                        We exist to ensure that every child, regardless of their background, has access to quality STEM education, mentorship, and the tools necessary to build a better future.
                    </AccordionItem>

                     <AccordionItem 
                        title="Key Achievements" 
                        icon={Award} 
                        isOpen={openSection === 'achievements'} 
                        onClick={() => toggleSection('achievements')}
                    >
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Established active STEM clubs in over 26 schools.</li>
                            <li>Trained 40+ patrons in advanced robotics and coding pedagogy.</li>
                            <li>Hosted the first-ever Meru Regional Robotics Hackathon.</li>
                            <li>Impacted over 355 students directly through mentorship programs.</li>
                        </ul>
                    </AccordionItem>
                </div>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
                     <img 
                        src="https://picsum.photos/800/1000?random=10" 
                        alt="Students learning" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tukuze-dark/80 to-transparent flex flex-col justify-end p-10">
                        <div className="text-white">
                            <h3 className="text-2xl font-bold mb-2">Transforming Education</h3>
                            <p className="text-gray-200">From classroom theory to real-world innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-tukuze-dark mb-4">Our Core Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Tailored for Junior Secondary (Grade 7-9) and Senior Secondary (Grade 10-12).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Robotics', img: 'https://picsum.photos/600/400?random=4', desc: 'Building the machines of the future.' },
              { title: 'Coding & AI', img: 'https://picsum.photos/600/400?random=5', desc: 'Programming logic and machine learning basics.' },
              { title: 'Apiculture', img: 'https://picsum.photos/600/400?random=6', desc: 'Modern beekeeping and environmental science.' }
            ].map((prog, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-tukuze-blue/0 group-hover:bg-tukuze-blue/10 transition z-10"></div>
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-tukuze-dark mb-3">{prog.title}</h3>
                  <p className="text-gray-500 mb-6">{prog.desc}</p>
                  <Link to="/programs" className="inline-flex items-center text-tukuze-blue font-bold group-hover:text-tukuze-mutedBlue transition">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      {nextEvent && (
        <section className="py-24 bg-tukuze-dark text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tukuze-blue/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-sm rounded-3xl p-1 border border-white/10">
              <div className="p-8 md:p-12 md:w-1/2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tukuze-green/20 text-tukuze-green font-bold text-xs rounded mb-6 border border-tukuze-green/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-tukuze-green"></span>
                    <span>UPCOMING EVENT</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">{nextEvent.title}</h2>
                <div className="space-y-4 mb-10 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Calendar size={18} className="text-white" />
                    </div>
                    <span className="text-lg">{new Date(nextEvent.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Users size={18} className="text-white" />
                     </div>
                    <span className="text-lg">{nextEvent.location}</span>
                  </div>
                </div>
                <Link to="/events" className="inline-block bg-white text-tukuze-dark px-8 py-4 rounded-full font-bold hover:bg-tukuze-blue hover:text-white transition">
                  View Event Details
                </Link>
              </div>
              <div className="md:w-1/2 w-full h-80 md:h-[500px] rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden relative">
                <img src={nextEvent.image} alt={nextEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-tukuze-dark/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Home;