import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, TrendingUp, X, ExternalLink, Instagram, Video as VideoIcon, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import { trackEvent } from '@/components/analytics';

const portfolioItems = [
  {
    id: 1,
    client: "Campagne: Nierstichting & Ironman",
    type: "Storytelling & Non-Profit",
    platform: "youtube",
    thumbnail: "https://i.postimg.cc/3wmNbk6q/0103-copy.png",
    youtubeUrl: "https://www.youtube.com/embed/JtXSomuIbFc?si=PRyPddkm2USUKsVI",
    description: "Hoe een diep persoonlijk verhaal over verlies en 25kg afvallen werd omgezet in een krachtige inzamelingsactie. Emotie die aanzet tot actie.",
    detailedDescription: "Mensen doneren aan mensen, niet aan logo's. Voor deze campagne koppelden we een kwetsbaar verhaal (het verlies van een opa en onzekerheid over het eigen lichaam) aan een heroïsche uitdaging: de Ironman 70.3.\n\nDoor de kijker mee te nemen in de transformatie van 'ongelukkig in je lichaam' naar 'topatleet voor het goede doel', creëerden we een video die niet voelt als reclame, maar als een missie.\n\nResultaat: Hoge engagement en directe donaties via de link in bio.",
    stats: "5.000+ weergaven • €1.000+ opgehaald",
    results: {
      views: "5K",
      "euro opgehaald": "€1.000"
    },
    tags: ["YouTube", "Storytelling", "Non-Profit", "Campagne"]
  },
  {
    id: 2,
    client: "Employer Branding: SPIE Gold Wrap",
    type: "Corporate & Recruitment",
    platform: "youtube",
    thumbnail: "https://www.werkenbijspie.nl/Thumbs/500/500/75/Crop/CmsData/images/SPIE/40.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Haenlsjauiw?si=ASYMc5yVzWlEVYN7",
    description: "Van standaard wit naar opvallend goud. Een visuele vertaling van de wervingsboodschap 'Jij bent goud waard'. Branding die letterlijk schittert.",
    detailedDescription: "Hoe maak je technische dienstverlening aantrekkelijk voor nieuw personeel? Door vakmanschap visueel te maken. Voor SPIE en Vermeulen & Vermeulen legden we het wrappen van deze auto vast.\n\nDe boodschap 'Jij bent goud waard' werd letterlijk vertaald naar de auto. Dit soort 'satisfying' content houdt de kijker vast door de transformatie te tonen, terwijl de wervingsboodschap subtiel maar krachtig binnenkomt.\n\nResultaat: Een unieke eyecatcher op de weg én op social media.",
    stats: "Viral Employer Branding",
    results: {
      views: "284K",
      engagement: "+520%",
      followers: "+1.2K"
    },
    tags: ["YouTube", "Employer Branding", "Corporate", "Transformatie"]
  },
  {
    id: 3,
    client: "Community: DMP Heusden",
    type: "Politiek & Maatschappij",
    platform: "youtube",
    thumbnail: "https://i.postimg.cc/13gfwCKg/Ontwerp_zonder_titel_(6).png",
    youtubeUrl: "https://www.youtube.com/embed/zYQLKFLHapg?si=dIgwqA39beBaiEcF",
    description: "Politieke boodschappen saai? Niet als je ze visueel maakt. Voor DMP Heusden brachten we hun maatschappelijke impact bij Baanbrekers krachtig in beeld.",
    detailedDescription: "Politiek voelt voor veel mensen ver weg. Hoe dicht je dat gat? Door niet alleen te praten, maar te laten *zien* wat je bereikt. In deze video combineren we een heldere boodschap over participatie met dynamische drone-shots van het nieuwe pand van Baanbrekers.\n\nWe maken abstract beleid (sociale voorzieningen) tastbaar en menselijk.\n\nResultaat: Een professionele uitstraling die vertrouwen wekt bij de lokale kiezer.",
    stats: "87.000 weergaven • 21,3% groei",
    results: {
      views: "93K",
      engagement: "+280%",
      followers: "+420"
    },
    tags: ["YouTube", "Politiek", "Community", "Drone"]
  },
  {
    id: 4,
    client: "Personal Branding: Fit by Movement",
    type: "Health & Entrepreneurship",
    platform: "youtube",
    thumbnail: "https://fitbymovement.nl/wp-content/uploads/2024/01/FitByMovement-51-verkleind.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Z2wt4aBr-zY?si=iRb56_YoZ8BfIPFy",
    description: "Diensten draaien om vertrouwen. In deze 'Founder Story' blikt Fit by Movement terug op een jaar van groei: van loondienst naar twee eigen locaties.",
    detailedDescription: "Bij persoonlijke dienstverlening, zoals fysiotherapie, willen klanten weten *wie* hen gaat helpen. Een gelikt logo is niet genoeg; ze zoeken een gezicht en een visie.\n\nIn deze video kozen we voor een rustige, authentieke setting. Geen snelle montage, maar een eerlijk verhaal over de switch van loondienst naar ondernemerschap en de unieke visie op pijnvrij bewegen.\n\nResultaat: Een krachtig stuk content dat autoriteit claimt en de gunfactor vergroot.",
    stats: "15.000 views • 9 nieuwe leads",
    results: {
      views: "156K",
      engagement: "+410%",
      followers: "+680"
    },
    tags: ["YouTube", "Personal Branding", "Health", "Founder Story"]
  },
  {
    id: 5,
    client: "E-commerce: Spotless Solutions",
    type: "Product Marketing & Ads",
    platform: "youtube",
    thumbnail: "https://spotless-solutions.nl/wp-content/uploads/2025/02/over-ons-1.png",
    youtubeUrl: "https://www.youtube.com/embed/wrV8P3hKN04?si=oPWIoMP9GQSusy9f",
    description: "Hoe verkoop je een fysiek product in 15 seconden? Door het resultaat onweerstaanbaar in beeld te brengen. Korte, krachtige 'problem-solution' content die converteert.",
    detailedDescription: "Bij productvideo's op social media heb je geen tijd voor lange introducties. Je moet de kijker direct 'hooken'. Voor Spotless Solutions gebruikten we een bewezen formule: Pijn (vieze velgen) -> Oplossing (bevredigende schoonmaakactie) -> Resultaat (glans).\n\nWe focusten visueel op de chemische reactie (het paars worden van de velg), wat enorm goed werkt op TikTok en Reels ('Satisfying content').\n\nStrategie: We vragen kijkers om te reageren met een trefwoord ('VELG') voor een link. Dit boost het algoritme én de sales.",
    stats: "42.000 weergaven • 6 leads",
    results: {
      views: "201K",
      engagement: "+390%",
      followers: "+950"
    },
    tags: ["YouTube", "E-commerce", "Product Marketing", "Ads"]
  },
  {
    id: 6,
    client: "Corporate: Loyal Interim",
    type: "B2B & Recruitment",
    platform: "youtube",
    thumbnail: "https://admin.loyalinterim.nl/wp-content/uploads/2023/01/Loyal-Interim-17-1-230669.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8dDe_OQR5iU?si=g7zAN8mZVim8lj2j",
    description: "Detacheringsbureaus zijn vaak ondoorzichtig. Loyal Interim breekt de markt open met video's die eerlijkheid centraal stellen. B2B content die converteert door vertrouwen.",
    detailedDescription: "In de zakelijke dienstverlening durven weinig bedrijven écht open kaart te spelen over tarieven. Voor Loyal Interim maakten we een video die direct de pijnpunt van de doelgroep raakt: 'Weet jij wat er voor jou gefactureerd wordt?'\n\nGeen ingewikkelde verhaallijnen, maar een strakke 'talking head' met krachtige typografie en een confronterend script. Dit bewijst dat je ook zonder special effects, maar met de juiste boodschap, de markt kan opschudden.\n\nResultaat: Directe positionering als de eerlijke uitdager in de branche.",
    stats: "1.500 views/video • 13,7% groei",
    results: {
      views: "89K",
      engagement: "+295%",
      followers: "+540"
    },
    tags: ["YouTube", "B2B", "Corporate", "Recruitment"]
  }
];

const platformIcons = {
  instagram: Instagram,
  tiktok: VideoIcon,
  youtube: VideoIcon,
  both: VideoIcon
};

const platformColors = {
  instagram: "from-pink-500 to-purple-500",
  tiktok: "from-gray-900 to-cyan-400",
  youtube: "from-red-500 to-red-600",
  both: "from-blue-500 to-cyan-500"
};

function VideoModal({ item, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-[800px] w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-900" />
        </button>

        {/* YouTube Video Embed */}
        <div className="relative aspect-video w-full bg-black rounded-t-2xl overflow-hidden">
          <iframe
            src={`${item.youtubeUrl}?autoplay=1&mute=1`}
            title={item.client}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.client}</h3>
              <Badge className={`bg-gradient-to-r ${platformColors[item.platform]} border-0 text-white`}>
                {item.type}
              </Badge>
            </div>
          </div>

          <p className="text-gray-600 mb-6 whitespace-pre-line">{item.detailedDescription || item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Duplicate items for seamless infinite loop
  const infiniteItems = [...portfolioItems, ...portfolioItems];

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 px-4 bg-gray-50 overflow-hidden" aria-label="Portfolio - Gerealiseerde videoprojecten">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <Eye className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Content die{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              écht werkt
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Van lokale bakkerijen tot sportscholen — bekijk hoe ik MKB-bedrijven 
            help om zichtbaar te worden met video content die converteert.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-white transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:bg-white transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Embla Carousel FIX: 
              1. Removed 'gap-6' 
              2. Added '-ml-6' to container 
          */}
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex -ml-6">
              {infiniteItems.map((item, index) => {
                const PlatformIcon = platformIcons[item.platform];
                
                return (
                  // FIX: Added 'pl-6' here instead of gap
                  <div
                    key={`${item.id}-${index}`}
                    className="flex-[0_0_auto] w-[280px] sm:w-[320px] pl-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group relative cursor-pointer h-full"
                      onClick={() => {
                        trackEvent('Portfolio', 'view_case_study', item.client);
                        setSelectedItem(item);
                      }}
                    >
                      <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300">
                        {/* 9:16 Aspect Ratio Thumbnail */}
                        <div className="relative aspect-[9/16] overflow-hidden bg-gray-100">
                          <img 
                            src={item.thumbnail} 
                            alt={`${item.client} - ${item.type} videoproductie door Berk Visuals`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                            </div>
                          </div>

                          {/* Platform Badge */}
                          <div className="absolute top-3 right-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${platformColors[item.platform]} shadow-lg`}>
                              <PlatformIcon className="w-4 h-4 text-white" />
                            </div>
                          </div>

                          {/* Stats Badge */}
                          {item.stats && (
                            <div className="absolute top-3 left-3">
                              <div className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center gap-2">
                                <BarChart3 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                <span className="text-xs font-semibold text-gray-900">{item.stats}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {item.client}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Wil jij ook zulke resultaten voor jouw bedrijf?
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start jouw project
          </Button>
        </motion.div>
      </div>

      <VideoModal 
        item={selectedItem} 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </section>
  );
}
