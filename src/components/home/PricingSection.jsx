import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp, Crown, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const kickstartPackages = [
  {
    name: "Start",
    videos: 5,
    price: 475,
    pricePerVideo: 95,
    features: [
      "5 short-form video's",
      "Inclusief scripting",
      "Professionele edit",
      "Ondertiteling",
      "Trending audio"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "Groei",
    videos: 10,
    price: 900,
    pricePerVideo: 90,
    features: [
      "10 short-form video's",
      "Inclusief scripting",
      "Professionele edit",
      "Ondertiteling",
      "Trending audio",
      "Contentplanning"
    ],
    icon: TrendingUp,
    popular: true
  },
  {
    name: "Pro",
    videos: 15,
    price: 1275,
    pricePerVideo: 85,
    features: [
      "15 short-form video's",
      "Inclusief scripting",
      "Professionele edit",
      "Ondertiteling",
      "Trending audio",
      "Contentplanning",
      "Plaatsing op kanalen"
    ],
    icon: Crown,
    popular: false
  }
];

const subscriptions = [
  {
    name: "Zichtbaar",
    frequency: "1 video per week",
    price: 450,
    pricePerVideo: "~€112",
    videos: "±4 video's",
    filmSchedule: "Filmen 1x per 2 maanden",
    features: [
      "4 video's per maand",
      "Scripting & editing",
      "Ondertiteling",
      "Maandelijkse rapportage"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "Autoriteit",
    frequency: "2 video's per week",
    price: 800,
    pricePerVideo: "~€89",
    videos: "±8-9 video's",
    filmSchedule: "Maandelijks filmen",
    features: [
      "8-9 video's per maand",
      "Scripting & editing",
      "Ondertiteling",
      "Strategiegesprek",
      "Plaatsing op kanalen",
      "Prioriteit support"
    ],
    icon: TrendingUp,
    popular: true
  },
  {
    name: "Dominantie",
    frequency: "3 video's per week",
    price: 1150,
    pricePerVideo: "~€88",
    videos: "±13 video's",
    filmSchedule: "Maximale impact",
    features: [
      "13 video's per maand",
      "Scripting & editing",
      "Ondertiteling",
      "Wekelijks strategiegesprek",
      "Volledige kanaal management",
      "24/7 support",
      "Performance optimalisatie"
    ],
    icon: Crown,
    popular: false
  }
];

export default function PricingSection() {
  const [pricingType, setPricingType] = useState("subscriptions");

  const packages = pricingType === "kickstart" ? kickstartPackages : subscriptions;

  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-gray-50" aria-label="Tarieven en pakketten voor videoproductie">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Transparante prijzen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Investeer in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              zichtbaarheid
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Kies voor een eenmalig project of ga voor maximale impact met een maandelijks abonnement.
          </p>

          <Tabs value={pricingType} onValueChange={setPricingType} className="inline-flex w-full sm:w-auto">
            <TabsList className="bg-white border border-gray-200 p-1 w-full sm:w-auto grid grid-cols-2 sm:flex">
              <TabsTrigger 
                value="kickstart"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-3 sm:px-6 py-2 text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Kickstart Projecten</span>
                <span className="sm:hidden">Kickstart</span>
              </TabsTrigger>
              <TabsTrigger 
                value="subscriptions"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-3 sm:px-6 py-2 text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2"
              >
                <span className="hidden sm:inline">Abonnementen</span>
                <span className="sm:hidden">Abonnement</span>
                <span className="ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs bg-cyan-500 text-white rounded-full whitespace-nowrap">
                  <span className="hidden sm:inline">Aanbevolen</span>
                  <span className="sm:hidden">✓</span>
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={`${pricingType}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${pkg.popular ? 'sm:col-span-2 md:col-span-1 md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-semibold z-10 shadow-lg shadow-blue-500/30">
                  Meest gekozen
                </div>
              )}

              <div className={`relative h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-white border-blue-300 shadow-2xl shadow-blue-500/20' 
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                  pkg.popular ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <pkg.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${pkg.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                
                {pricingType === "subscriptions" && (
                  <p className="text-blue-600 text-sm font-medium mb-4">{pkg.frequency}</p>
                )}

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">€{pkg.price}</span>
                    <span className="text-gray-500 text-sm sm:text-base">
                      {pricingType === "kickstart" ? "eenmalig" : "per maand"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {pricingType === "kickstart" 
                      ? `€${pkg.pricePerVideo} per video`
                      : `${pkg.pricePerVideo} per video`
                    }
                  </p>
                </div>

                {pricingType === "subscriptions" && (
                  <div className="p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-200 mb-4 sm:mb-6">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">{pkg.videos}</span> per maand
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{pkg.filmSchedule}</p>
                  </div>
                )}

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-4 sm:py-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    pkg.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="hidden sm:inline">Start met {pkg.name}</span>
                  <span className="sm:hidden">Kies {pkg.name}</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-12 px-4"
        >
          Alle prijzen zijn exclusief BTW. Maatwerk mogelijk op aanvraag.
        </motion.p>
      </div>
    </section>
  );
}