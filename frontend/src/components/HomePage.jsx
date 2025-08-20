import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BrandLogos from "./BrandLogos";
import AIGenerators from "./AIGenerators";
import ServicesCarousel from "./ServicesCarousel";
import SplitSections from "./SplitSections";
import AICollaboration from "./AICollaboration";
import Community from "./Community";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Limited Time Offer Banner */}
      <div className="bg-purple-600 text-white py-2 px-4 text-center relative">
        <div className="flex items-center justify-center gap-4">
          <span className="bg-purple-700 px-3 py-1 rounded-full text-xs font-medium">
            Limited Time Offer
          </span>
          <span className="text-sm">Intro price. Get AiWave for Big Sale -95% off.</span>
          <button className="text-white hover:underline">Purchase Now →</button>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white">
          ✕
        </button>
      </div>

      <Header />
      <HeroSection />
      <BrandLogos />
      <AIGenerators />
      <ServicesCarousel />
      <SplitSections />
      <AICollaboration />
      <Community />
      <Pricing />
      <Testimonials />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default HomePage;