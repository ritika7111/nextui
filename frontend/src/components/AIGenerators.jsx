import React, { useState } from "react";
import { Button } from "./ui/button";
import { aiGenerators } from "../mockData";
import { Play, Video, Music, Camera, FileText, Code } from "lucide-react";

const AIGenerators = () => {
  const [activeTab, setActiveTab] = useState("video");

  const getIcon = (type) => {
    const iconMap = {
      video: Video,
      audio: Music,
      photo: Camera,
      text: FileText,
      code: Code
    };
    const IconComponent = iconMap[type];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  const activeGenerator = aiGenerators.find(gen => gen.id === activeTab);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-900 to-blue-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            RAINBOW UNLOCKS THE POTENTIAL ai
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Generative AI made for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              creators.
            </span>
          </h2>
        </div>

        {/* Generator Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {aiGenerators.map((generator) => (
            <button
              key={generator.id}
              onClick={() => setActiveTab(generator.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeTab === generator.id
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white"
              }`}
            >
              {getIcon(generator.id)}
              <span className="font-medium">{generator.name}</span>
            </button>
          ))}
        </div>

        {/* Active Generator Content */}
        {activeGenerator && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {activeGenerator.description}
              </h3>
              
              <ul className="space-y-4">
                {activeGenerator.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Start Exploring Now →
              </Button>
            </div>

            {/* Generator Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
                <div className="bg-slate-700 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <img
                    src={activeGenerator.mockImage}
                    alt={`${activeGenerator.name} Interface`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                {/* Mock interface elements */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      {getIcon(activeGenerator.id)}
                    </div>
                    <div className="flex-1 h-3 bg-slate-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Generate
                    </Button>
                    <div className="flex-1 h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-float-delayed opacity-60"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIGenerators;