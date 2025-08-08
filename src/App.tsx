import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PeriodTracker from './components/PeriodTracker';
import LearnSection from './components/LearnSection';
import CommunityStories from './components/CommunityStories';
import ProductFinder from './components/ProductFinder';
import DonateVolunteer from './components/DonateVolunteer';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi' | 'bn' | 'ta'>('en');
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero language={currentLanguage} onNavigate={setActiveSection} />;
      case 'tracker':
        return <PeriodTracker language={currentLanguage} />;
      case 'learn':
        return <LearnSection language={currentLanguage} />;
      case 'community':
        return <CommunityStories language={currentLanguage} />;
      case 'products':
        return <ProductFinder language={currentLanguage} />;
      case 'donate':
        return <DonateVolunteer language={currentLanguage} />;
      default:
        return <Hero language={currentLanguage} onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={currentLanguage} 
        onLanguageChange={setCurrentLanguage}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
      
      <main className="pb-20 md:pb-0">
        {renderSection()}
      </main>

      <Footer language={currentLanguage} />
      
      <MobileNavigation 
        activeSection={activeSection}
        onNavigate={setActiveSection}
        language={currentLanguage}
      />
    </div>
  );
}

export default App;