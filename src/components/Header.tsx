import React from 'react';
import { Heart, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
  onLanguageChange: (lang: 'en' | 'hi' | 'bn' | 'ta') => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const translations = {
  en: {
    title: 'SHECare',
    nav: {
      home: 'Home',
      tracker: 'Period Tracker',
      learn: 'Learn',
      community: 'Community',
      products: 'Find Products',
      donate: 'Support'
    }
  },
  hi: {
    title: 'SHECare',
    nav: {
      home: 'होम',
      tracker: 'पीरियड ट्रैकर',
      learn: 'सीखें',
      community: 'समुदाय',
      products: 'उत्पाद खोजें',
      donate: 'सहायता'
    }
  },
  bn: {
    title: 'SHECare',
    nav: {
      home: 'হোম',
      tracker: 'পিরিয়ড ট্র্যাকার',
      learn: 'শিখুন',
      community: 'কমিউনিটি',
      products: 'পণ্য খুঁজুন',
      donate: 'সহায়তা'
    }
  },
  ta: {
    title: 'SHECare',
    nav: {
      home: 'முகப்பு',
      tracker: 'மாதவிடாய் கண்காணி',
      learn: 'கற்றுக்கொள்ள',
      community: 'சமூகம்',
      products: 'தயாரிப்புகள்',
      donate: 'ஆதரவு'
    }
  }
};

export default function Header({ language, onLanguageChange, activeSection, onNavigate }: HeaderProps) {
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-current" />
            <h1 className="text-2xl font-bold text-gray-900 font-['Poppins']">{t.title}</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`text-sm font-medium transition-colors hover:text-pink-600 ${
                  activeSection === key ? 'text-pink-600 border-b-2 border-pink-600 pb-1' : 'text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Globe className="w-5 h-5 text-gray-600" />
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as any)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="bn">বাংলা</option>
                <option value="ta">தமிழ்</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}