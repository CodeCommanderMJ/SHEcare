import React, { useState } from 'react';
import { MapPin, Search, Filter, Star, Phone, Clock, Navigation } from 'lucide-react';

interface ProductFinderProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    title: 'Find Products Near You',
    subtitle: 'Locate pharmacies, NGOs, and hygiene product dispensers in your area',
    searchLocation: 'Enter your location',
    searchPlaceholder: 'Search for your area, city, or pincode',
    filters: {
      all: 'All',
      pharmacy: 'Pharmacies',
      ngo: 'NGOs',
      dispenser: 'Dispensers',
      free: 'Free Products',
      lowCost: 'Low Cost'
    },
    directions: 'Get Directions',
    call: 'Call',
    hours: 'Hours',
    rating: 'Rating',
    distance: 'Distance',
    products: 'Available Products',
    freeAvailable: 'Free products available',
    lowCostAvailable: 'Low cost products available',
    openNow: 'Open Now',
    closedNow: 'Closed',
    places: [
      {
        id: 1,
        name: 'MedPlus Pharmacy',
        type: 'Pharmacy',
        distance: '0.5 km',
        rating: 4.5,
        address: 'Main Market Road, Near Bus Stand',
        phone: '+91 98765 43210',
        hours: '8:00 AM - 10:00 PM',
        isOpen: true,
        products: ['Pads', 'Tampons', 'Cups'],
        hasFreebies: false,
        isLowCost: true
      },
      {
        id: 2,
        name: 'Sakhi Women Support NGO',
        type: 'NGO',
        distance: '1.2 km',
        rating: 4.8,
        address: 'Community Center, Block A',
        phone: '+91 98765 43211',
        hours: '9:00 AM - 6:00 PM',
        isOpen: true,
        products: ['Free Pads', 'Education Materials'],
        hasFreebies: true,
        isLowCost: false
      },
      {
        id: 3,
        name: 'Campus Health Dispenser',
        type: 'Dispenser',
        distance: '2.0 km',
        rating: 4.2,
        address: 'University Campus, Girls Hostel',
        phone: 'N/A',
        hours: '24/7',
        isOpen: true,
        products: ['Pads', 'Tampons'],
        hasFreebies: false,
        isLowCost: true
      }
    ]
  },
  hi: {
    title: 'अपने नजदीकी उत्पाद खोजें',
    subtitle: 'अपने क्षेत्र में फार्मेसी, एनजीओ और स्वच्छता उत्पाद डिस्पेंसर का पता लगाएं',
    searchLocation: 'अपना स्थान दर्ज करें',
    searchPlaceholder: 'अपना क्षेत्र, शहर या पिनकोड खोजें',
    filters: {
      all: 'सभी',
      pharmacy: 'फार्मेसी',
      ngo: 'एनजीओ',
      dispenser: 'डिस्पेंसर',
      free: 'मुफ्त उत्पाद',
      lowCost: 'कम लागत'
    },
    directions: 'दिशा निर्देश प्राप्त करें',
    call: 'कॉल करें',
    hours: 'समय',
    rating: 'रेटिंग',
    distance: 'दूरी',
    products: 'उपलब्ध उत्पाद',
    freeAvailable: 'मुफ्त उत्पाद उपलब्ध',
    lowCostAvailable: 'कम लागत उत्पाद उपलब्ध',
    openNow: 'अभी खुला है',
    closedNow: 'बंद',
    places: [
      {
        id: 1,
        name: 'मेडप्लस फार्मेसी',
        type: 'फार्मेसी',
        distance: '0.5 किमी',
        rating: 4.5,
        address: 'मुख्य मार्केट रोड, बस स्टैंड के पास',
        phone: '+91 98765 43210',
        hours: '8:00 AM - 10:00 PM',
        isOpen: true,
        products: ['पैड', 'टैम्पोन', 'कप'],
        hasFreebies: false,
        isLowCost: true
      },
      {
        id: 2,
        name: 'सखी महिला सहायता एनजीओ',
        type: 'एनजीओ',
        distance: '1.2 किमी',
        rating: 4.8,
        address: 'कम्युनिटी सेंटर, ब्लॉक ए',
        phone: '+91 98765 43211',
        hours: '9:00 AM - 6:00 PM',
        isOpen: true,
        products: ['मुफ्त पैड', 'शिक्षा सामग्री'],
        hasFreebies: true,
        isLowCost: false
      },
      {
        id: 3,
        name: 'कैंपस हेल्थ डिस्पेंसर',
        type: 'डिस्पेंसर',
        distance: '2.0 किमी',
        rating: 4.2,
        address: 'यूनिवर्सिटी कैंपस, गर्ल्स हॉस्टल',
        phone: 'N/A',
        hours: '24/7',
        isOpen: true,
        products: ['पैड', 'टैम्पोन'],
        hasFreebies: false,
        isLowCost: true
      }
    ]
  },
  bn: {
    title: 'আপনার কাছাকাছি পণ্য খুঁজুন',
    subtitle: 'আপনার এলাকায় ফার্মেসি, এনজিও এবং স্বাস্থ্যবিধি পণ্য বিতরণকারী খুঁজুন',
    searchLocation: 'আপনার অবস্থান লিখুন',
    searchPlaceholder: 'আপনার এলাকা, শহর বা পিনকোড অনুসন্ধান করুন',
    filters: {
      all: 'সব',
      pharmacy: 'ফার্মেসি',
      ngo: 'এনজিও',
      dispenser: 'ডিসপেনসার',
      free: 'বিনামূল্যে পণ্য',
      lowCost: 'কম খরচে'
    },
    directions: 'দিকনির্দেশনা পান',
    call: 'কল করুন',
    hours: 'সময়',
    rating: 'রেটিং',
    distance: 'দূরত্ব',
    products: 'উপলব্ধ পণ্য',
    freeAvailable: 'বিনামূল্যে পণ্য উপলব্ধ',
    lowCostAvailable: 'কম খরচে পণ্য উপলব্ধ',
    openNow: 'এখন খোলা',
    closedNow: 'বন্ধ',
    places: [
      {
        id: 1,
        name: 'মেডপ্লাস ফার্মেসি',
        type: 'ফার্মেসি',
        distance: '০.৫ কিমি',
        rating: 4.5,
        address: 'মেইন মার্কেট রোড, বাস স্ট্যান্ডের কাছে',
        phone: '+৮৮ ৯৮৭৬৫ ৪৩২১০',
        hours: '৮:০০ AM - ১০:০০ PM',
        isOpen: true,
        products: ['প্যাড', 'ট্যাম্পন', 'কাপ'],
        hasFreebies: false,
        isLowCost: true
      },
      {
        id: 2,
        name: 'সখী মহিলা সহায়তা এনজিও',
        type: 'এনজিও',
        distance: '১.২ কিমি',
        rating: 4.8,
        address: 'কমিউনিটি সেন্টার, ব্লক এ',
        phone: '+৮৮ ৯৮৭৬৫ ৪৩২১১',
        hours: '৯:০০ AM - ৬:০০ PM',
        isOpen: true,
        products: ['বিনামূল্যে প্যাড', 'শিক্ষামূলক উপকরণ'],
        hasFreebies: true,
        isLowCost: false
      },
      {
        id: 3,
        name: 'ক্যাম্পাস হেলথ ডিসপেনসার',
        type: 'ডিসপেনসার',
        distance: '২.০ কিমি',
        rating: 4.2,
        address: 'ইউনিভার্সিটি ক্যাম্পাস, গার্লস হোস্টেল',
        phone: 'N/A',
        hours: '২৪/৭',
        isOpen: true,
        products: ['প্যাড', 'ট্যাম্পন'],
        hasFreebies: false,
        isLowCost: true
      }
    ]
  },
  ta: {
    title: 'உங்கள் அருகில் தயாரிப்புகளைக் கண்டறியுங்கள்',
    subtitle: 'உங்கள் பகுதியில் மருந்தகங்கள், NGOக்கள் மற்றும் சுகாதார தயாரிப்பு விநியோகிகளைக் கண்டறியுங்கள்',
    searchLocation: 'உங்கள் இருப்பிடத்தை உள்ளிடவும்',
    searchPlaceholder: 'உங்கள் பகுதி, நகரம் அல்லது பின்கோடைத் தேடுங்கள்',
    filters: {
      all: 'அனைத்து',
      pharmacy: 'மருந்தகங்கள்',
      ngo: 'NGOகள்',
      dispenser: 'விநியோகிகள்',
      free: 'இலவச தயாரிப்புகள்',
      lowCost: 'குறைந்த விலை'
    },
    directions: 'திசைகளைப் பெறுங்கள்',
    call: 'அழைக்கவும்',
    hours: 'மணிநேரம்',
    rating: 'மதிப்பீடு',
    distance: 'தூரம்',
    products: 'கிடைக்கும் தயாரிப்புகள்',
    freeAvailable: 'இலவச தயாரிப்புகள் கிடைக்கின்றன',
    lowCostAvailable: 'குறைந்த விலை தயாரிப்புகள் கிடைக்கின்றன',
    openNow: 'இப்போது திறந்துள்ளது',
    closedNow: 'மூடப்பட்டுள்ளது',
    places: [
      {
        id: 1,
        name: 'மெட்பிளஸ் மருந்தகம்',
        type: 'மருந்தகம்',
        distance: '0.5 கிமீ',
        rating: 4.5,
        address: 'முக்கிய சந்தை சாலை, பஸ் நிலையம் அருகில்',
        phone: '+91 98765 43210',
        hours: '8:00 AM - 10:00 PM',
        isOpen: true,
        products: ['பேட்கள்', 'டாம்பன்கள்', 'கப்கள்'],
        hasFreebies: false,
        isLowCost: true
      },
      {
        id: 2,
        name: 'சகி மகளிர் உதவி NGO',
        type: 'NGO',
        distance: '1.2 கிமீ',
        rating: 4.8,
        address: 'சமுதாய மையம், பிளாக் ஏ',
        phone: '+91 98765 43211',
        hours: '9:00 AM - 6:00 PM',
        isOpen: true,
        products: ['இலவச பேட்கள்', 'கல்வி பொருட்கள்'],
        hasFreebies: true,
        isLowCost: false
      },
      {
        id: 3,
        name: 'வளாக சுகாதார விநியோகி',
        type: 'விநியோகி',
        distance: '2.0 கிமீ',
        rating: 4.2,
        address: 'பல்கலைக்கழக வளாகம், பெண்கள் விடுதி',
        phone: 'N/A',
        hours: '24/7',
        isOpen: true,
        products: ['பேட்கள்', 'டாம்பன்கள்'],
        hasFreebies: false,
        isLowCost: true
      }
    ]
  }
};

export default function ProductFinder({ language }: ProductFinderProps) {
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPlaces = t.places.filter(place => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'pharmacy' && place.type.toLowerCase().includes('pharmacy')) ||
      (activeFilter === 'ngo' && place.type.toLowerCase().includes('ngo')) ||
      (activeFilter === 'dispenser' && place.type.toLowerCase().includes('dispenser')) ||
      (activeFilter === 'free' && place.hasFreebies) ||
      (activeFilter === 'lowCost' && place.isLowCost);
    
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-600 shadow-md'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-8 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-700">Interactive Map View</p>
              <p className="text-gray-600">Google Maps integration would go here</p>
            </div>
          </div>
        </div>

        {/* Places List */}
        <div className="space-y-6">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-semibold text-gray-900">{place.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                        {place.type}
                      </span>
                      {place.hasFreebies && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          Free
                        </span>
                      )}
                      {place.isLowCost && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                          Low Cost
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{place.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Navigation className="w-4 h-4 mr-2" />
                        <span>{place.distance} away</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{place.hours}</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          place.isOpen 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {place.isOpen ? t.openNow : t.closedNow}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 mr-2 fill-current text-yellow-400" />
                        <span>{place.rating} {t.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">{t.products}:</p>
                      <div className="flex flex-wrap gap-2">
                        {place.products.map((product, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(place.hasFreebies || place.isLowCost) && (
                      <div className="mb-4">
                        {place.hasFreebies && (
                          <p className="text-blue-600 font-medium text-sm mb-1">
                            ✨ {t.freeAvailable}
                          </p>
                        )}
                        {place.isLowCost && (
                          <p className="text-orange-600 font-medium text-sm">
                            💰 {t.lowCostAvailable}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center">
                      <Navigation className="w-4 h-4 mr-2" />
                      {t.directions}
                    </button>
                    {place.phone !== 'N/A' && (
                      <button className="border border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {t.call}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-2">No places found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
}