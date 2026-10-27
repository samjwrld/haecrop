import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { ArrowUp, PhoneCall, MessageCircle } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello HYCROP Agri Solutions, I would like to inquire about your agricultural products.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

      {/* Scroll to top button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-green-800 hover:bg-green-900 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
