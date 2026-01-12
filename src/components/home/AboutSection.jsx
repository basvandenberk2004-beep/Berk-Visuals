import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Target, Video, Award, MapPin, GraduationCap, X } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const stats = [
  { value: "1M+", label: "Weergaven", icon: Video },
  { value: "100+", label: "Video's gemaakt", icon: Award },
  { value: "10+", label: "Tevreden partners", icon: Target }
];

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

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="about" className="relative py-24 lg:py-32 px-4 bg-white overflow-hidden" aria-label="Over Berk Visuals en Bas van den Berk">
        <div className="max-w-6xl mx-auto">
          {/* Bestaande About Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/m2BnPKBw/DSC1634.jpg" 
                    alt="Bas van den Berk - Video producer en oprichter van Berk Visuals Heusden, specialist in short-form video content voor MKB-bedrijven"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 shadow-lg border border-gray-200">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-900">Haarsteeg</span>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm flex items-center gap-2 shadow-lg border border-gray-200">
                    <GraduationCap className="w-4 h-4 text-cyan-600" />
                    <span className="text-gray-900">Commerciële Economie</span>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-1/4 p-4 bg-white rounded-xl border border-gray-200 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Video className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-xs text-gray-500">Video's gemaakt</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Over Berk Visuals</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Gedreven door{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  passie
                </span>
                , onderbouwd met{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  marketingkennis
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Mijn naam is <span className="text-gray-900 font-semibold">Bas van den Berk</span>, 
                  21 jaar en student Commerciële Economie / Marketing. Naast mijn studie ben ik de trotse eigenaar van Berk Visuals.
                </p>
                <p>
                  Wat begon als een hobby, groeide al snel uit tot een serieuze passie. 
                  Ik merkte dat ik ondernemers kon helpen hun verhaal écht zichtbaar te maken.
                </p>
                <p>
                  Inmiddels heb ik voor mijn klanten al meer dan 1 miljoen organische weergaven gegenereerd. 
                  Mijn doel? MKB-bedrijven in de regio helpen om online te knallen met content die niet alleen mooi is, maar ook <span className="text-gray-900 font-semibold">converteert</span>.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tijdlijn Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 
                           text-white rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 
                           font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Bekijk mijn reis
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Mijn Reis</h3>
                  <p className="text-sm text-gray-500 mt-1">Van start tot nu - de evolutie van Berk Visuals</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Sluit modal"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <Timeline data={timelineData} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
