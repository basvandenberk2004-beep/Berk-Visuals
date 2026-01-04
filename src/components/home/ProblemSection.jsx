import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Lage online zichtbaarheid",
    description: "Je concurrent is wél te zien op TikTok en Instagram. Jij niet. Daardoor kiest de klant vanzelf voor hen.",
    stat: "67%",
    statLabel: "van MKB is niet actief met video"
  },
  {
    icon: Users,
    title: "Geen vertrouwen bij nieuwe klanten",
    description: "Mensen kopen van mensen. Zonder video weten potentiële klanten niet wie jij bent en wat jou anders maakt.",
    stat: "80%",
    statLabel: "checkt social media vóór aankoop"
  },
  {
    icon: Clock,
    title: "Geen tijd of kennis",
    description: "Video maken kost tijd, creativiteit en technische skills. Die heb je niet. En dat hoeft ook niet.",
    stat: "3 uur",
    statLabel: "per video gemiddeld"
  },
  {
    icon: AlertCircle,
    title: "Oude marketing werkt niet meer",
    description: "Flyers, Google Ads, folders — het werkt nog wel, maar het engagement is minimaal. Video scoort 10x beter.",
    stat: "10x",
    statLabel: "betere engagement met video"
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-gray-50">
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
            Waarom je huidige marketing{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              niet meer werkt
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            De wereld is veranderd. Mensen scrollen door honderden video's per dag. 
            Sta jij ertussen? Of ben je onzichtbaar?
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                {problem.description}
              </p>
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{problem.stat}</div>
                <div className="text-[10px] sm:text-xs text-gray-500">{problem.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Het goede nieuws?{' '}
            <span className="font-semibold text-gray-900">
              Dit los ik allemaal voor je op. Video geeft vertrouwen, zichtbaarheid én autoriteit.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}