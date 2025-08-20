import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../mockData";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            Assisting individuals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The opinions of the community
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <button
            onClick={nextSlide}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative group transition-all duration-500 ${
                index === currentSlide ? 'scale-105' : 'scale-100 opacity-70'
              }`}
            >
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 shadow-xl"></div>
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Company logo */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="w-16 h-8 bg-slate-600 rounded flex items-center justify-center">
                    <span className="text-xs text-slate-400">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
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

        {/* Review Stats */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Based on 20,000+ reviews on</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="h-8 bg-slate-600 rounded px-6 flex items-center">
              <span className="text-slate-400 text-sm">Trustpilot</span>
            </div>
            <div className="h-8 bg-slate-600 rounded px-6 flex items-center">
              <span className="text-slate-400 text-sm">G2</span>
            </div>
            <div className="h-8 bg-slate-600 rounded px-6 flex items-center">
              <span className="text-slate-400 text-sm">Capterra</span>
            </div>
            <div className="h-8 bg-slate-600 rounded px-6 flex items-center">
              <span className="text-slate-400 text-sm">Product Hunt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;