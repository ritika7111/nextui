import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Shield, RotateCcw, Gift } from "lucide-react";
import { pricingPlans, guarantees } from "../mockData";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pricing plans for everyone
          </h2>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-purple-600' : 'bg-slate-600'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:scale-105 ${
                plan.isPopular
                  ? 'bg-gradient-to-br from-purple-600/10 to-blue-600/10 border-purple-500 shadow-xl'
                  : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-400">
                    /Per {isYearly ? 'Year' : 'Month'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-300 mb-4">Features</h4>
                <ul className="space-y-3">
                  {plan.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 5 && (
                    <li className="text-purple-400 text-sm cursor-pointer hover:underline">
                      Show More
                    </li>
                  )}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Get Started
              </Button>

              {/* Badge */}
              <div className="mt-4 text-center">
                <Badge variant="outline" className="text-purple-400 border-purple-400">
                  {plan.badge}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee) => (
            <div key={guarantee.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                  {guarantee.id === 1 && <Shield className="w-8 h-8 text-white" />}
                  {guarantee.id === 2 && <RotateCcw className="w-8 h-8 text-white" />}
                  {guarantee.id === 3 && <Gift className="w-8 h-8 text-white" />}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">
                {guarantee.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;