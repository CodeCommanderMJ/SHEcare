import React from 'react';
import { Home, Calendar, BookOpen, Users, MapPin, Heart } from 'lucide-react';

interface MobileNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    home: 'Home',
    tracker: 'Tracker',
    learn: 'Learn',
    community: 'Community',
    products: 'Products',
    donate: 'Donate'
  },
  hi: {
    home: 'होम',
    tracker: 'ट्रैकर',
    learn: 'सीखें',
    community: 'समुदाय',
    products: 'उत्पाद',
    donate: 'दान'
  },
  bn: {
    home: 'হোম',
    tracker: 'ট্র্যাকার',
    learn: 'শিখুন',
    community: 'কমিউনিটি',
    products: 'পণ্য',
    donate: 'দান'
  },
  ta: {
    home: 'முகப்பு',
    tracker: 'கண்காணி',
    learn: 'கற்க',
    community: 'சமூகম்',
    products: 'பொருட்கள்',
    donate: 'நன்கொடை'
  }
};

export default function MobileNavigation({ activeSection, onNavigate, language }: MobileNavigationProps) {
  const t = translations[language];

  const navItems = [
    { key: 'home', label: t.home, Icon: Home },
    { key: 'tracker', label: t.tracker, Icon: Calendar },
    { key: 'learn', label: t.learn, Icon: BookOpen },
    { key: 'community', label: t.community, Icon: Users },
    { key: 'products', label: t.products, Icon: MapPin },
    { key: 'donate', label: t.donate, Icon: Heart }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`flex flex-col items-center p-2 min-w-0 transition-colors ${
              activeSection === key
                ? 'text-pink-600'
                : 'text-gray-600 hover:text-pink-600'
            }`}
          >
            <Icon className={`w-5 h-5 mb-1 ${activeSection === key ? 'fill-current' : ''}`} />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}