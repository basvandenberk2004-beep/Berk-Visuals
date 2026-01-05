import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CookieConsent from '@/components/CookieConsent';
import { initGA, trackEvent } from '@/components/analytics';
import { usePageTracking } from '@/components/usePageTracking';

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   
  const location = useLocation();
  const navigate = useNavigate();

  usePageTracking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AANGEPAST: De "Slimme" Navigatie Functie
  const handleNavigation = (id, isMobile = false) => {
    // Stap 1: Sluit menu direct als het mobiel is
    if (isMobile) {
      setMobileMenuOpen(false);
    }

    // Deze functie voert het scrollen pas uit als hij wordt aangeroepen
    const executeScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        // BELANGRIJK: We berekenen de positie NU pas, na de wachttijd
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
   
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    // Stap 2: De routering en timing logica
    if (location.pathname !== '/') {
      navigate('/');
      // Als we van pagina wisselen: wacht 500ms tot de nieuwe pagina geladen is
      setTimeout(executeScroll, 500);
    } else {
      // Als we al op home zijn:
      if (isMobile) {
        // Op mobiel: Wacht 300ms tot de menu-animatie KLAAR is, dan pas berekenen en scrollen
        setTimeout(executeScroll, 300);
      } else {
        // Op desktop: direct scrollen
        executeScroll();
      }
    }
  };

  const handleHomeClick = (isMobile = false) => {
    if (isMobile) setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
        navigate('/');
        // Na navigeren even wachten met naar boven scrollen
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
        // Als we al op home zijn
        if (isMobile) {
            // Wacht tot menu dicht is (300ms) voordat we naar boven scrollen
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  };

  const handleIntakeClick = (source, isMobile = false) => {
    trackEvent('Conversion', 'click_intake_request', source);
    handleNavigation('contact', isMobile);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
            : 'bg-white/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 sm:gap-3 group">
              <img 
                src="https://i.postimg.cc/YSCWbhw2/video-camera-2806-(2).png" 
                alt="Berk Visuals Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-gray-900 text-base sm:text-lg hidden xs:block">Berk Visuals</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <button 
                onClick={() => handleHomeClick(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('portfolio', false)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Portfolio
              </button>
              <Button
                onClick={() => handleIntakeClick('Nav', false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 lg:px-6 py-2 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all text-sm"
              >
                Gratis intake
                <ChevronRight className="ml-1 w-3 h-3 lg:w-4 lg:h-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100 z-50 relative"
              aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute top-16 left-0 right-0 w-full z-40"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3">
                <button 
                  type="button"
                  onClick={() => handleHomeClick(true)} 
                  className="block w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-3 rounded-lg font-medium"
                >
                  Home
                </button>
                <button 
                  type="button"
                  onClick={() => handleNavigation('portfolio', true)}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors py-3 px-3 rounded-lg font-medium"
                >
                  Portfolio
                </button>
                <Button
                  onClick={() => handleIntakeClick('Nav', true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 mt-2"
                >
                  Gratis intake
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Cookie Consent Banner */}
      <CookieConsent onAccept={initGA} />
    </div>
  );
}
