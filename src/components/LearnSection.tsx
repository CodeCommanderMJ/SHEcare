import React, { useState } from 'react';
import { BookOpen, Play, FileText, HelpCircle, Lightbulb, Users } from 'lucide-react';

interface LearnSectionProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    title: 'Learn & Grow',
    subtitle: 'Evidence-based education about menstrual health and hygiene',
    categories: {
      basics: 'Menstrual Hygiene Basics',
      health: 'Health & Nutrition Tips',
      myths: 'Myths vs Facts',
      videos: 'Educational Videos'
    },
    content: {
      basics: [
        {
          title: 'Sanitary Pads',
          description: 'How to choose, use and dispose of pads safely',
          icon: '🩲'
        },
        {
          title: 'Menstrual Cups',
          description: 'Eco-friendly, reusable menstrual protection',
          icon: '🏺'
        },
        {
          title: 'Tampons',
          description: 'Internal protection - usage and safety tips',
          icon: '🎯'
        },
        {
          title: 'Proper Disposal',
          description: 'Environmental-friendly disposal methods',
          icon: '♻️'
        }
      ],
      health: [
        {
          title: 'Preventing Infections',
          description: 'UTI and yeast infection prevention during periods',
          icon: '🛡️'
        },
        {
          title: 'Nutrition During Periods',
          description: 'Foods that help with cramps and energy',
          icon: '🥗'
        },
        {
          title: 'Exercise & Movement',
          description: 'Safe exercises during menstruation',
          icon: '🏃‍♀️'
        },
        {
          title: 'Pain Management',
          description: 'Natural ways to manage menstrual pain',
          icon: '🌿'
        }
      ],
      myths: [
        {
          myth: 'You can\'t swim during periods',
          fact: 'You can absolutely swim during periods with proper protection',
          icon: '🏊‍♀️'
        },
        {
          myth: 'Periods sync up among women living together',
          fact: 'There\'s no scientific evidence for menstrual synchrony',
          icon: '👭'
        },
        {
          myth: 'You should avoid exercise during periods',
          fact: 'Light exercise can actually help reduce cramps',
          icon: '💪'
        },
        {
          myth: 'Periods make you impure',
          fact: 'Menstruation is a natural, healthy bodily function',
          icon: '✨'
        }
      ]
    },
    watchVideo: 'Watch Video',
    readMore: 'Read More',
    myth: 'Myth',
    fact: 'Fact'
  },
  hi: {
    title: 'सीखें और बढ़ें',
    subtitle: 'मासिक धर्म स्वास्थ्य और स्वच्छता के बारे में साक्ष्य-आधारित शिक्षा',
    categories: {
      basics: 'मासिक धर्म स्वच्छता मूल बातें',
      health: 'स्वास्थ्य और पोषण सुझाव',
      myths: 'मिथक बनाम तथ्य',
      videos: 'शैक्षिक वीडियो'
    },
    content: {
      basics: [
        {
          title: 'सैनिटरी पैड',
          description: 'पैड को सुरक्षित रूप से कैसे चुनें, उपयोग करें और निपटान करें',
          icon: '🩲'
        },
        {
          title: 'मासिक धर्म कप',
          description: 'पर्यावरण-अनुकूल, पुन: उपयोग योग्य मासिक धर्म सुरक्षा',
          icon: '🏺'
        },
        {
          title: 'टैम्पोन',
          description: 'आंतरिक सुरक्षा - उपयोग और सुरक्षा सुझाव',
          icon: '🎯'
        },
        {
          title: 'उचित निपटान',
          description: 'पर्यावरण-अनुकूल निपटान के तरीके',
          icon: '♻️'
        }
      ],
      health: [
        {
          title: 'संक्रमण की रोकथाम',
          description: 'पीरियड के दौरान UTI और यीस्ट संक्रमण की रोकथाम',
          icon: '🛡️'
        },
        {
          title: 'पीरियड के दौरान पोषण',
          description: 'ऐसे खाद्य पदार्थ जो ऐंठन और ऊर्जा में मदद करते हैं',
          icon: '🥗'
        },
        {
          title: 'व्यायाम और गति',
          description: 'मासिक धर्म के दौरान सुरक्षित व्यायाम',
          icon: '🏃‍♀️'
        },
        {
          title: 'दर्द प्रबंधन',
          description: 'मासिक धर्म के दर्द को प्रबंधित करने के प्राकृतिक तरीके',
          icon: '🌿'
        }
      ],
      myths: [
        {
          myth: 'पीरियड के दौरान तैर नहीं सकते',
          fact: 'उचित सुरक्षा के साथ पीरियड के दौरान बिल्कुल तैर सकते हैं',
          icon: '🏊‍♀️'
        },
        {
          myth: 'साथ रहने वाली महिलाओं के पीरियड एक साथ होते हैं',
          fact: 'मासिक धर्म तुल्यकालन का कोई वैज्ञानिक प्रमाण नहीं है',
          icon: '👭'
        },
        {
          myth: 'पीरियड के दौरान व्यायाम से बचना चाहिए',
          fact: 'हल्का व्यायाम वास्तव में ऐंठन को कम करने में मदद कर सकता है',
          icon: '💪'
        },
        {
          myth: 'पीरियड आपको अशुद्ध बनाता है',
          fact: 'मासिक धर्म एक प्राकृतिक, स्वस्थ शारीरिक कार्य है',
          icon: '✨'
        }
      ]
    },
    watchVideo: 'वीडियो देखें',
    readMore: 'और पढ़ें',
    myth: 'मिथक',
    fact: 'तथ्य'
  },
  bn: {
    title: 'শিখুন ও বৃদ্ধি করুন',
    subtitle: 'মাসিক স্বাস্থ্য এবং স্বাস্থ্যবিধি সম্পর্কে প্রমাণ-ভিত্তিক শিক্ষা',
    categories: {
      basics: 'মাসিক স্বাস্থ্যবিধি মূল বিষয়',
      health: 'স্বাস্থ্য ও পুষ্টি টিপস',
      myths: 'মিথ বনাম সত্য',
      videos: 'শিক্ষামূলক ভিডিও'
    },
    content: {
      basics: [
        {
          title: 'স্যানিটারি প্যাড',
          description: 'কীভাবে প্যাড নিরাপদে বেছে নিন, ব্যবহার করুন এবং ফেলুন',
          icon: '🩲'
        },
        {
          title: 'মাসিক কাপ',
          description: 'পরিবেশ-বান্ধব, পুনঃব্যবহারযোগ্য মাসিক সুরক্ষা',
          icon: '🏺'
        },
        {
          title: 'ট্যাম্পন',
          description: 'অভ্যন্তরীণ সুরক্ষা - ব্যবহার এবং নিরাপত্তা টিপস',
          icon: '🎯'
        },
        {
          title: 'সঠিক নিষ্কাশন',
          description: 'পরিবেশ-বান্ধব নিষ্কাশন পদ্ধতি',
          icon: '♻️'
        }
      ],
      health: [
        {
          title: 'সংক্রমণ প্রতিরোধ',
          description: 'পিরিয়ডের সময় UTI এবং ইস্ট সংক্রমণ প্রতিরোধ',
          icon: '🛡️'
        },
        {
          title: 'পিরিয়ডের সময় পুষ্টি',
          description: 'যে খাবার ব্যথা এবং শক্তিতে সাহায্য করে',
          icon: '🥗'
        },
        {
          title: 'ব্যায়াম ও চলাচল',
          description: 'মাসিকের সময় নিরাপদ ব্যায়াম',
          icon: '🏃‍♀️'
        },
        {
          title: 'ব্যথা ব্যবস্থাপনা',
          description: 'মাসিক ব্যথা পরিচালনার প্রাকৃতিক উপায়',
          icon: '🌿'
        }
      ],
      myths: [
        {
          myth: 'পিরিয়ডের সময় সাঁতার কাটা যায় না',
          fact: 'সঠিক সুরক্ষার সাথে পিরিয়ডের সময় একেবারেই সাঁতার কাটা যায়',
          icon: '🏊‍♀️'
        },
        {
          myth: 'একসাথে থাকা নারীদের পিরিয়ড একসাথে হয়',
          fact: 'মাসিক সমন্বয়ের কোন বৈজ্ঞানিক প্রমাণ নেই',
          icon: '👭'
        },
        {
          myth: 'পিরিয়ডের সময় ব্যায়াম এড়ানো উচিত',
          fact: 'হালকা ব্যায়াম আসলে ব্যথা কমাতে সাহায্য করতে পারে',
          icon: '💪'
        },
        {
          myth: 'পিরিয়ড আপনাকে অপবিত্র করে তোলে',
          fact: 'মাসিক একটি প্রাকৃতিক, স্বাস্থ্যকর শারীরিক কার্য',
          icon: '✨'
        }
      ]
    },
    watchVideo: 'ভিডিও দেখুন',
    readMore: 'আরও পড়ুন',
    myth: 'মিথ',
    fact: 'সত্য'
  },
  ta: {
    title: 'கற்றுக்கொள் மற்றும் வளரவும்',
    subtitle: 'மாதவிடாய் சுகாதாரம் மற்றும் சுகாதாரம் பற்றிய சான்று அடிப்படையிலான கல்வி',
    categories: {
      basics: 'மாதவிடாய் சுகாதார அடிப்படைகள்',
      health: 'சுகாதார மற்றும் ஊட்டச்சத்து குறிப்புகள்',
      myths: 'கட்டுக்கதைகள் Vs உண்மைகள்',
      videos: 'கல்வி வீডியோக்கள்'
    },
    content: {
      basics: [
        {
          title: 'சானிட்டரி பேட்கள்',
          description: 'பேட்களை பாதுகாப்பாக தேர்வு செய்து, பயன்படுத்தி, அகற்றுவது எப்படி',
          icon: '🩲'
        },
        {
          title: 'மாதவிடாய் கப்கள்',
          description: 'சுற்றுச்சூழல் நட்பு, மீண்டும் பயன்படுத்தக்கூடிய மாதவிடாய் பாதுகாப்பு',
          icon: '🏺'
        },
        {
          title: 'டாம்பன்கள்',
          description: 'உள் பாதுகாப்பு - பயன்பாடு மற்றும் பாதுகாப்பு குறிப்புகள்',
          icon: '🎯'
        },
        {
          title: 'சரியான அகற்றல்',
          description: 'சுற்றுச்சூழல் நட்பு அகற்றும் முறைகள்',
          icon: '♻️'
        }
      ],
      health: [
        {
          title: 'தொற்றுகளைத் தடுத்தல்',
          description: 'மாதவிடாய் காலத்தில் UTI மற்றும் ஈஸ்ட் தொற்று தடுப்பு',
          icon: '🛡️'
        },
        {
          title: 'மாதவிடாய் காலத்தில் ஊட்டச்சத்து',
          description: 'வலி மற்றும் ஆற்றலுக்கு உதவும் உணவுகள்',
          icon: '🥗'
        },
        {
          title: 'உடற்பயிற்சி மற்றும் இயக்கம்',
          description: 'மாதவிடாய் காலத்தில் பாதுகாப்பான உடற்பயிற்சிகள்',
          icon: '🏃‍♀️'
        },
        {
          title: 'வலி நிர்வாகம்',
          description: 'மாதவிடாய் வலியை நிர்வகிக்க இயற்கையான வழிகள்',
          icon: '🌿'
        }
      ],
      myths: [
        {
          myth: 'மாதவிடாய் காலத்தில் நீந்த முடியாது',
          fact: 'சரியான பாதுகாப்புடன் மாதவிடாய் காலத்தில் நீந்தலாம்',
          icon: '🏊‍♀️'
        },
        {
          myth: 'ஒன்றாக வாழும் பெண்களின் மாதவிடாய் ஒரே நேரத்தில் வரும்',
          fact: 'மாதவிடாய் ஒத்திசைவுக்கு எந்த அறிவியல் சான்றும் இல்லை',
          icon: '👭'
        },
        {
          myth: 'மாதவிடாய் காலத்தில் உடற்பயிற்சியை தவிர்க்க வேண்டும்',
          fact: 'லேசான உடற்பயிற்சி உண்மையில் வலியை குறைக்க உதவும்',
          icon: '💪'
        },
        {
          myth: 'மாதவிடாய் உங்களை அசுத்தப்படுத்துகிறது',
          fact: 'மாதவிடாய் ஒரு இயற்கையான, ஆரோக்கியமான உடல் செயல்பாடு',
          icon: '✨'
        }
      ]
    },
    watchVideo: 'வீடியோ பார்க்கவும்',
    readMore: 'மேலும் படிக்கவும்',
    myth: 'கட்டுக்கதை',
    fact: 'உண்மை'
  }
};

export default function LearnSection({ language }: LearnSectionProps) {
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState<'basics' | 'health' | 'myths' | 'videos'>('basics');

  const renderContent = () => {
    switch (activeCategory) {
      case 'basics':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {t.content.basics.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                  {t.readMore} →
                </button>
              </div>
            ))}
          </div>
        );
      
      case 'health':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {t.content.health.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                  {t.readMore} →
                </button>
              </div>
            ))}
          </div>
        );

      case 'myths':
        return (
          <div className="space-y-6">
            {t.content.myths.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <HelpCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span className="font-semibold text-red-700">{t.myth}</span>
                    </div>
                    <p className="text-gray-700">{item.myth}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                    <div className="flex items-center mb-2">
                      <Lightbulb className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-green-700">{t.fact}</span>
                    </div>
                    <p className="text-gray-700">{item.fact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'videos':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <div key={video} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative bg-gradient-to-br from-pink-200 to-purple-200 h-48 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white bg-pink-500 rounded-full p-3 hover:bg-pink-600 cursor-pointer transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Understanding Menstrual Cycle - Part {video}</h3>
                  <p className="text-sm text-gray-600 mb-3">Learn about the phases and changes in your body</p>
                  <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    {t.watchVideo}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as any)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600 shadow-md'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-12">
          {renderContent()}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="text-lg mb-6 opacity-90">Connect with other women and continue your journey of health awareness</p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center mx-auto">
            <Users className="w-5 h-5 mr-2" />
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}