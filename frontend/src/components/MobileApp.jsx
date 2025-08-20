import React from "react";
import { Apple, Play } from "lucide-react";

const MobileApp = () => {
  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
                Get Started with Rainbow
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Experience Products in AI
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Based on the conversation with the AI chatbot, you will receive personalized recommendations.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative flex justify-center">
            {/* Main phone mockup */}
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-6 border-8 border-slate-700 shadow-2xl">
                {/* Phone screen */}
                <div className="w-full h-full bg-slate-700 rounded-[2rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-8 bg-slate-800 flex items-center justify-between px-4">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-2 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="text-white text-xs">9:41</div>
                    <div className="text-white text-xs">100%</div>
                  </div>
                  
                  {/* App interface */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg"></div>
                      <span className="text-white font-semibold">AiWave</span>
                    </div>
                    
                    {/* Chat interface */}
                    <img
                      src="https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NTcyMzY2NHww&ixlib=rb-4.1.0&q=85"
                      alt="Mobile App Interface"
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                    
                    {/* Input area */}
                    <div className="bg-slate-600 rounded-full px-4 py-3 flex items-center gap-3">
                      <div className="flex-1 text-slate-400 text-sm">Type a message...</div>
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl animate-float opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl animate-float-delayed opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;