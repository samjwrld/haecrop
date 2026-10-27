import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { SEO } from '../components/SEO';
import { Briefcase, MapPin, Clock, CheckCircle2, Send, Upload } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>(siteConfig.careers.openings[0].title);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: siteConfig.careers.openings[0].title,
    experience: '1-3 years',
    coverLetter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      <SEO
        title="Careers & Openings"
        description="Explore job opportunities and career openings at HYCROP Agri Solutions. Join our agricultural field sales, technical, and executive teams."
      />
      {/* Banner */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            Careers & Growth
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {siteConfig.careers.title}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal">
            {siteConfig.careers.subtitle}
          </p>
        </div>
      </section>

      {/* Main Jobs Section */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Openings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.careers.openings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-lg">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{job.title}</h3>
                  <p className="text-sm text-slate-600">{job.description}</p>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Candidate Requirements
                  </h4>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="#apply-form"
                    onClick={() => {
                      setSelectedJob(job.title);
                      setFormData({ ...formData, position: job.title });
                    }}
                    className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-xs transition-colors"
                  >
                    Apply For Position
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Job Application Form */}
          <div id="apply-form" className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-200">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                Application Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Apply to Join HYCROP
              </h2>
              <p className="text-xs text-slate-500">
                Selected Position: <span className="font-bold text-slate-800">{formData.position}</span>
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-bold text-green-900">Application Submitted!</h3>
                <p className="text-xs text-green-800 max-w-md mx-auto">
                  Thank you for applying to HYCROP Agri Solutions. Our HR team will review your qualifications and reach out via phone or email shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 bg-green-800 text-white font-bold text-xs rounded-xl"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Years of Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium bg-white"
                    >
                      <option value="Fresher">Fresher / Graduate</option>
                      <option value="1-3 years">1-3 Years</option>
                      <option value="3-5 years">3-5 Years</option>
                      <option value="5+ years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Cover Note / Relevant Qualifications
                  </label>
                  <textarea
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tell us about your background in agriculture, field experience, or degree..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-1">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                  <p className="text-xs font-semibold text-slate-700">Attach Resume / CV (Optional)</p>
                  <p className="text-[11px] text-slate-400">PDF, DOCX up to 5MB</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
