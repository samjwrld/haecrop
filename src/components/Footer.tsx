import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Sprout, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { branding, contact, socialLinks, navigation, productCategories } = siteConfig;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-sm">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {branding.logoText}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {branding.tagline}. Your trusted partner in agricultural solutions for better crop protection, disease control, and higher yields.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-green-800 text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-green-800 text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-green-800 text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-green-800 text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-green-800 text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-green-500">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Product Portfolio
            </h3>
            <ul className="space-y-2 text-xs">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/${cat.id}`}
                    className="hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-green-500">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                <span>{contact.phoneNumbers.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-green-500 shrink-0" />
                <span>{contact.emailAddresses[0]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-green-500 shrink-0" />
                <span>{contact.workingHours[0]}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2025 {branding.companyName}. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <p className="text-slate-400">
              Handcrafted by{' '}
              <a
                href="https://viralvelvet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-semibold transition-colors underline decoration-green-500/50 hover:decoration-green-400"
              >
                ViralVelvet
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
