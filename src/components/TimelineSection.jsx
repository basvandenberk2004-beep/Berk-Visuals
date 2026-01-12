import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { ChevronDown, ChevronUp } from "lucide-react";

export const TimelineSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const timelineData = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            De start van Berk Visuals. Begonnen met het filmen van lokale evenementen 
            en kleine bedrijven in de regio. Hier leerde ik de basis van videoproductie 
            en het vertellen van verhalen door middel van video.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=300&fit=crop"
              alt="Eerste projecten"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=300&fit=crop"
              alt="Videoproductie setup"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Uitbreiding van diensten naar social media content en bedrijfsfilms. 
            Investering in professionele apparatuur en het opbouwen van een portfolio 
            met diverse MKB-klanten.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop"
              alt="Social media content"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop"
              alt="Bedrijfsfilm opname"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Focus op storytelling en branding voor ondernemers. Ontwikkeling van 
            complete video-strategieën voor klanten, van concept tot distributie. 
            Samenwerking met verschillende marketing bureaus.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=500&h=300&fit=crop"
              alt="Storytelling project"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop"
              alt="Team samenwerking"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Specialisatie in het MKB-segment met focus op authentieke en persoonlijke 
            verhalen. Introductie van drone-opnames en geavanceerde post-productie. 
            Meer dan 50 tevreden klanten geholpen met hun video content.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop"
              alt="Drone opname"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
              alt="MKB klanten"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Lancering van nieuwe diensten zoals video podcasts en live streaming. 
            Uitbreiding van het netwerk en partnerships met diverse ondernemers. 
            Berk Visuals staat nu bekend als betrouwbare partner voor videoproductie 
            in het MKB.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&h=300&fit=crop"
              alt="Podcast opname"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop"
              alt="Succes"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Mijn Reis
        </h2>
        <p className="text-neutral-600 text-lg mb-6 max-w-2xl mx-auto">
          Van start tot nu - ontdek hoe Berk Visuals is gegroeid tot een 
          betrouwbare partner voor videoproductie in het MKB.
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg 
                     hover:shadow-xl"
        >
          {isOpen ? "Sluit tijdlijn" : "Bekijk mijn reis"}
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Timeline data={timelineData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
