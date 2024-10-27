import { useState, useEffect } from 'react';
import { ExternalLink, Star, Zap, TrendingUp } from 'lucide-react';

const AdsBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  // Sample ad data
  const ads = [
    {
      title: "Premium Features",
      description: "Unlock advanced logo design tools",
      icon: <Star className="text-yellow-400" size={24} />,
      action: "Upgrade Now",
      type: "premium"
    },
    {
      title: "Pro Templates",
      description: "Access 1000+ professional templates",
      icon: <Zap className="text-purple-400" size={24} />,
      action: "View Templates",
      type: "templates"
    },
    {
      title: "Trending Designs",
      description: "Get inspired by popular logos",
      icon: <TrendingUp className="text-green-400" size={24} />,
      action: "Explore",
      type: "trending"
    }
  ];

  // Rotate ads every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full p-4 space-y-4 bg-gradient-to-b from-violet-600 to-gray-300">
      {/* Featured Ad */}
      <div className="bg-white rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-blue-600">Featured</h3>
          {ads[currentAd].icon}
        </div>
        <h4 className="font-semibold text-gray-800 mb-1">{ads[currentAd].title}</h4>
        <p className="text-sm text-gray-600 mb-3">{ads[currentAd].description}</p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
          {ads[currentAd].action}
          <ExternalLink size={16} />
        </button>
      </div>

      {/* Static Promotional Cards */}
      <div className="bg-green-500 rounded-lg p-4 text-white">
        <h3 className="font-bold mb-2">🚀 Quick Tip</h3>
        <p className="text-sm">Double click any element to edit its properties instantly!</p>
      </div>

      <div className="bg-green-800 bg-opacity-50 rounded-lg p-4 text-white">
        <h3 className="font-bold mb-2">💡 Did You Know?</h3>
        <p className="text-sm">Export your logos in multiple formats with one click</p>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-auto bg-white rounded-lg p-4">
        <h3 className="font-bold text-gray-800 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-3">Get weekly design tips and resources</p>
        <input 
          type="email" 
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm"
        />
        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default AdsBanner;