import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { MapPin, Calendar, ArrowRight, Handshake } from 'lucide-react';
import { Event } from '../types';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const upcomingEvents = EVENTS.filter(e => e.isUpcoming).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = EVENTS.filter(e => !e.isUpcoming).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (selectedEvent) {
      return (
          <div className="pt-10 pb-20 max-w-4xl mx-auto px-4">
              <button onClick={() => setSelectedEvent(null)} className="mb-6 text-gray-500 hover:text-tukuze-blue font-medium flex items-center gap-2">
                  &larr; Back to Events
              </button>
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-md" />
              <h1 className="text-4xl font-bold mb-4 text-tukuze-dark">{selectedEvent.title}</h1>
              <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full text-tukuze-blue text-sm font-medium">
                      <Calendar size={16} />
                      <span>{selectedEvent.date}</span>
                  </div>
                   <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full text-green-700 text-sm font-medium">
                      <MapPin size={16} />
                      <span>{selectedEvent.location}</span>
                  </div>
              </div>
              <div className="prose max-w-none mb-10 text-gray-700 leading-relaxed">
                  <p className="text-lg">{selectedEvent.description}</p>
                  <p className="mt-4">
                      Join us as we bring together bright minds from across Meru and Tharaka Nithi counties. 
                      This event is key to our mission of practical STEM education.
                  </p>
              </div>
              
              {/* Event Partners */}
              <div className="border-t border-gray-100 pt-8 mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
                      <Handshake size={20} className="text-tukuze-blue" />
                      Event Partners
                  </h3>
                  <div className="flex gap-4 opacity-70">
                      <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">Partner 1</div>
                      <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">Partner 2</div>
                      <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400 text-xs">Partner 3</div>
                  </div>
              </div>

              {selectedEvent.isUpcoming && (
                  <div className="bg-tukuze-dark p-8 rounded-xl text-center text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4">Want to attend?</h3>
                        <a href="#" className="inline-block bg-tukuze-green text-tukuze-dark px-8 py-3 rounded-lg font-bold hover:bg-white transition">Register via Monday.com</a>
                      </div>
                  </div>
              )}
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-white pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tukuze-dark mb-4">Upcoming Events</h1>
            <p className="text-gray-500">Engaging our community in Meru & Tharaka Nithi</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {upcomingEvents.map(evt => (
                <div key={evt.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row h-full transition hover:shadow-xl group">
                    <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                        <img src={evt.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center space-x-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-tukuze-green animate-pulse"></span>
                                <span className="text-xs font-bold text-tukuze-green uppercase tracking-wide">Upcoming</span>
                            </div>
                            <h3 className="text-2xl font-bold mt-2 mb-2 text-tukuze-dark">{evt.title}</h3>
                            <div className="flex flex-col space-y-2 text-gray-500 text-sm mb-4">
                                <div className="flex items-center gap-2"><Calendar size={14}/> {evt.date}</div>
                                <div className="flex items-center gap-2"><MapPin size={14}/> {evt.location}</div>
                            </div>
                            <p className="text-gray-600 line-clamp-2 text-sm">{evt.description}</p>
                        </div>
                        <button 
                            onClick={() => setSelectedEvent(evt)}
                            className="mt-6 text-tukuze-blue font-bold flex items-center hover:underline group-hover:translate-x-1 transition-transform"
                        >
                            Event Details <ArrowRight size={16} className="ml-1" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <h2 className="text-2xl font-bold text-tukuze-dark mb-8 border-l-4 border-tukuze-blue pl-4">Past Events Archive</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map(evt => (
                <div key={evt.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition cursor-pointer" onClick={() => setSelectedEvent(evt)}>
                    <div className="h-40 rounded-lg overflow-hidden mb-4 relative">
                        <img src={evt.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
                        <div className="absolute top-2 right-2 bg-gray-900/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Completed</div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-gray-800">{evt.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{evt.date}</p>
                    <span className="text-sm text-tukuze-blue font-medium hover:underline">Read Recap</span>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Events;