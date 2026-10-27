import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ImageGalleryPage } from './pages/ImageGalleryPage';
import { VideoGalleryPage } from './pages/VideoGalleryPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-green-100 selection:text-green-800">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/ImageGallery" element={<ImageGalleryPage />} />
            <Route path="/VideosGallary" element={<VideoGalleryPage />} />
            <Route path="/Careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
