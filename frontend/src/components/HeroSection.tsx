import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onRegisterNow: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterNow }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Seminar Description */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span>Mental Wellness Seminar</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pulse <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">&</span> Pause
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A transformative mental wellness seminar designed to help you find balance, 
                reduce stress, and cultivate mindfulness in your daily life. Join us for an 
                enlightening experience with renowned wellness experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-semibold text-gray-900">March 15, 2025</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <Clock className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-900">6 Hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-semibold text-gray-900">200 Seats</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What You'll Learn:</h3>
              <ul className="space-y-2">
                {[
                  'Mindfulness techniques for daily stress management',
                  'Building emotional resilience and mental strength',
                  'Creating healthy work-life boundaries',
                  'Practical meditation and breathing exercises'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onRegisterNow}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Speaker Images */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Speakers</h3>
              <div className="space-y-6">
                {/* Speaker 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Speaker Image Box */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      DR
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Dr. Sarah Chen</h4>
                      <p className="text-blue-600 font-medium">Clinical Psychologist</p>
                      <p className="text-sm text-gray-600 mt-1">15+ years in mental health research</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Specializing in cognitive behavioral therapy and mindfulness-based interventions 
                    for anxiety and depression.
                  </p>
                </div>

                {/* Speaker 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Speaker Image Box */}
                  <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      MJ
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Michael Johnson</h4>
                      <p className="text-teal-600 font-medium">Wellness Coach</p>
                      <p className="text-sm text-gray-600 mt-1">Certified meditation instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Expert in workplace wellness programs and stress management techniques 
                    for modern professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;