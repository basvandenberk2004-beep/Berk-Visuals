import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent({ onAccept }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ga_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem('ga_cookie_consent', 'accepted');
    setShowBanner(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('ga_cookie_consent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-1">Cookies</p>
                  <p className="text-sm text-gray-600">
                    Wij gebruiken cookies om te zien welke video's het beste scoren. Accepteer je dit?
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="flex-1 sm:flex-none border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Nee, liever niet
                </Button>
                <Button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/30"
                >
                  Ja, prima
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}