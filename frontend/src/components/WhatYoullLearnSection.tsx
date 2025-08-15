import React from 'react';
import { Brain, Heart, Target, Users } from 'lucide-react';

const WhatYoullLearnSection: React.FC = () => {
  const learningPoints = [
    {
      icon: Brain,
      title: "Stress Management",
      description: "Practical techniques for daily stress relief.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Emotional Resilience", 
      description: "Build stronger mental and emotional strength.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Mindfulness Tools",
      description: "Evidence-based mindfulness practices.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Life Balance",
      description: "Achieve better work-life harmony.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how to stay focused, manage anxiety, and unlock a calmer, more productive version of yourself.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Transform Your Daily Experience</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                This 60-minute session is for anyone feeling mentally scattered, stuck in overthinking, 
                or simply tired of feeling "off." You'll learn how to cut through distractions, calm 
                the noise in your head, and rebuild your ability to focus—without relying on willpower alone.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Using real, relatable tools backed by psychology (not fluff), we'll show you how to 
                manage anxiety as it comes, think with more clarity, and feel more in control of your day.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                If you've been craving a little breathing room and a clearer mind, this session might 
                be exactly what you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {learningPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${point.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;