import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: "Tijd & Investering",
    questions: [
      {
        question: "Hoeveel tijd kost het mij als ondernemer?",
        answer: "Minimaal. Ik bereid de scripts en het concept voor. Op de draaidag zelf filmen we efficiënt: vaak hebben we in 2 uur tijd al genoeg content voor een hele maand. Jij hoeft alleen je expertise te delen, ik regel de rest."
      },
      {
        question: "Moet ik zelf de scripts schrijven of ideeën bedenken?",
        answer: "Nee, dat hoeft niet. We beginnen met een strategiegesprek waarin we jouw doelen bespreken. Op basis daarvan maak ik een contentplan en scripts. Heb je zelf ideeën? Super! Maar als je inspiratieloos bent, neem ik het volledig van je over."
      }
    ]
  },
  {
    category: "Camera-angst & Uitvoering",
    questions: [
      {
        question: "Ik heb nog nooit voor een camera gestaan en vind het ongemakkelijk. Is dat erg?",
        answer: "Helemaal niet. 90% van mijn klanten staat voor het eerst voor de lens. Ik regisseer je er doorheen, we doen het shot voor shot en we stoppen pas als jij tevreden bent. Door de snelle montage zien we geen stiltes of 'ehms', waardoor je altijd krachtig overkomt."
      },
      {
        question: "Filmen we bij mij op locatie of in een studio?",
        answer: "Meestal kom ik naar jouw bedrijf toe. Content werkt het beste als het authentiek is en de sfeer van jouw bedrijf laat zien. Ik neem professionele belichting en audio mee, dus we kunnen bijna elke ruimte omtoveren tot een set."
      }
    ]
  },
  {
    category: "Resultaat & Strategie",
    questions: [
      {
        question: "Waarom short-form video (TikTok/Reels) en geen 'gewone' bedrijfsvideo?",
        answer: "De aandachtsspanne is kort. Short-form video's krijgen organisch veel meer bereik op platforms als Instagram, TikTok en LinkedIn. Het is de snelste manier om zichtbaar te worden, vertrouwen te bouwen en 'top-of-mind' te blijven bij je doelgroep."
      },
      {
        question: "Kan ik de video's ook gebruiken voor werving (recruitment)?",
        answer: "Zeker! Video is hét middel om personeel te werven. Kandidaten willen sfeer proeven en toekomstige collega's zien. Een video zegt meer dan een vacaturetekst en zorgt vaak voor kwalitatievere sollicitanten."
      }
    ]
  },
  {
    category: "Kosten & Werkwijze",
    questions: [
      {
        question: "Wat kost een videoproductie?",
        answer: "Dit hangt af van je wensen: zoek je een eenmalige campagnevideo of een maandelijks content-abonnement? Een abonnement is er al vanaf een vast bedrag per maand. Plan een gratis intake, dan maak ik een voorstel op maat."
      },
      {
        question: "Hoe snel worden de video's opgeleverd?",
        answer: "Na de draaidag ontvang je de eerste versies meestal binnen 5 tot 7 werkdagen. We doen een correctieronde en daarna zijn ze klaar om te posten."
      }
    ]
  }
];

export default function FAQSection() {
  useEffect(() => {
    // Generate FAQPage Schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqCategories.flatMap(category => 
        category.questions.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      )
    };

    let schemaScript = document.getElementById('faq-schema-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'faq-schema-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(faqSchema);

    return () => {
      const script = document.getElementById('faq-schema-data');
      if (script) script.remove();
    };
  }, []);

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-white" aria-label="Veelgestelde vragen over videoproductie">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Veelgestelde Vragen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">
            Alles wat je moet{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              weten
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Veelgestelde vragen over videoproductie, werkwijze en resultaten. Staat je vraag er niet bij? Neem gerust contact op.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8 sm:space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-500">
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                {category.questions.map((item, questionIndex) => (
                  <AccordionItem
                    key={questionIndex}
                    value={`item-${categoryIndex}-${questionIndex}`}
                    className="border border-gray-200 rounded-xl px-4 sm:px-6 py-1 sm:py-2 bg-white hover:border-blue-300 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors py-3 sm:py-4 text-sm sm:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-3 sm:pb-4 text-sm sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
