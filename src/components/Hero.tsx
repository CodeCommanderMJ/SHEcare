import React from 'react';
import { Calendar, BookOpen, ArrowRight, Heart, Shield, Users } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
  onNavigate: (section: string) => void;
}

const translations = {
  en: {
    title: 'Empowering Women Through Hygiene Awareness',
    tagline: 'Break the taboos. Embrace your health.',
    cta1: 'Track My Cycle',
    cta2: 'Learn More',
    feature1: 'Track Your Cycle',
    feature1Desc: 'Smart period tracking with health insights',
    feature2: 'Learn & Grow',
    feature2Desc: 'Evidence-based education and tips',
    feature3: 'Join Community',
    feature3Desc: 'Connect with supportive women worldwide',
    stats: {
      women: '500M+',
      womenDesc: 'Women lack access to proper menstrual hygiene',
      education: '80%',
      educationDesc: 'Reduction in infections with proper education',
      support: '1M+',
      supportDesc: 'Women supported through our platform'
    }
  },
  hi: {
    title: 'स्वच्छता जागरूकता के माध्यम से महिलाओं को सशक्त बनाना',
    tagline: 'वर्जनाओं को तोड़ें। अपने स्वास्थ्य को अपनाएं।',
    cta1: 'मेरे चक्र को ट्रैक करें',
    cta2: 'और जानें',
    feature1: 'अपने चक्र को ट्रैक करें',
    feature1Desc: 'स्वास्थ्य अंतर्दृष्टि के साथ स्मार्ट पीरियड ट्रैकिंग',
    feature2: 'सीखें और बढ़ें',
    feature2Desc: 'साक्ष्य-आधारित शिक्षा और सुझाव',
    feature3: 'समुदाय में शामिल हों',
    feature3Desc: 'दुनिया भर की सहायक महिलाओं से जुड़ें',
    stats: {
      women: '50 करोड़+',
      womenDesc: 'महिलाओं के पास उचित मासिक धर्म स्वच्छता की पहुंच नहीं है',
      education: '80%',
      educationDesc: 'उचित शिक्षा से संक्रमण में कमी',
      support: '10 लाख+',
      supportDesc: 'हमारे प्लेटफॉर्म के माध्यम से समर्थित महिलाएं'
    }
  },
  bn: {
    title: 'স্বচ্ছতা সচেতনতার মাধ্যমে নারীদের ক্ষমতায়ন',
    tagline: 'কুসংস্কার ভাঙুন। আপনার স্বাস্থ্যকে আলিঙ্গন করুন।',
    cta1: 'আমার চক্র ট্র্যাক করুন',
    cta2: 'আরও জানুন',
    feature1: 'আপনার চক্র ট্র্যাক করুন',
    feature1Desc: 'স্বাস্থ্য অন্তর্দৃষ্টি সহ স্মার্ট পিরিয়ড ট্র্যাকিং',
    feature2: 'শিখুন ও বৃদ্ধি করুন',
    feature2Desc: 'প্রমাণ-ভিত্তিক শিক্ষা এবং পরামর্শ',
    feature3: 'কমিউনিটিতে যোগ দিন',
    feature3Desc: 'বিশ্বব্যাপী সহায়ক নারীদের সাথে সংযুক্ত হন',
    stats: {
      women: '৫০ কোটি+',
      womenDesc: 'নারীদের যথাযথ মাসিক স্বাস্থ্যবিধি অ্যাক্সেস নেই',
      education: '৮০%',
      educationDesc: 'সঠিক শিক্ষার সাথে সংক্রমণ হ্রাস',
      support: '১০ লক্ষ+',
      supportDesc: 'আমাদের প্ল্যাটফর্মের মাধ্যমে সমর্থিত নারী'
    }
  },
  ta: {
    title: 'சுகாதார விழிப்புணர்வு மூலம் பெண்களை வலுப்படுத்துதல்',
    tagline: 'தடைகளை உடைக்கவும். உங்கள் ஆரோக்கியத்தை தழுவுங்கள்.',
    cta1: 'என் சுழற்சியை கண்காணி',
    cta2: 'மேலும் அறியவும்',
    feature1: 'உங்கள் சுழற்சியை கண்காணிக்கவும்',
    feature1Desc: 'ஆரோக்கிய நுண்ணறிவுடன் ஸ்மார்ட் மாதவிடாய் கண்காணிப்பு',
    feature2: 'கற்றுக்கொள் மற்றும் வளரவும்',
    feature2Desc: 'ஆதார அடிப்படையிலான கல்வி மற்றும் குறிப்புகள்',
    feature3: 'சமூகத்தில் சேர',
    feature3Desc: 'உலகளவில் ஆதரவான பெண்களுடன் இணைக்கவும்',
    stats: {
      women: '50 கோடி+',
      womenDesc: 'பெண்களுக்கு சரியான மாதவிடாய் சுகாதாரம் இல்லை',
      education: '80%',
      educationDesc: 'சரியான கல்வியுடன் தொற்று குறைப்பு',
      support: '10 லட்சம்+',
      supportDesc: 'எங்கள் தளத்தின் மூலம் ஆதரிக்கப்பட்ட பெண்கள்'
    }
  }
};

export default function Hero({ language, onNavigate }: HeroProps) {
  const t = translations[language];

  return (
    <section className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-['Poppins']">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => onNavigate('tracker')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.cta1}</span>
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t.cta2}</span>
            </button>
          </div>

          {/* Illustration placeholder */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 mb-16 mx-auto max-w-4xl">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-24 h-24 bg-pink-300 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-600 fill-current" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">💪 Empowered Women</p>
                <p className="text-sm text-gray-600">Supporting each other</p>
              </div>
              <div className="w-24 h-24 bg-purple-300 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.feature1}</h3>
            <p className="text-gray-600">{t.feature1Desc}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <BookOpen className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.feature2}</h3>
            <p className="text-gray-600">{t.feature2Desc}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t.feature3}</h3>
            <p className="text-gray-600">{t.feature3Desc}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">{t.stats.women}</div>
              <p className="text-gray-600">{t.stats.womenDesc}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{t.stats.education}</div>
              <p className="text-gray-600">{t.stats.educationDesc}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">{t.stats.support}</div>
              <p className="text-gray-600">{t.stats.supportDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}