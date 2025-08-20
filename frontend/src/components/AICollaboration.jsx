import React from "react";
import { Button } from "./ui/button";

const AICollaboration = () => {
  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
                AI Collaboration
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI Chat app for seamless{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  collaboration
                </span>
              </h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Try It Now
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main collaboration image */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1717501218385-55bc3a95be94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHB1cnBsZXwxNzU1NzIzNjU4fDA&ixlib=rb-4.1.0&q=85"
                alt="AI Collaboration Interface"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Small logo overlay */}
              <div className="absolute top-12 left-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl animate-float opacity-80 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-xl opacity-90"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl animate-float-delayed opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICollaboration;