import React from 'react';
import { Users } from 'lucide-react';

interface HeaderProps {
  onJoinCommunity: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoinCommunity }) => {
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Pulse & Pause</h1>
          </div>
          
          <button
            onClick={onJoinCommunity}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Users className="w-4 h-4" />
            <span className="font-medium">Join Community</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;