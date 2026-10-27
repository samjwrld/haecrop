import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, Headset } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: initialProduct ? `Product Inquiry: ${initialProduct}` : 'General Product Consultation',
    message: initialProduct ? `Hello HYCROP team, I am interested in getting technical consultation and pricing for ${initialProduct}.` : ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        subject: `Product Inquiry: ${initialProduct}`,
        message: `Hello HYCROP team, I am interested in getting technical consultation and pricing for ${initialProduct}.`
      }));
    }
  }, [initialProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Modular API integration placeholder
    // Replace with EmailJS / FormSubmit / Supabase / Custom API call
    try {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API response
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      alert("Failed to submit form. Please try again or call our direct phone numbers.");
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Contact Us"
        description="Get in touch with HYCROP Agri Solutions for expert crop consultation, product inquiries, field support, and distributor locations."
      />
      {/* Banner */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal">
            We're here to help you succeed. Get in touch with our agricultural experts.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Phone Numbers</h3>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                {siteConfig.contact.phoneNumbers.map((p, i) => (
                  <a key={i} href={`tel:${p.replace(/\s+/g, '')}`} className="block hover:text-green-700">
                    {p}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">Call us for immediate field support</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Email Address</h3>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                {siteConfig.contact.emailAddresses.map((e, i) => (
                  <a key={i} href={`mailto:${e}`} className="block hover:text-green-700">
                    {e}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">Send queries anytime</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Headquarters</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {siteConfig.contact.address}
              </p>
              <p className="text-[11px] text-slate-400">Visit our Guntur office</p>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Working Hours</h3>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                {siteConfig.contact.workingHours.map((wh, i) => (
                  <p key={i}>{wh}</p>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">Business hours</p>
            </div>

          </div>

          {/* Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Consultation Form */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200/80 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full inline-block">
                  Expert Consultation
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500">
                  Fill out the details below and our regional agronomist will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h3 className="text-xl font-bold text-green-900">Thank You For Reaching Out!</h3>
                  <p className="text-xs text-green-800 max-w-md mx-auto">
                    Your inquiry has been received. Our team will contact you at <span className="font-bold">{formData.phone}</span> or <span className="font-bold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-green-800 text-white font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Venkat Rao"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message / Crop Query *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your crop type, pest problem, or product requirement..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 h-[520px] flex flex-col">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="font-bold text-sm">Guntur Office Location</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-green-400 underline hover:text-green-300"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="flex-1 w-full h-full bg-slate-100">
                <iframe
                  title="HYCROP Office Location Map"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
