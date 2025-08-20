import React from "react";
import { Button } from "./ui/button";

const Community = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            Join our AI Experts community
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Meet and learn from 80+ creators & companies who share how they use AI to create better content at lightning speed.
          </h2>

          {/* Community Avatar Group */}
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              <img
                src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg?w=80&h=80"
                alt="Community Member 1"
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5475761/pexels-photo-5475761.jpeg?w=80&h=80"
                alt="Community Member 2" 
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1717501218385-55bc3a95be94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHB1cnBsZXwxNzU1NzIzNjU4fDA&ixlib=rb-4.1.0&q=85&w=80&h=80"
                alt="Community Member 3"
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NTcyMzY2NHww&ixlib=rb-4.1.0&q=85&w=80&h=80"
                alt="Community Member 4"
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1720962158789-9389a4f399da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NTcyMzY2NHww&ixlib=rb-4.1.0&q=85&w=80&h=80"
                alt="Community Member 5"
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-600 flex items-center justify-center text-sm font-semibold text-white">
                +75
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Now Today Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;