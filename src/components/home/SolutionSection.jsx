import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Video, Upload, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Intake & Strategie",
    description: "Ik start met een gratis gesprek. Samen kijken we naar het 'waarom' van jouw bedrijf en ontdek ik jouw unieke kracht. Wat maakt jou anders?",
    color: "blue"
  },
  {
    number: "02",
    icon: FileText,
    title: "Scripting",
    description: "Geen gewauwel, geen tijdverspilling. Ik schrijf scripts die scoren: hooks die pakken, boodschappen die blijven hangen.",
    color: "cyan"
  },
  {
    number: "03",
    icon: Video,
    title: "Filmdag",
    description: "In één dag schiet ik een hele reeks video's. Efficiënt, professioneel en zonder stress. Jij bent even aan zet, ik doe de rest.",
    color: "blue"
  },
  {
    number: "04",
    icon: Upload,
    title: "Edit & Plaatsing",
    description: "Ik monteer alles met strakke edits, ondertitels en trending audio. Optioneel plaats ik ook direct op jouw kanalen.",
    color: "cyan"
  }
];

const benefits = [
  "Authentieke content die aansluit bij jouw merk",
  "Volledige ontzorging, van begin tot eind",
  "Bewezen formules die conversie opleveren",
  "Maandelijkse updates zodat je consistent blijft",
  "Focus op jouw doelgroep in de regio Heusden"
];

export default function SolutionSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Zo maak ik jou{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              zichtbaar
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Video zorgt voor vertrouwen. Mensen willen zien wie er achter een bedrijf zit. 
            Ik neem alles uit handen zodat jij kunt focussen op ondernemen.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-2.5 sm:-top-3 -left-2.5 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 text-sm sm:text-base">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-blue-50 flex items-center justify-center mb-4 sm:mb-6 mt-4 sm:mt-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">
            Waarom kiezen voor Berk Visuals?
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}