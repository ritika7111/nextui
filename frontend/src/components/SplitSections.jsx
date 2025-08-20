import React, { useState } from "react";
import { Button } from "./ui/button";
import { splitSections } from "../mockData";

const SplitSections = () => {
  const [activeSection, setActiveSection] = useState(splitSections[0]);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 text-sm uppercase tracking-wider mb-2">
                {activeSection.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {activeSection.heading}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {activeSection.description}
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Try It Now
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <img
                src={activeSection.image}
                alt={activeSection.heading}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl animate-float-delayed opacity-60"></div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="grid md:grid-cols-4 gap-4">
          {splitSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section)}
              className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                activeSection.id === section.id
                  ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500'
                  : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`text-2xl font-bold ${
                  activeSection.id === section.id ? 'text-purple-400' : 'text-slate-500'
                }`}>
                  {section.id}
                </span>
                <div>
                  <h4 className={`font-semibold mb-1 ${
                    activeSection.id === section.id ? 'text-white' : 'text-slate-300'
                  }`}>
                    {section.title}
                  </h4>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitSections;