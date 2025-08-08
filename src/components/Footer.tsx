import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    tagline: 'Empowering women through hygiene awareness',
    quickLinks: 'Quick Links',
    resources: 'Resources',
    contact: 'Contact Us',
    social: 'Follow Us',
    links: {
      home: 'Home',
      tracker: 'Period Tracker',
      learn: 'Learn',
      community: 'Community',
      products: 'Find Products',
      donate: 'Donate'
    },
    resourceLinks: {
      who: 'WHO Guidelines',
      unicef: 'UNICEF Resources',
      gov: 'Government Portal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      help: 'Help Center'
    },
    contactInfo: {
      email: 'support@shecare.org',
      phone: '+91 98765 43210',
      address: '123 Health Street, Wellness City, India'
    },
    copyright: '© 2024 SHECare. All rights reserved. Made with ❤️ for women\'s health.',
    mission: 'Breaking taboos, building awareness, and supporting women\'s menstrual health worldwide.'
  },
  hi: {
    tagline: 'स्वच्छता जागरूकता के माध्यम से महिलाओं का सशक्तिकरण',
    quickLinks: 'त्वरित लिंक',
    resources: 'संसाधन',
    contact: 'संपर्क करें',
    social: 'हमें फॉलो करें',
    links: {
      home: 'होम',
      tracker: 'पीरियड ट्रैकर',
      learn: 'सीखें',
      community: 'समुदाय',
      products: 'उत्पाद खोजें',
      donate: 'दान करें'
    },
    resourceLinks: {
      who: 'WHO दिशानिर्देश',
      unicef: 'UNICEF संसाधन',
      gov: 'सरकारी पोर्टल',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      help: 'सहायता केंद्र'
    },
    contactInfo: {
      email: 'support@shecare.org',
      phone: '+91 98765 43210',
      address: '123 हेल्थ स्ट्रीट, वेलनेस सिटी, भारत'
    },
    copyright: '© 2024 SHECare. सभी अधिकार सुरक्षित। महिलाओं के स्वास्थ्य के लिए ❤️ से बनाया गया।',
    mission: 'वर्जनाओं को तोड़ना, जागरूकता बढ़ाना और दुनिया भर में महिलाओं के मासिक धर्म स्वास्थ्य का समर्थन करना।'
  },
  bn: {
    tagline: 'স্বাস্থ্যবিধি সচেতনতার মাধ্যমে নারীদের ক্ষমতায়ন',
    quickLinks: 'দ্রুত লিঙ্ক',
    resources: 'সম্পদ',
    contact: 'যোগাযোগ করুন',
    social: 'আমাদের অনুসরণ করুন',
    links: {
      home: 'হোম',
      tracker: 'পিরিয়ড ট্র্যাকার',
      learn: 'শিখুন',
      community: 'কমিউনিটি',
      products: 'পণ্য খুঁজুন',
      donate: 'দান করুন'
    },
    resourceLinks: {
      who: 'WHO নির্দেশিকা',
      unicef: 'UNICEF সম্পদ',
      gov: 'সরকারি পোর্টাল',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'সেবার শর্তাবলী',
      help: 'সাহায্য কেন্দ্র'
    },
    contactInfo: {
      email: 'support@shecare.org',
      phone: '+৮৮ ৯৮৭৬৫ ৪৩২১০',
      address: '১২৩ হেলথ স্ট্রিট, ওয়েলনেস সিটি, বাংলাদেশ'
    },
    copyright: '© ২০২৪ SHECare। সকল অধিকার সংরক্ষিত। নারীর স্বাস্থ্যের জন্য ❤️ দিয়ে তৈরি।',
    mission: 'কুসংস্কার ভাঙা, সচেতনতা তৈরি এবং বিশ্বব্যাপী নারীদের মাসিক স্বাস্থ্যকে সমর্থন করা।'
  },
  ta: {
    tagline: 'சுகாதார விழிப்புணர্வு மூலம் பெண்களை வலுப্படுত্துதல்',
    quickLinks: 'வேগமான இণைப্புগள்',
    resources: 'வளங্கள்',
    contact: 'எங्गளைத् तोगाযোগ् कোल্लুங্গল्',
    social: 'எங्গളै पिन्पাট্টুঙ্গল্',
    links: {
      home: 'முகப்পு',
      tracker: 'মাতবিดায় கণ্কানি',
      learn: 'কাত্তুক্কোল্লুঙ्गল्',
      community: 'সমুদাযম्',
      products: 'தযারিপ্পুকল্',
      donate: 'কোদै'
    },
    resourceLinks: {
      who: 'WHO দিশানির్দেশങ্গল্',
      unicef: 'UNICEF वলাঙ্গল্',
      gov: 'আরসু পোর্টल্',
      privacy: 'કোপনীযता নীতি',
      terms: 'সেবাযিন् शর্তগল্',
      help: 'उতবি কেন্দ্রম্'
    },
    contactInfo: {
      email: 'support@shecare.org',
      phone: '+৯১ ৯৮৭৬৫ ৪৩২১০',
      address: '১২৩ নलাম் তেরু, আরোগ্য নগরম্, ভারতম্'
    },
    copyright: '© ২০২৪ SHECare। এল্লা উরিমেগলুম् কাপ্পाত্তপ্পাট্টুল্লনা। পেণ্গলিন् আরোগ্যত্তিনায় ❤️ উদन् সেয়তদু।',
    mission: 'তাদেগলে ওডিক্ক, বিজ্ঞাপুন্বর্ধনै সেয্য, উলগলাবিল পেণ্গলিন् মাসিক আরোগ্যত্তে আধরিক্ক।'
  }
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-pink-500 fill-current" />
              <h3 className="text-2xl font-bold font-['Poppins']">SHECare</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.mission}
            </p>
            <p className="text-pink-300 font-medium">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, label]) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.resources}</h4>
            <ul className="space-y-3">
              {Object.entries(t.resourceLinks).map(([key, label]) => (
                <li key={key}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-gray-700">
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-pink-500 mr-3" />
                <a
                  href={`mailto:${t.contactInfo.email}`}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  {t.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-pink-500 mr-3" />
                <a
                  href={`tel:${t.contactInfo.phone}`}
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  {t.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                <span className="text-gray-300">{t.contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.social}</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}