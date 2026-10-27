import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Sprout, Phone, Menu, X, ChevronDown, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-green-700 transition-colors">
                {siteConfig.branding.companyName.split(' ')[0]}
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-xs font-semibold px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                Agri Solutions
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase leading-none hidden sm:block">
                {siteConfig.branding.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {siteConfig.navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.subItems && item.subItems.some(sub => location.pathname === sub.href));
              
              if (item.subItems) {
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isActive 
                          ? 'text-green-700 bg-green-50' 
                          : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className={`block px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                              location.pathname === sub.href
                                ? 'bg-green-50 text-green-700 font-semibold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-green-700'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Phone Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-green-800 text-white hover:bg-green-900 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-green-300" />
              <span>{siteConfig.contact.phoneNumbers[0]}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          {siteConfig.navigation.map((item) => (
            <div key={item.label} className="space-y-1">
              <Link
                to={item.href}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-green-50 hover:text-green-700"
              >
                {item.label}
              </Link>
              {item.subItems && (
                <div className="pl-4 space-y-1 border-l-2 border-green-100 ml-2">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-green-700"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-green-800 text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {siteConfig.contact.phoneNumbers[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
