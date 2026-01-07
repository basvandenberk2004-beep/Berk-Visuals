import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AboutSection from '@/components/home/AboutSection';
import FooterCTA from '@/components/home/FooterCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Videoproductie Heusden | Berk Visuals - TikTok, Reels & YouTube Shorts voor MKB';
    
    const setMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setMetaProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Enhanced meta description with local SEO
    setMetaTag('description', 'Professionele videoproductie in Heusden ✓ Short-form content voor TikTok, Instagram Reels & YouTube Shorts ✓ Van scripting tot plaatsing ✓ 1M+ weergaven ✓ 10+ tevreden partners ✓ Gratis intake');
    setMetaTag('keywords', 'videoproductie Heusden, video maken Heusden, TikTok video Heusden, Instagram Reels productie, YouTube Shorts, MKB video marketing, content creator Heusden, social media video, bedrijfsvideo Heusden, promotional video');
    setMetaTag('author', 'Bas van den Berk - Berk Visuals');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Local SEO geo tags
    setMetaTag('geo.region', 'NL-NB');
    setMetaTag('geo.placename', 'Heusden');
    setMetaTag('geo.position', '51.7311;5.1414');
    
    // Open Graph
    setMetaProperty('og:title', 'Videoproductie Heusden | Berk Visuals - Short-form Content Specialist');
    setMetaProperty('og:description', 'Professionele video content voor MKB in Heusden. Van TikTok tot YouTube Shorts - wij maken video\'s die écht bekeken worden. 1M+ weergaven, 100+ video\'s geproduceerd.');
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:url', 'https://berkvisuals.nl');
    setMetaProperty('og:image', 'https://i.postimg.cc/sgFvPPHL/1.png');
    setMetaProperty('og:locale', 'nl_NL');
    setMetaProperty('og:site_name', 'Berk Visuals');
    
    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'Berk Visuals - Video Content Specialist Heusden');
    setMetaTag('twitter:description', 'Professionele short-form video productie voor MKB. TikTok, Reels, Shorts - content die converteert.');
    setMetaTag('twitter:image', 'https://i.postimg.cc/sgFvPPHL/1.png');

    // Schema.org JSON-LD markup
    const schemaOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Berk Visuals",
      "url": "https://berkvisuals.nl",
      "logo": "https://i.postimg.cc/sgFvPPHL/1.png",
      "description": "Professionele videoproductie voor MKB-bedrijven in regio Heusden. Specialist in short-form content voor TikTok, Instagram Reels en YouTube Shorts.",
      "founder": {
        "@type": "Person",
        "name": "Bas van den Berk",
        "jobTitle": "Video Producer & Content Creator"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Haarsteeg",
        "addressRegion": "Noord-Brabant",
        "addressCountry": "NL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "bas@berkvisuals.nl",
        "contactType": "Customer Service",
        "areaServed": "NL",
        "availableLanguage": "Dutch"
      },
      "sameAs": [
        "https://www.instagram.com/basvdberk/",
        "https://www.linkedin.com/in/bas-van-den-berk/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "10",
        "bestRating": "5"
      }
    };

    const schemaService = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Video Production",
      "name": "Short-form Video Productie",
      "description": "Professionele videoproductie voor TikTok, Instagram Reels en YouTube Shorts. Van concept tot plaatsing.",
      "provider": {
        "@type": "Organization",
        "name": "Berk Visuals"
      },
      "areaServed": {
        "@type": "City",
        "name": "Heusden"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "€450 - €1275",
        "priceCurrency": "EUR"
      }
    };

    const schemaVideoObject = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Berk Visuals - Short-form Video Content Showcase",
      "description": "Verticale video content voorbeelden van Berk Visuals voor MKB-bedrijven in Heusden",
      "thumbnailUrl": "https://i.postimg.cc/sgFvPPHL/1.png",
      "uploadDate": "2025-01-01",
      "contentUrl": "https://berkvisuals.nl",
      "embedUrl": "https://www.youtube.com/embed/RWpABvPCnmM"
    };

    // Insert schema scripts
    let schemaScript = document.getElementById('schema-org-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify([schemaOrganization, schemaService, schemaVideoObject]);

    // Cleanup on unmount
    return () => {
      const script = document.getElementById('schema-org-data');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FooterCTA />
    </div>
  );
}
