import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Plus, User, ThumbsUp } from 'lucide-react';

interface CommunityStoriesProps {
  language: 'en' | 'hi' | 'bn' | 'ta';
}

const translations = {
  en: {
    title: 'Community Stories',
    subtitle: 'Real stories from women around the world - you are not alone',
    shareStory: 'Share Your Story',
    anonymous: 'Share Anonymously',
    readMore: 'Read More',
    showLess: 'Show Less',
    likes: 'likes',
    comments: 'comments',
    share: 'Share',
    writeStory: 'Write your story here...',
    submitStory: 'Submit Story',
    inspirational: 'Inspirational',
    educational: 'Educational',
    support: 'Support',
    allStories: 'All Stories',
    storyPlaceholder: 'Your story can inspire and help other women. Share your experience, challenges, or learnings about menstrual health...',
    thankYou: 'Thank you for sharing your story! It will be reviewed and published soon.',
    stories: [
      {
        id: 1,
        author: 'Anonymous from India',
        category: 'Inspirational',
        preview: 'Breaking the silence in my small village about periods changed everything...',
        fullText: 'Breaking the silence in my small village about periods changed everything. I started by talking to my mother, then my sisters, and eventually the women in my community. Now we have a support group where we share knowledge and help each other. Education is the key to breaking taboos.',
        likes: 245,
        comments: 32,
        timeAgo: '2 days ago'
      },
      {
        id: 2,
        author: 'Anonymous from Bangladesh',
        category: 'Educational',
        preview: 'Learning about menstrual cups changed my life completely...',
        fullText: 'Learning about menstrual cups changed my life completely. I was spending so much money on pads every month, and I was worried about the environmental impact. A friend told me about cups, and though I was scared at first, it has been the best decision. Now I help other girls learn about this option.',
        likes: 189,
        comments: 28,
        timeAgo: '5 days ago'
      },
      {
        id: 3,
        author: 'Anonymous from Nepal',
        category: 'Support',
        preview: 'To every girl who feels ashamed about her period - you are beautiful and normal...',
        fullText: 'To every girl who feels ashamed about her period - you are beautiful and normal. I spent years hiding, making excuses, and feeling embarrassed. It took me 25 years to realize that menstruation is a sign of health and strength. Now I teach my daughter to be proud of her body and its natural processes.',
        likes: 367,
        comments: 45,
        timeAgo: '1 week ago'
      }
    ]
  },
  hi: {
    title: 'सामुदायिक कहानियां',
    subtitle: 'दुनिया भर की महिलाओं की सच्ची कहानियां - आप अकेली नहीं हैं',
    shareStory: 'अपनी कहानी साझा करें',
    anonymous: 'गुमनाम साझा करें',
    readMore: 'और पढ़ें',
    showLess: 'कम दिखाएं',
    likes: 'पसंद',
    comments: 'टिप्पणियां',
    share: 'साझा करें',
    writeStory: 'यहाँ अपनी कहानी लिखें...',
    submitStory: 'कहानी सबमिट करें',
    inspirational: 'प्रेरणादायक',
    educational: 'शिक्षाप्रद',
    support: 'सहारा',
    allStories: 'सभी कहानियां',
    storyPlaceholder: 'आपकी कहानी अन्य महिलाओं को प्रेरणा दे सकती है और उनकी मदद कर सकती है। मासिक धर्म स्वास्थ्य के बारे में अपना अनुभव, चुनौतियां या सीख साझा करें...',
    thankYou: 'आपकी कहानी साझा करने के लिए धन्यवाद! इसकी समीक्षा की जाएगी और जल्द ही प्रकाशित होगी।',
    stories: [
      {
        id: 1,
        author: 'भारत से गुमनाम',
        category: 'प्रेरणादायक',
        preview: 'अपने छोटे गांव में पीरियड्स के बारे में मौनता तोड़ने से सब कुछ बदल गया...',
        fullText: 'अपने छोटे गांव में पीरियड्स के बारे में मौनता तोड़ने से सब कुछ बदल गया। मैंने पहले अपनी मां से बात की, फिर अपनी बहनों से, और अंततः अपने समुदाय की महिलाओं से। अब हमारा एक सहायता समूह है जहां हम ज्ञान साझा करते हैं और एक-दूसरे की मदद करते हैं।',
        likes: 245,
        comments: 32,
        timeAgo: '2 दिन पहले'
      },
      {
        id: 2,
        author: 'बांग्लादेश से गुमनाम',
        category: 'शिक्षाप्रद',
        preview: 'मासिक धर्म कप के बारे में जानने से मेरी जिंदगी पूरी तरह बदल गई...',
        fullText: 'मासिक धर्म कप के बारे में जानने से मेरी जिंदगी पूरी तरह बदल गई। मैं हर महीने पैड पर बहुत पैसा खर्च कर रही थी, और पर्यावरण पर प्रभाव की चिंता थी। एक दोस्त ने कप के बारे में बताया, और हालांकि मैं पहले डरी थी, यह सबसे अच्छा निर्णय था।',
        likes: 189,
        comments: 28,
        timeAgo: '5 दिन पहले'
      },
      {
        id: 3,
        author: 'नेपाल से गुमनाम',
        category: 'सहारा',
        preview: 'हर उस लड़की के लिए जो अपने पीरियड से शर्मिंदा महसूस करती है - तुम खूबसूरत और सामान्य हो...',
        fullText: 'हर उस लड़की के लिए जो अपने पीरियड से शर्मिंदा महसूस करती है - तुम खूबसूरत और सामान्य हो। मैंने वर्षों तक छुपते हुए, बहाने बनाते हुए, और शर्मिंदा महसूस करते हुए बिताए। मुझे यह एहसास होने में 25 साल लगे कि मासिक धर्म स्वास्थ्य और शक्ति का संकेत है।',
        likes: 367,
        comments: 45,
        timeAgo: '1 सप्ताह पहले'
      }
    ]
  },
  bn: {
    title: 'কমিউনিটি গল্প',
    subtitle: 'বিশ্বব্যাপী নারীদের সত্যিকারের গল্প - আপনি একা নন',
    shareStory: 'আপনার গল্প শেয়ার করুন',
    anonymous: 'গোপনে শেয়ার করুন',
    readMore: 'আরও পড়ুন',
    showLess: 'কম দেখান',
    likes: 'পছন্দ',
    comments: 'মন্তব্য',
    share: 'শেয়ার',
    writeStory: 'এখানে আপনার গল্প লিখুন...',
    submitStory: 'গল্প জমা দিন',
    inspirational: 'অনুপ্রেরণামূলক',
    educational: 'শিক্ষামূলক',
    support: 'সহায়তা',
    allStories: 'সব গল্প',
    storyPlaceholder: 'আপনার গল্প অন্য নারীদের অনুপ্রাণিত করতে এবং সাহায্য করতে পারে। মাসিক স্বাস্থ্য সম্পর্কে আপনার অভিজ্ঞতা, চ্যালেঞ্জ বা শিক্ষা শেয়ার করুন...',
    thankYou: 'আপনার গল্প শেয়ার করার জন্য ধন্যবাদ! এটি পর্যালোচনা করা হবে এবং শীঘ্রই প্রকাশিত হবে।',
    stories: [
      {
        id: 1,
        author: 'ভারত থেকে গোপনীয়',
        category: 'অনুপ্রেরণামূলক',
        preview: 'আমার ছোট গ্রামে পিরিয়ড নিয়ে নীরবতা ভাঙা সবকিছু পরিবর্তন করেছে...',
        fullText: 'আমার ছোট গ্রামে পিরিয়ড নিয়ে নীরবতা ভাঙা সবকিছু পরিবর্তন করেছে। আমি প্রথমে আমার মায়ের সাথে কথা বলে শুরু করেছিলাম, তারপর আমার বোনেদের সাথে, এবং শেষ পর্যন্ত আমার সম্প্রদায়ের মহিলাদের সাথে। এখন আমাদের একটি সহায়তা গ্রুপ আছে যেখানে আমরা জ্ঞান ভাগাভাগি করি।',
        likes: 245,
        comments: 32,
        timeAgo: '২ দিন আগে'
      },
      {
        id: 2,
        author: 'বাংলাদেশ থেকে গোপনীয়',
        category: 'শিক্ষামূলক',
        preview: 'মাসিক কাপ সম্পর্কে জানা আমার জীবন পুরোপুরি বদলে দিয়েছে...',
        fullText: 'মাসিক কাপ সম্পর্কে জানা আমার জীবন পুরোপুরি বদলে দিয়েছে। আমি প্রতি মাসে প্যাডে অনেক টাকা খরচ করতাম, এবং পরিবেশগত প্রভাব নিয়ে চিন্তিত ছিলাম। একজন বন্ধু আমাকে কাপ সম্পর্কে বলেছিল, এবং যদিও প্রথমে আমি ভয় পেয়েছিলাম, এটি সেরা সিদ্ধান্ত হয়েছে।',
        likes: 189,
        comments: 28,
        timeAgo: '৫ দিন আগে'
      },
      {
        id: 3,
        author: 'নেপাল থেকে গোপনীয়',
        category: 'সহায়তা',
        preview: 'যে মেয়ে তার পিরিয়ড নিয়ে লজ্জিত বোধ করে - তুমি সুন্দর এবং স্বাভাবিক...',
        fullText: 'যে মেয়ে তার পিরিয়ড নিয়ে লজ্জিত বোধ করে - তুমি সুন্দর এবং স্বাভাবিক। আমি বছরের পর বছর লুকিয়ে, অজুহাত তৈরি করে, এবং লজ্জিত বোধ করে কাটিয়েছি। আমার ২৫ বছর লেগেছিল বুঝতে যে মাসিক স্বাস্থ্য এবং শক্তির লক্ষণ।',
        likes: 367,
        comments: 45,
        timeAgo: '১ সপ্তাহ আগে'
      }
    ]
  },
  ta: {
    title: 'சமூக கதைகள்',
    subtitle: 'உலகம் முழுவதும் உள்ள பெண்களின் உண்மையான கதைகள் - நீங்கள் தனியாக இல்லை',
    shareStory: 'உங்கள் கதையை பகிருங்கள்',
    anonymous: 'அடையாளம் தெரியாமல் பகிர',
    readMore: 'மேலும் படிக்கவும்',
    showLess: 'குறைவாக காட்டு',
    likes: 'விருப்பங்கள்',
    comments: 'கருத்துகள்',
    share: 'பகிர்',
    writeStory: 'இங்கே உங்கள் கதையை எழுதுங்கள்...',
    submitStory: 'கதையை சமர்பிக்கவும்',
    inspirational: 'ஊக்கமளிக்கும்',
    educational: 'கல்வியார்ந்த',
    support: 'ஆதரவு',
    allStories: 'அனைத்து கதைகள்',
    storyPlaceholder: 'உங்கள் கதை மற்ற பெண்களை ஊக்கப்படுத்தலாம் மற்றும் உதவலாம். மாதவிடாய் சுகாதாரம் பற்றிய உங்கள் அனுபவம், சவால்கள் அல்லது கற்றல்களை பகிருங்கள்...',
    thankYou: 'உங்கள் கதையை பகிர்ந்தமைக்கு நன்றி! இது மதிப்பாய்வு செய்யப்பட்டு விரைவில் வெளியிடப்படும்.',
    stories: [
      {
        id: 1,
        author: 'இந்தியாவிலிருந்து அடையாளம் தெரியாத',
        category: 'ஊக்கமளிக்கும்',
        preview: 'எனது சிறிய கிராமத்தில் மாதவிடாய் பற்றிய அமைதியை உடைத்தது எல்லாவற்றையும் மாற்றியது...',
        fullText: 'எனது சிறிய கிராமத்தில் மாதவிடாய் பற்றிய அமைதியை உடைத்தது எல்லாவற்றையும் மாற்றியது. நான் முதலில் என் அம்மாவிடம் பேசி, பின்னர் என் சகோதரிகளிடம், இறுதியாக என் சமூகத்தின் பெண்களிடம் பேசினேன். இப்போது எங்களுக்கு ஒரு ஆதரவு குழு உள்ளது, அங்கு நாங்கள் அறிவைப் பகிர்ந்து ஒருவருக்கொருவர் உதவுகிறோம்.',
        likes: 245,
        comments: 32,
        timeAgo: '2 நாட்களுக்கு முன்பு'
      },
      {
        id: 2,
        author: 'பங்களாதேஷிலிருந்து அடையாளம் தெரியாத',
        category: 'கல்வியார்ந்த',
        preview: 'மாதவிடாய் கப்பைப் பற்றி அறிந்தது என் வாழ்க்கையை முழுவதுமாக மாற்றியது...',
        fullText: 'மாதவிடாய் கப்பைப் பற்றி அறிந்தது என் வாழ்க்கையை முழுவதுமாக மாற்றியது. நான் ஒவ்வொரு மாதமும் பேட்களுக்காக நிறைய பணம் செலவழித்துக் கொண்டிருந்தேன், மேலும் சுற்றுச்சூழல் தாக்கம் பற்றி கவலைப்பட்டேன். ஒரு நண்பர் கப்பைப் பற்றி என்னிடம் சொன்னார், முதலில் நான் பயந்திருந்தாலும், இது சிறந்த முடிவாக இருந்தது.',
        likes: 189,
        comments: 28,
        timeAgo: '5 நாட்களுக்கு முன்பு'
      },
      {
        id: 3,
        author: 'நேபாளத்திலிருந்து அடையாளம் தெரியாத',
        category: 'ஆதரவு',
        preview: 'தனது மாதவிடாய் குறித்து வெட்கப்படும் ஒவ்வொரு பெண்ணுக்கும் - நீங்கள் அழகானவர் மற்றும் இயற்கையானவர்...',
        fullText: 'தனது மாதவிடாய் குறித்து வெட்கப்படும் ஒவ்வொரு பெண்ணுக்கும் - நீங்கள் அழகானவர் மற்றும் இயற்கையானவர். நான் பல ஆண்டுகள் மறைத்து, சாக்குப் போக்குகள் சொல்லி, வெட்கப்பட்டு கழித்தேன். மாதவிடாய் என்பது ஆரோக்கியம் மற்றும் வலிமையின் அறிகுறி என்பதை உணர எனக்கு 25 ஆண்டுகள் ஆனது.',
        likes: 367,
        comments: 45,
        timeAgo: '1 வாரம் முன்பு'
      }
    ]
  }
};

export default function CommunityStories({ language }: CommunityStoriesProps) {
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('allStories');
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newStory, setNewStory] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const categories = ['allStories', 'inspirational', 'educational', 'support'];

  const filteredStories = activeCategory === 'allStories' 
    ? t.stories 
    : t.stories.filter(story => story.category.toLowerCase() === activeCategory);

  const handleSubmitStory = () => {
    if (newStory.trim()) {
      setShowThankYou(true);
      setNewStory('');
      setShowSubmitForm(false);
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  return (
    <section className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          
          <button
            onClick={() => setShowSubmitForm(!showSubmitForm)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            {t.shareStory}
          </button>
        </div>

        {/* Thank You Message */}
        {showThankYou && (
          <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-2xl text-center">
            <p className="text-green-800 font-medium">{t.thankYou}</p>
          </div>
        )}

        {/* Submit Story Form */}
        {showSubmitForm && (
          <div className="mb-12 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">{t.shareStory}</h2>
            <div className="max-w-3xl mx-auto">
              <textarea
                value={newStory}
                onChange={(e) => setNewStory(e.target.value)}
                placeholder={t.storyPlaceholder}
                className="w-full h-40 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-1" />
                  {t.anonymous}
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => setShowSubmitForm(false)}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitStory}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full font-medium transition-colors"
                  >
                    {t.submitStory}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600 shadow-md'
              }`}
            >
              {category === 'allStories' ? t.allStories : 
               category === 'inspirational' ? t.inspirational :
               category === 'educational' ? t.educational : t.support}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600 font-medium">{story.author}</span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                        {story.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{story.timeAgo}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-800 leading-relaxed">
                    {expandedStory === story.id ? story.fullText : story.preview}
                  </p>
                  
                  <button
                    onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                    className="text-pink-600 hover:text-pink-700 font-medium mt-2 transition-colors"
                  >
                    {expandedStory === story.id ? t.showLess : t.readMore}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span>{story.likes} {t.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{story.comments} {t.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>{t.share}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Encouragement Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl p-8">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
          <h2 className="text-3xl font-bold mb-4">Your Voice Matters</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every story shared helps break stigma and creates a more supportive world for women everywhere. 
            Together, we can change how society views menstrual health.
          </p>
        </div>
      </div>
    </section>
  );
}