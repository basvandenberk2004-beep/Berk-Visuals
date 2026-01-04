import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    quote: "Samen met Bas hebben wij voor SPIE Nederland onze Employer Branding verder versterkt door met krachtige beelden verschillende afdelingen binnen de divisie Building Solutions zichtbaar te maken. Door het in beeld brengen van diverse locaties en functies zijn meerdere vacatures effectief onder de aandacht gebracht bij potentiële kandidaten. Deze visuele aanpak zorgt voor een realistisch en herkenbaar beeld van het werken bij SPIE en helpt kandidaten zich beter te oriënteren op de organisatie. De video's worden zowel intern als extern zeer positief ontvangen en dragen bij aan een sterkere positionering van SPIE als aantrekkelijke werkgever.",
    name: "Iris Douwes",
    company: "SPIE Nederland",
    role: "HR Adviseur",
    image: "https://i.postimg.cc/zG1vKWq0/iris-douwes-500-500-75-cropped-(2).jpg",
    rating: 5,
    results: "Viral Employer Branding & High Engagement"
  },
  {
    id: 2,
    quote: "Bas heeft me onlangs geholpen met het maken van video content voor mijn socials! Ik wist zelf geen raad met het maken, schieten en editen van video's, laat staan om er ook nog een goede inhoud in te verwerken. Daar heeft Bas me prima bij geholpen! Binnen 1 dag hebben we enorm veel video's geschoten, welke hij op korte termijn meteen af had om te publiceren. Super fijn als je zelf druk bent met je onderneming en je in 1 dag volledig voorzien bent van een bulk content waar je weken mee vooruit kan! Sinds ik ben gestart met het posten van video' s heb ik meer klanten, meer volgers en veel meer interactie in de regio. Aanrader als je je socials een boost wil geven!",
    name: "Koen Douwes",
    company: "Fit By Movement",
    role: "Eigenaar",
    image: "https://i.postimg.cc/mD0znnWH/OVER-ONS-(1).png",
    rating: 5,
    results: "15.000 views & 9 nieuwe leads"
  },
  {
    id: 3,
    quote: "Afgelopen jaar 8 video's met Bas opgenomen, dit pakte allemaal erg goed uit. Meer naamsbekendheid in de regio en ook verschillende leads uit gehaald. Vrienden, familie en klanten vonden het leuke video's! Ga zo door Bas.",
    name: "Levi van der Aa",
    company: "Spotless Solutions",
    role: "Eigenaar",
    image: "https://i.postimg.cc/5tr6HryF/1621436002493.jpg",
    rating: 5,
    results: "42.000 weergaven & 6 directe leads"
  },
  {
    id: 4,
    quote: "Ik heb bij Bas een videoproductie afgenomen. Ik ben ontzettend blij met het resultaat. Bas is erg goed in de omgang, snapte gelijk wat ik wil en ondersteunt me op een rustig en juiste manier om mijn verhaal over te brengen in de video. Echt een aanrader!",
    name: "Kyan Cordes",
    company: "Kyan Automatisering",
    role: "Ondernemer",
    image: "https://i.postimg.cc/sfYgyxpk/1725528134969.jpg",
    rating: 5,
    results: "Video Succes & Positieve Feedback"
  },
  {
    id: 5,
    quote: "Ik wilde mijn kapsalon moderniseren en jongere klanten aantrekken. Bas maakte video's die mijn werk laten zien op een manier die perfect aansluit bij mijn doelgroep. Ik krijg nu wekelijks nieuwe boekingen via Instagram.",
    name: "Sophie Bakker",
    company: "Style & Shine",
    role: "Eigenaar",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
    results: "Wekelijkse boekingen via Instagram"
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="inline-block w-[550px] flex-shrink-0 mx-4">
      <div className="h-[240px] p-8 rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-row gap-8 items-center">
        {/* Left: Avatar */}
        <div className="flex-shrink-0">
          <img
            src={testimonial.image}
            alt={`${testimonial.name} - ${testimonial.role} bij ${testimonial.company}, tevreden klant van Berk Visuals videoproductie`}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-200 shadow-md"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex gap-0.5 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed text-sm mb-4 line-clamp-3">
            "{testimonial.quote}"
          </p>
          
          {/* Results Section */}
          {testimonial.results && (
            <div className="mb-3 p-2 bg-blue-50 rounded-lg border border-blue-200 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-gray-900">Resultaat:</span>
                <span className="text-xs text-blue-600 font-semibold ml-1">{testimonial.results}</span>
              </div>
            </div>
          )}
          
          <div>
            <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.role} • <span className="text-blue-600 font-medium">{testimonial.company}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  // Triple the testimonials for seamless infinite loop
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Wat klanten{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              over mij zeggen
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ik werk samen met ondernemers die hun verhaal willen vertellen. 
            Dit is wat ze te zeggen hebben over onze samenwerking.
          </p>
        </motion.div>

        {/* Auto-scrolling Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-0"
            animate={{
              x: [0, -1 * (testimonials.length * 582)], // 550px width + 32px margin (mx-4 = 16px left + 16px right)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              },
            }}
            whileHover={{ 
              animationPlayState: "paused"
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.id}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
        >
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-600">Tevreden partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Gemiddelde score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Zou me aanraden</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24u</div>
              <div className="text-sm text-gray-600">Reactietijd</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Klaar om ook zulke resultaten te behalen?
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Plan een gratis intake
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}