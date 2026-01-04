import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Video, Award, MapPin, GraduationCap } from 'lucide-react';

const stats = [
  { value: "1M+", label: "Weergaven", icon: Video },
  { value: "100+", label: "Video's gemaakt", icon: Award },
  { value: "10+", label: "Tevreden partners", icon: Target }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-4 bg-white overflow-hidden" aria-label="Over Berk Visuals en Bas van den Berk">
      <div className="max-w-6xl mx-auto">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}