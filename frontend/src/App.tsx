import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatYoullLearnSection from './components/WhatYoullLearnSection';
import ContactSection from './components/ContactSection';
import SeminarRegistrationModal from './components/SeminarRegistrationModal';
import CommunityRegistrationModal from './components/CommunityRegistrationModal';

function App() {
  const [showSeminarModal, setShowSeminarModal] = useState(false);
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header onJoinCommunity={() => setShowCommunityModal(true)} />
      <HeroSection onRegisterNow={() => setShowSeminarModal(true)} />
      <WhatYoullLearnSection />
      <ContactSection />
      
      <SeminarRegistrationModal 
        isOpen={showSeminarModal}
        onClose={() => setShowSeminarModal(false)}
      />
      
      <CommunityRegistrationModal 
        isOpen={showCommunityModal}
        onClose={() => setShowCommunityModal(false)}
      />
    </div>
  );
}

export default App;