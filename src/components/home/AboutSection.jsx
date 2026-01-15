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
    title: "2016",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">De 'Enzo Knol' Droom</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal">
          Het begon op mijn slaapkamer: YouTube video's maken met één doel: de nieuwe Enzo Knol worden. 
          De droom veranderde, maar de liefde voor camera's en editten was geboren.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">Viraal met 'Ut_vierde'</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal mb-4">
          Het kanaal voor ons vriendenteam liep uit de hand: <strong>3 miljoen weergaven</strong> en een sponsorcontract met EasyToys. Hier leerde ik wat écht scoort op social media.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">150.000 views per maand</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal mb-4">
          Als bestuurslid communicatie bij de voetbalvereniging paste ik mijn kennis toe. Resultaat: maandelijkse viral cijfers. 
          Tegelijkertijd begon ik als bijbaan bedrijven te helpen met content.
        </p>
      </div>
    ),
  },
  {
    title: "Juni 2025",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">De Eerste Officiële Opdracht 🤝</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal mb-4">
          De sprong in het diepe! Mijn eerste full-time opdracht als zelfstandige. Geen hobby meer, maar pure focus op resultaat voor de klant.
        </p>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-4">
           <img 
             src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop" 
             alt="Eerste shoot op locatie" 
             className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
           />
        </div>
      </div>
    ),
  },
  {
    title: "Nov 2025",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">Mijlpaal: 10+ Klanten 🎉</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal mb-4">
          Wat begon als een gok, werd een bewezen concept. In nog geen half jaar tijd mocht ik alweer de 10e ondernemer verwelkomen. Van sportschool tot industrie: de 'Berk Visuals' aanpak werkt.
        </p>
        <div className="grid grid-cols-2 gap-2 mb-4">
           <img 
             src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop" 
             alt="Resultaat bespreking" 
             className="rounded-lg object-cover h-24 w-full shadow-sm"
           />
           <img 
             src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop" 
             alt="Content creatie in actie" 
             className="rounded-lg object-cover h-24 w-full shadow-sm"
           />
        </div>
      </div>
    ),
  },
  {
    title: "Jan 2026",
    content: (
      <div>
        <h4 className="text-lg font-bold mb-2 text-gray-900">Terug naar de Club ❤️</h4>
        <p className="text-neutral-700 text-sm md:text-base font-normal mb-4">
          Cirkel rond: mijn eerste professionele opdracht voor een vereniging. Waar het als vrijwilliger begon, help ik clubs nu professioneel om leden en vrijwilligers te werven met video.
        </p>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
           <img 
             src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop" 
             alt="Videoproductie voor vereniging" 
             className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
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
