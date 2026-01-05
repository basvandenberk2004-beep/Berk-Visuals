import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white" aria-label="Hero sectie - Professionele videoproductie voor MKB">
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">Videoproductie voor MKB</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 text-gray-900">
              Short-form content is in 2026{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  geen optie meer
                </span>
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              , maar noodzaak.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Ik help bedrijven in regio Heusden zichtbaar te worden. 
              Ik vertaal jouw verhaal naar professionele Reels, TikToks en Shorts 
              die <span className="text-gray-900 font-semibold">écht bekeken worden</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-[1.02] w-full sm:w-auto"
                onClick={() => {
                  trackEvent('Conversion', 'click_intake_request', 'Hero');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Plan een gratis intake
                <ChevronRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all w-full sm:w-auto"
                onClick={() => {
                  trackEvent('Interest', 'click_view_portfolio', 'Hero');
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Bekijk mijn werk
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img 
                    src="https://i.postimg.cc/sgFvPPHL/1.png" 
                    alt="SPIE Nederland - Tevreden klant videoproductie Berk Visuals Heusden" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md object-cover"
                    loading="eager"
                  />
                  <img 
                    src="https://i.postimg.cc/x1rcGGpB/3.png" 
                    alt="Fit By Movement - Video marketing klant Berk Visuals" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md object-cover"
                    loading="eager"
                  />
                  <img 
                    src="https://i.postimg.cc/L8dnkkQ7/2.png" 
                    alt="Spotless Solutions - MKB klant short-form video content" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md object-cover"
                    loading="eager"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">10+ partners</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-gray-300" />
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">1M+</span> weergaven
              </div>
              <div className="h-3 sm:h-4 w-px bg-gray-300" />
              <div className="text-xs sm:text-sm text-gray-600">
                <span className="text-gray-900 font-semibold">100+</span> video's
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual - Phone mockup - AANGEPAST */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-56 sm:w-64 md:w-72 aspect-[9/19] bg-gradient-to-b from-gray-200 to-gray-300 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-gray-900 rounded-full z-20" />
                
                <div className="w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* NIEUWE CODE: Video container with proper aspect ratio */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
                    {/* Video with correct fit - showing full width */}
                    <iframe
                      src="https://www.youtube.com/embed/RWpABvPCnmM?rel=0&modestbranding=1&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=RWpABvPCnmM&disablekb=1&fs=0&iv_load_policy=3"
                      title="Berk Visuals - Verticale video content voorbeeld"
                      className="w-full h-full pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ border: 'none' }}
                      loading="eager"
                      tabIndex="-1"
                    />
                  </div>
                  {/* EINDE NIEUWE CODE */}

                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 sm:-top-8 -left-4 sm:-left-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg"
              >
                <span className="text-xs sm:text-sm font-semibold text-white">📈 +340% bereik</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-lg border border-gray-200 shadow-lg"
              >
                <span className="text-xs sm:text-sm text-gray-900">🎬 Professionele edits</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
