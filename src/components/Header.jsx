import React from 'react';
import { Button } from './ui/button';
import { Download, Sparkles } from 'lucide-react';

function Header({ DownloadLogo }) {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-purple-50 border-b">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              className="w-12 h-12 inline-block drop-shadow-lg transform hover:scale-105 transition-transform duration-200" 
              src="/logo.png" 
              alt="logo"
            />
            <Sparkles 
              className="absolute -top-1 -right-1 text-primary w-4 h-4 animate-pulse" 
              size={16}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 text-3xl font-serif tracking-tight cursor-pointer hover:scale-105 transition-transform duration-200">
              Logofy
            </span>
            <span className="text-xs text-gray-500 -mt-1">Create stunning logos instantly</span>
          </div>
        </div>

        {/* Download Button */}
        <Button 
          onClick={() => DownloadLogo(Date.now())}
          className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 transform hover:-translate-y-0.5 transition-all duration-200 px-6"
        >
          <Download className="mr-2 h-5 w-5" />
          <span className="font-medium">Download Logo</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;