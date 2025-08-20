import React from "react";
import { brandLogos } from "../mockData";

const BrandLogos = () => {
  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">
            truest 800,000+ HIGHLY PRODUCTIVE Company
          </p>
        </div>
        
        {/* Scrolling logos */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-32 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brandLogos.map((brand, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-32 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;