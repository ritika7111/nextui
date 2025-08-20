import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prompt submitted:", prompt);
    // Mock functionality - would integrate with AI service later
    alert(`AI Processing: "${prompt}"`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-2xl"></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 left-20 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl opacity-80 rotate-12"></div>
        </div>
        <div className="absolute top-24 right-32 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-60 -rotate-12"></div>
        </div>
        <div className="absolute bottom-32 left-32 animate-float">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl opacity-70 rotate-45"></div>
        </div>
        <div className="absolute bottom-24 right-24 animate-float-delayed">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl opacity-50 -rotate-24"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Examine the Potential of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Chatting
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Writing
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Hack
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Unleash Brainwave's AI potential. Use the open AI conversation app Rainbow theme
          </p>

          {/* AI Input Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter a prompt, for example: a fundraising deck to a mobile finance app called Intuitive"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 h-16 text-lg rounded-xl"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Start with AI
                </Button>
              </div>
            </div>
          </form>

          {/* Hero Image - Main dashboard mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1720962158858-5fb16991d2b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NTcyMzY2NHww&ixlib=rb-4.1.0&q=85"
                alt="AI Interface Dashboard"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Floating elements around the main image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl animate-float opacity-80"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl animate-float-delayed opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl animate-float opacity-70"></div>
            <div className="absolute -bottom-4 -right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl animate-float-delayed opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;