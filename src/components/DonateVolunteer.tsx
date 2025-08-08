import React, { useState } from 'react';
import { Heart, Users, Gift, Phone, Mail, MapPin, IndianRupee, Package } from 'lucide-react';

interface DonateVolunteerProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    title: 'Support Our Mission',
    subtitle: 'Help us provide menstrual hygiene education and products to women in need',
    donateTab: 'Donate',
    volunteerTab: 'Volunteer',
    donate: {
      title: 'Make a Donation',
      description: 'Your contribution directly helps provide menstrual hygiene kits to women and girls who need them most.',
      kits: {
        basic: {
          title: 'Basic Hygiene Kit',
          price: '₹50',
          items: ['5 Sanitary Pads', 'Educational Brochure', 'Disposal Bag'],
          description: 'Provides essential menstrual hygiene for one cycle'
        },
        premium: {
          title: 'Premium Care Kit',
          price: '₹150',
          items: ['1 Menstrual Cup', '10 Sanitary Pads', 'Educational Materials', 'Hygiene Soap'],
          description: 'Complete menstrual care with reusable options'
        },
        education: {
          title: 'Education Package',
          price: '₹300',
          items: ['School Workshop', 'Educational Materials', '20 Hygiene Kits', 'Teacher Training'],
          description: 'Comprehensive education program for one classroom'
        }
      },
      customAmount: 'Enter Custom Amount',
      donateButton: 'Donate Now',
      impact: {
        title: 'Your Impact',
        stats: [
          { number: '10,000+', description: 'Women supported this year' },
          { number: '500+', description: 'Schools reached' },
          { number: '₹2,50,000', description: 'Total donations received' }
        ]
      }
    },
    volunteer: {
      title: 'Become a Volunteer',
      description: 'Join our community of passionate individuals working to break menstrual taboos and support women\'s health.',
      opportunities: [
        {
          title: 'Community Educator',
          description: 'Conduct awareness sessions in schools and communities',
          time: '4-6 hours/week',
          icon: '📚'
        },
        {
          title: 'Distribution Volunteer',
          description: 'Help distribute hygiene kits in rural and urban areas',
          time: '2-4 hours/week',
          icon: '📦'
        },
        {
          title: 'Digital Content Creator',
          description: 'Create educational content for social media and websites',
          time: '3-5 hours/week',
          icon: '💻'
        },
        {
          title: 'Field Coordinator',
          description: 'Coordinate programs and manage volunteer teams',
          time: '8-10 hours/week',
          icon: '👥'
        }
      ],
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        location: 'Location/City',
        interest: 'Area of Interest',
        experience: 'Previous Experience (Optional)',
        motivation: 'Why do you want to volunteer with us?',
        submit: 'Submit Application'
      }
    },
    thankYou: 'Thank you for your support! We will get in touch with you soon.',
    processed: 'Processing...'
  },
  hi: {
    title: 'हमारे मिशन का समर्थन करें',
    subtitle: 'जरूरतमंद महिलाओं को मासिक धर्म स्वच्छता शिक्षा और उत्पाद प्रदान करने में हमारी मदद करें',
    donateTab: 'दान करें',
    volunteerTab: 'स्वयंसेवक',
    donate: {
      title: 'दान करें',
      description: 'आपका योगदान सीधे उन महिलाओं और लड़कियों को मासिक धर्म स्वच्छता किट प्रदान करने में मदद करता है जिन्हें इसकी सबसे ज्यादा जरूरत है।',
      kits: {
        basic: {
          title: 'बेसिक स्वच्छता किट',
          price: '₹50',
          items: ['5 सैनिटरी पैड', 'शैक्षिक ब्रोशर', 'डिस्पोज़ल बैग'],
          description: 'एक चक्र के लिए आवश्यक मासिक धर्म स्वच्छता प्रदान करता है'
        },
        premium: {
          title: 'प्रीमियम केयर किट',
          price: '₹150',
          items: ['1 मासिक धर्म कप', '10 सैनिटरी पैड', 'शैक्षिक सामग्री', 'स्वच्छता साबुन'],
          description: 'पुन: उपयोग योग्य विकल्पों के साथ पूर्ण मासिक धर्म देखभाल'
        },
        education: {
          title: 'शिक्षा पैकेज',
          price: '₹300',
          items: ['स्कूल कार्यशाला', 'शैक्षिक सामग्री', '20 स्वच्छता किट', 'शिक्षक प्रशिक्षण'],
          description: 'एक कक्षा के लिए व्यापक शिक्षा कार्यक्रम'
        }
      },
      customAmount: 'कस्टम राशि दर्ज करें',
      donateButton: 'अभी दान करें',
      impact: {
        title: 'आपका प्रभाव',
        stats: [
          { number: '10,000+', description: 'इस साल समर्थित महिलाएं' },
          { number: '500+', description: 'स्कूलों तक पहुंच' },
          { number: '₹2,50,000', description: 'कुल प्राप्त दान' }
        ]
      }
    },
    volunteer: {
      title: 'स्वयंसेवक बनें',
      description: 'मासिक धर्म वर्जनाओं को तोड़ने और महिलाओं के स्वास्थ्य का समर्थन करने के लिए काम करने वाले भावुक व्यक्तियों के हमारे समुदाय में शामिल हों।',
      opportunities: [
        {
          title: 'सामुदायिक शिक्षक',
          description: 'स्कूलों और समुदायों में जागरूकता सत्र आयोजित करें',
          time: '4-6 घंटे/सप्ताह',
          icon: '📚'
        },
        {
          title: 'वितरण स्वयंसेवक',
          description: 'ग्रामीण और शहरी क्षेत्रों में स्वच्छता किट वितरित करने में मदद करें',
          time: '2-4 घंटे/सप्ताह',
          icon: '📦'
        },
        {
          title: 'डिजिटल कंटेंट क्रिएटर',
          description: 'सोशल मीडिया और वेबसाइटों के लिए शैक्षिक सामग्री बनाएं',
          time: '3-5 घंटे/सप्ताह',
          icon: '💻'
        },
        {
          title: 'फील्ड कोऑर्डिनेटर',
          description: 'कार्यक्रमों का समन्वय करें और स्वयंसेवक टीमों का प्रबंधन करें',
          time: '8-10 घंटे/सप्ताह',
          icon: '👥'
        }
      ],
      form: {
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        phone: 'फोन नंबर',
        location: 'स्थान/शहर',
        interest: 'रुचि का क्षेत्र',
        experience: 'पिछला अनुभव (वैकल्पिक)',
        motivation: 'आप हमारे साथ स्वयंसेवा क्यों करना चाहते हैं?',
        submit: 'आवेदन जमा करें'
      }
    },
    thankYou: 'आपके समर्थन के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।',
    processed: 'प्रसंस्करण...'
  },
  bn: {
    title: 'আমাদের মিশনকে সমর্থন করুন',
    subtitle: 'প্রয়োজনে থাকা নারীদের মাসিক স্বাস্থ্যবিধি শিক্ষা এবং পণ্য প্রদানে আমাদের সাহায্য করুন',
    donateTab: 'দান করুন',
    volunteerTab: 'স্বেচ্ছাসেবক',
    donate: {
      title: 'দান করুন',
      description: 'আপনার অবদান সরাসরি সেই নারী ও মেয়েদের মাসিক স্বাস্থ্যবিধি কিট প্রদানে সাহায্য করে যাদের এটি সবচেয়ে বেশি প্রয়োজন।',
      kits: {
        basic: {
          title: 'বেসিক স্বাস্থ্যবিধি কিট',
          price: '₹50',
          items: ['৫টি স্যানিটারি প্যাড', 'শিক্ষামূলক ব্রোশার', 'নিষ্কাশন ব্যাগ'],
          description: 'এক চক্রের জন্য প্রয়োজনীয় মাসিক স্বাস্থ্যবিধি প্রদান করে'
        },
        premium: {
          title: 'প্রিমিয়াম কেয়ার কিট',
          price: '₹150',
          items: ['১টি মাসিক কাপ', '১০টি স্যানিটারি প্যাড', 'শিক্ষামূলক উপকরণ', 'স্বাস্থ্যবিধি সাবান'],
          description: 'পুনর্ব্যবহারযোগ্য বিকল্প সহ সম্পূর্ণ মাসিক যত্ন'
        },
        education: {
          title: 'শিক্ষা প্যাকেজ',
          price: '₹300',
          items: ['স্কুল কর্মশালা', 'শিক্ষামূলক উপকরণ', '২০টি স্বাস্থ্যবিধি কিট', 'শিক্ষক প্রশিক্ষণ'],
          description: 'একটি শ্রেণীকক্ষের জন্য ব্যাপক শিক্ষা কর্মসূচি'
        }
      },
      customAmount: 'কাস্টম পরিমাণ লিখুন',
      donateButton: 'এখনই দান করুন',
      impact: {
        title: 'আপনার প্রভাব',
        stats: [
          { number: '১০,০০০+', description: 'এই বছর সমর্থিত নারী' },
          { number: '৫০০+', description: 'স্কুলে পৌঁছানো' },
          { number: '₹২,৫০,০০০', description: 'মোট প্রাপ্ত দান' }
        ]
      }
    },
    volunteer: {
      title: 'স্বেচ্ছাসেবক হন',
      description: 'মাসিক কলঙ্ক ভাঙতে এবং নারীদের স্বাস্থ্যের সমর্থনে কাজ করা আবেগপ্রবণ ব্যক্তিদের আমাদের সম্প্রদায়ে যোগ দিন।',
      opportunities: [
        {
          title: 'সম্প্রদায়ের শিক্ষক',
          description: 'স্কুল ও সম্প্রদায়ে সচেতনতা সেশন পরিচালনা করুন',
          time: '৪-৬ ঘন্টা/সপ্তাহ',
          icon: '📚'
        },
        {
          title: 'বিতরণ স্বেচ্ছাসেবক',
          description: 'গ্রামীণ এবং শহুরে এলাকায় স্বাস্থ্যবিধি কিট বিতরণে সাহায্য করুন',
          time: '২-৪ ঘন্টা/সপ্তাহ',
          icon: '📦'
        },
        {
          title: 'ডিজিটাল কন্টেন্ট ক্রিয়েটর',
          description: 'সোশ্যাল মিডিয়া এবং ওয়েবসাইটের জন্য শিক্ষামূলক কন্টেন্ট তৈরি করুন',
          time: '৩-৫ ঘন্টা/সপ্তাহ',
          icon: '💻'
        },
        {
          title: 'ফিল্ড কো-অর্ডিনেটর',
          description: 'প্রোগ্রামের সমন্বয় করুন এবং স্বেচ্ছাসেবক দল পরিচালনা করুন',
          time: '৮-১০ ঘন্টা/সপ্তাহ',
          icon: '👥'
        }
      ],
      form: {
        name: 'পূর্ণ নাম',
        email: 'ইমেইল ঠিকানা',
        phone: 'ফোন নম্বর',
        location: 'অবস্থান/শহর',
        interest: 'আগ্রহের ক্ষেত্র',
        experience: 'পূর্ববর্তী অভিজ্ঞতা (ঐচ্ছিক)',
        motivation: 'আপনি কেন আমাদের সাথে স্বেচ্ছাসেবা করতে চান?',
        submit: 'আবেদন জমা দিন'
      }
    },
    thankYou: 'আপনার সমর্থনের জন্য ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
    processed: 'প্রক্রিয়াকরণ...'
  },
  ta: {
    title: 'எங்கள் நோக்கத்தை ஆதரிக்கவும்',
    subtitle: 'தேவையில் உள்ள பெண்களுக்கு மாதவிடாய் சுகாதார கல்வி மற்றும் தயாரிப்புகளை வழங்க எங்களுக்கு உதவுங்கள்',
    donateTab: 'நன்கொடை',
    volunteerTab: 'தன்னார்வலர்',
    donate: {
      title: 'நன்கொடை செய்யுங்கள்',
      description: 'உங்கள் பங்களிப்பு மிகவும் தேவைப்படும் பெண்கள் மற்றும் சிறுமிகளுக்கு மாதவிடாய் சுகாதார கிட்களை வழங்க நேரடியாக உதவுகிறது।',
      kits: {
        basic: {
          title: 'அடிப்படை சுகாதார கிட்',
          price: '₹50',
          items: ['5 சானிட்டரி பேட்கள்', 'கல்வி துண்டுப்பிரசுரம்', 'அகற்றும் பை'],
          description: 'ஒரு சுழற்சிக்கு அத்தியாவசிய மாதவிடாய் சுகாதாரம் வழங்குகிறது'
        },
        premium: {
          title: 'பிரீமியம் கேர் கிட்',
          price: '₹150',
          items: ['1 மாதவிடாய் கப்', '10 சானிட்டரி பேட்கள்', 'கல்வி பொருட்கள்', 'சுகாதார சோப்பு'],
          description: 'மீண்டும் பயன்படுத்தக்கூடிய விकल்பों்களுடன் முழுமையான மாதவிடाय் பராமরிப்पு'
        },
        education: {
          title: 'கல்வி தொகுப்பு',
          price: '₹300',
          items: ['பள்ளி பட்டறை', 'கல்வி பொருட்கள்', '20 சுகาதார கிட்கள்', 'ஆசிரியர் பயிற்சி'],
          description: 'ஒரு வகுப்பறைக்கான விரிவான கல்வி திட்டம்'
        }
      },
      customAmount: 'தனிப்பயன் தொகையை உள்ளிடவும்',
      donateButton: 'இப்போது நன்கொடை செய்யுங்கள்',
      impact: {
        title: 'உங்கள் தாக்கம்',
        stats: [
          { number: '10,000+', description: 'இந்த ஆண்டு ஆதரிக்கப்பட்ட பெண்கள்' },
          { number: '500+', description: 'அடைந்த பள்ளிகள்' },
          { number: '₹2,50,000', description: 'மொத்த பெறப்பட்ட நன்கொடைகள்' }
        ]
      }
    },
    volunteer: {
      title: 'தன்னார்வலராக மாறுங்கள்',
      description: 'மாதவிடाய் கூچிகளை உடைத்து பெண்களின் சுகாதாரத்தை ஆதரிக்க பணியாற்றும் ஆர்வமுள்ள நபர்களின் எங்கள் சமூகத்தில் சேருங்கள்।',
      opportunities: [
        {
          title: 'சமூக கல்வியாளர்',
          description: 'பள்ளிகள் மற்றும் சமुதாயங்களில் விழிப்புணர்வு அமர்வுகளை நடத்துங்கள்',
          time: '4-6 மணிநேரம்/வாரம்',
          icon: '📚'
        },
        {
          title: 'விநியோக தன்னார்வலர்',
          description: 'கிராமப்புற மற்றும் நகர்ப்புற பகுதிகளில் சுகாதार கிட்களை விநியोगிக্க உதவுங்கள்',
          time: '2-4 மணிநேரम்/வாரம்',
          icon: '📦'
        },
        {
          title: 'டிজிட்டல் உள்ளடக்க உருவாக்குபவর்',
          description: 'சமூக ஊடகங்கள் மற்றும் வலைத்தளங்களுக்கு கல்வி உள்ளடक்கத்தை உருவாக்குங்கள்',
          time: '3-5 மணிநேரம்/वाराम்',
          icon: '💻'
        },
        {
          title: 'கள ஒருங்கிணைப்பாளர்',
          description: 'திட்டங்களை ஒருங்கிணைத்து தன்னார்வலர் குழुக்களை நிர்वाহிக்कवुম்',
          time: '8-10 மணிநేরम்/வாரம்',
          icon: '👥'
        }
      ],
      form: {
        name: 'முழு பெயர்',
        email: 'மின்னஞ்சல் முகவரி',
        phone: 'தொலைபேசி எண்',
        location: 'இடம்/நகரம்',
        interest: 'ஆர்வமுள்ள பகுதி',
        experience: 'முந்தைய அனுபவம் (விকல्पीय)',
        motivation: 'நீங்கள் ஏன் எங்களுடன் தன्नार्வलராक மாற விரும்புகिறீর्गल्?',
        submit: 'விண்ணप्பम् சமर্पিक്கவুম্'
      }
    },
    thankYou: 'உங்கள் ஆதরवுக்கு நன্றি! நாங्கள் விரैவিল் உங্களুदন् तোगाযোগ் कोल्लुவோম्।',
    processed: 'செयল্পাडुকিறदু...'
  }
};

export default function DonateVolunteer({ language }: DonateVolunteerProps) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');
  const [selectedKit, setSelectedKit] = useState('basic');
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    experience: '',
    motivation: ''
  });

  const handleDonate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    }, 2000);
  };

  const handleVolunteerSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowThankYou(true);
      setVolunteerForm({
        name: '',
        email: '',
        phone: '',
        location: '',
        interest: '',
        experience: '',
        motivation: ''
      });
      setTimeout(() => setShowThankYou(false), 3000);
    }, 2000);
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

        {/* Thank You Message */}
        {showThankYou && (
          <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-2xl text-center">
            <p className="text-green-800 font-medium">{t.thankYou}</p>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'donate'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              <Heart className="w-5 h-5 inline mr-2" />
              {t.donateTab}
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'volunteer'
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              {t.volunteerTab}
            </button>
          </div>
        </div>

        {activeTab === 'donate' ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.donate.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.donate.description}</p>
            </div>

            {/* Donation Kits */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {Object.entries(t.donate.kits).map(([key, kit]) => (
                <div
                  key={key}
                  onClick={() => setSelectedKit(key)}
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedKit === key ? 'ring-4 ring-pink-500 transform scale-105' : ''
                  }`}
                >
                  <div className="text-center mb-6">
                    <Package className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">{kit.title}</h3>
                    <div className="text-4xl font-bold text-pink-600 mb-2">{kit.price}</div>
                    <p className="text-gray-600">{kit.description}</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    {kit.items.map((item, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <Gift className="w-4 h-4 text-pink-500 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className={`w-6 h-6 rounded-full border-2 mx-auto ${
                      selectedKit === key 
                        ? 'bg-pink-500 border-pink-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedKit === key && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">{t.donate.customAmount}</h3>
                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xl text-center"
                  />
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <div className="text-center mb-12">
              <button
                onClick={handleDonate}
                disabled={isProcessing}
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isProcessing ? t.processed : t.donate.donateButton}
              </button>
            </div>

            {/* Impact Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">{t.donate.impact.title}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {t.donate.impact.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.volunteer.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.volunteer.description}</p>
            </div>

            {/* Volunteer Opportunities */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {t.volunteer.opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-5xl mb-4">{opportunity.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="text-pink-600 font-medium">{opportunity.time}</div>
                </div>
              ))}
            </div>

            {/* Volunteer Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-8 text-center">Application Form</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.name}
                    </label>
                    <input
                      type="text"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.email}
                    </label>
                    <input
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.location}
                    </label>
                    <input
                      type="text"
                      value={volunteerForm.location}
                      onChange={(e) => setVolunteerForm({...volunteerForm, location: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.interest}
                    </label>
                    <select
                      value={volunteerForm.interest}
                      onChange={(e) => setVolunteerForm({...volunteerForm, interest: e.target.value})}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Select an area</option>
                      {t.volunteer.opportunities.map((opp, index) => (
                        <option key={index} value={opp.title}>{opp.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.experience}
                    </label>
                    <textarea
                      value={volunteerForm.experience}
                      onChange={(e) => setVolunteerForm({...volunteerForm, experience: e.target.value})}
                      rows={3}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.volunteer.form.motivation}
                    </label>
                    <textarea
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      rows={4}
                      className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={handleVolunteerSubmit}
                    disabled={isProcessing}
                    className="bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {isProcessing ? t.processed : t.volunteer.form.submit}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}