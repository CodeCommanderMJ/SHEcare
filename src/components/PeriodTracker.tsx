import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Heart, Droplets, Flower, Sun } from 'lucide-react';

interface PeriodTrackerProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    title: 'Period Tracker',
    subtitle: 'Track your cycle and get personalized health insights',
    currentMonth: 'Current Month',
    predictions: 'Predictions',
    nextPeriod: 'Next Period',
    fertileWindow: 'Fertile Window',
    tips: 'Health Tips',
    phases: {
      menstrual: 'Menstrual Phase',
      follicular: 'Follicular Phase',
      ovulation: 'Ovulation',
      luteal: 'Luteal Phase'
    },
    healthTips: {
      menstrual: 'Stay hydrated, use heat therapy for cramps, rest well',
      follicular: 'Great time for new activities, energy is building',
      ovulation: 'Peak fertility window, stay active and eat well',
      luteal: 'Focus on self-care, manage mood changes naturally'
    },
    startTracking: 'Start Tracking Your Cycle',
    markPeriod: 'Mark Period Day',
    symptoms: 'Track Symptoms'
  },
  hi: {
    title: 'पीरियड ट्रैकर',
    subtitle: 'अपने चक्र को ट्रैक करें और व्यक्तिगत स्वास्थ्य जानकारी पाएं',
    currentMonth: 'वर्तमान महीना',
    predictions: 'भविष्यवाणियां',
    nextPeriod: 'अगला पीरियड',
    fertileWindow: 'फर्टाइल विंडो',
    tips: 'स्वास्थ्य सुझाव',
    phases: {
      menstrual: 'मासिक धर्म चरण',
      follicular: 'फॉलिक्यूलर चरण',
      ovulation: 'ओव्यूलेशन',
      luteal: 'ल्यूटियल चरण'
    },
    healthTips: {
      menstrual: 'हाइड्रेटेड रहें, ऐंठन के लिए गर्मी चिकित्सा, अच्छी तरह आराम करें',
      follicular: 'नई गतिविधियों के लिए अच्छा समय, ऊर्जा बढ़ रही है',
      ovulation: 'चरम प्रजनन खिड़की, सक्रिय रहें और अच्छा खाएं',
      luteal: 'स्व-देखभाल पर ध्यान दें, मूड परिवर्तन को प्राकृतिक रूप से प्रबंधित करें'
    },
    startTracking: 'अपना चक्र ट्रैक करना शुरू करें',
    markPeriod: 'पीरियड का दिन चिह्नित करें',
    symptoms: 'लक्षण ट्रैक करें'
  },
  bn: {
    title: 'পিরিয়ড ট্র্যাকার',
    subtitle: 'আপনার চক্র ট্র্যাক করুন এবং ব্যক্তিগত স্বাস্থ্য অন্তর্দৃষ্টি পান',
    currentMonth: 'বর্তমান মাস',
    predictions: 'ভবিষ্যদ্বাণী',
    nextPeriod: 'পরবর্তী পিরিয়ড',
    fertileWindow: 'উর্বর উইন্ডো',
    tips: 'স্বাস্থ্য টিপস',
    phases: {
      menstrual: 'মাসিক পর্যায়',
      follicular: 'ফলিকুলার পর্যায়',
      ovulation: 'ওভুলেশন',
      luteal: 'লিউটিয়াল পর্যায়'
    },
    healthTips: {
      menstrual: 'হাইড্রেটেড থাকুন, ব্যথার জন্য তাপ থেরাপি, ভালো বিশ্রাম নিন',
      follicular: 'নতুন কার্যকলাপের জন্য দুর্দান্ত সময়, শক্তি তৈরি হচ্ছে',
      ovulation: 'সর্বোচ্চ উর্বরতার জানালা, সক্রিয় থাকুন এবং ভাল খান',
      luteal: 'স্ব-যত্নে মনোনিবেশ করুন, মেজাজ পরিবর্তন প্রাকৃতিকভাবে পরিচালনা করুন'
    },
    startTracking: 'আপনার চক্র ট্র্যাক করা শুরু করুন',
    markPeriod: 'পিরিয়ডের দিন চিহ্নিত করুন',
    symptoms: 'লক্ষণ ট্র্যাক করুন'
  },
  ta: {
    title: 'மாதவிடாய் கண்காணிப்பாளர்',
    subtitle: 'உங்கள் சுழற்சியை கண்காணித்து தனிப்பட்ட சுகாதார நுண்ணறிவுகளைப் பெறுங்கள்',
    currentMonth: 'தற்போதைய மாதம்',
    predictions: 'கணிப்புகள்',
    nextPeriod: 'அடுத்த மாதவிடாய்',
    fertileWindow: 'கருவுறுதல் சாளரம்',
    tips: 'சுகாதார குறிப்புகள்',
    phases: {
      menstrual: 'மாதவிடாய் கட்டம்',
      follicular: 'ஃபோலிகுலர் கட்டம்',
      ovulation: 'அண்டவிடுப்பு',
      luteal: 'லூட்டியல் கட்டம்'
    },
    healthTips: {
      menstrual: 'நீரேற்றம் செய்யுங்கள், வலிக்கு வெப்ப சிகிச்சை, நன்கு ஓய்வு',
      follicular: 'புதிய செயல்பாடுகளுக்கு நல்ல நேரம், ஆற்றல் கட்டமைக்கப்படுகிறது',
      ovulation: 'உச்ச கருவுறுதல் சாளரம், செயலில் இருங்கள் மற்றும் நன்றாக சாப்பிடுங்கள்',
      luteal: 'சுய பராமரிப்பில் கவனம் செலுத்துங்கள், மன நிலை மாற்றங்களை இயற்கையாக நிர்வகிக்கவும்'
    },
    startTracking: 'உங்கள் சுழற்சியை கண்காணிக்க தொடங்குங்கள்',
    markPeriod: 'மாதவிடாய் நாளை குறிக்கவும்',
    symptoms: 'அறிகுறிகளை கண்காணிக்கவும்'
  }
};

export default function PeriodTracker({ language }: PeriodTrackerProps) {
  const t = translations[language];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [trackedDays, setTrackedDays] = useState<Set<string>>(new Set());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDateKey = (date: Date, day: number) => {
    return `${date.getFullYear()}-${date.getMonth()}-${day}`;
  };

  const toggleDay = (day: number) => {
    const dateKey = formatDateKey(currentDate, day);
    const newTrackedDays = new Set(trackedDays);
    if (newTrackedDays.has(dateKey)) {
      newTrackedDays.delete(dateKey);
    } else {
      newTrackedDays.add(dateKey);
    }
    setTrackedDays(newTrackedDays);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <section className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDayOfMonth }, (_, i) => (
                <div key={`empty-${i}`} className="p-2"></div>
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const dateKey = formatDateKey(currentDate, day);
                const isTracked = trackedDays.has(dateKey);
                const isToday = new Date().getDate() === day && 
                  new Date().getMonth() === currentDate.getMonth() && 
                  new Date().getFullYear() === currentDate.getFullYear();

                return (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`p-2 rounded-full h-12 w-12 text-sm font-medium transition-all duration-200 ${
                      isTracked
                        ? 'bg-pink-500 text-white shadow-lg'
                        : isToday
                        ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                        : 'hover:bg-pink-100 text-gray-700'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-pink-50 rounded-2xl">
              <p className="text-sm text-gray-600 mb-2">{t.markPeriod}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  <span className="text-sm">Period Day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-300 rounded-full border-2 border-purple-500"></div>
                  <span className="text-sm">Today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Panel */}
          <div className="space-y-6">
            {/* Predictions */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-pink-500 mr-2" />
                {t.predictions}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-pink-50 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{t.nextPeriod}</span>
                    <span className="text-pink-600 font-semibold">Dec 15, 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">In 12 days</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{t.fertileWindow}</span>
                    <span className="text-purple-600 font-semibold">Dec 8-12</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Peak fertility period</p>
                </div>
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Heart className="w-6 h-6 text-pink-500 mr-2" />
                {t.tips}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <Droplets className="w-5 h-5 text-red-500 mr-2" />
                    <span className="font-semibold">{t.phases.menstrual}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t.healthTips.menstrual}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <Flower className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-semibold">{t.phases.follicular}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t.healthTips.follicular}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="font-semibold">{t.phases.ovulation}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t.healthTips.ovulation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}