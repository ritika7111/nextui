import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Globe, Zap } from "lucide-react";
import { services } from "../mockData";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getIcon = (id) => {
    const iconMap = {
      1: MessageCircle,
      2: Globe,
      3: Zap
    };
    const IconComponent = iconMap[id];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            Assisting individuals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Chat Smarter, Not{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Harder with
            </span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="border-slate-600 text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button
            variant="outline"
            size="sm" 
            onClick={nextSlide}
            className="border-slate-600 text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group transition-all duration-500 ${
                index === currentSlide ? 'scale-105' : 'scale-100 opacity-70'
              }`}
            >
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 shadow-xl"></div>
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white">
                    {getIcon(service.id)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Explore More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-purple-500 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default ServicesCarousel;