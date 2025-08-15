import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "pulseandpause23@gmail.com",
      href: "mailto:pulseandpause23@gmail.com",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "Call Us", 
      value: "+91 96039 35352",
      href: "tel:+919603935352",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Linkedin,
      title: "Connect",
      value: "Dr Neeraj Grover",
      href: "https://linkedin.com/in/drneerajgrover",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands who have already taken the first step towards better mental health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
            <p className="text-gray-300 text-lg mb-6">
              Take the first step towards a calmer, more focused you. Register for our seminar or join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Register for Seminar
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;