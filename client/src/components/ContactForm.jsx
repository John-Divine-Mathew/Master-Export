import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Globe2, 
  Mail, 
  User, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

const COUNTRIES = [
  'India',
  'United States',
  'United Arab Emirates',
  'Germany',
  'United Kingdom',
  'Singapore',
  'China',
  'Saudi Arabia',
  'Australia',
  'Canada',
  'Netherlands',
  'France',
  'Italy',
  'Japan',
  'South Africa',
  'Brazil',
  'Vietnam',
  'Bangladesh',
  'Malaysia',
  'Indonesia',
  'Thailand',
  'Turkey',
  'Spain',
  'Egypt',
  'Other Country'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
    _hp: '' // Honeypot spam trap
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = 'Email is required';
      else if (!emailRegex.test(value.trim())) error = 'Enter a valid email address';
    } else if (name === 'country') {
      if (!value.trim()) error = 'Please select your country';
    } else if (name === 'message') {
      if (!value.trim()) error = 'Message is required';
      else if (value.trim().length < 5) error = 'Message must be at least 5 characters';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const countryErr = validateField('country', formData.country);
    const messageErr = validateField('message', formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (countryErr) newErrors.country = countryErr;
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || "We couldn't submit your request right now. Please try again.");
      }
    } catch (err) {
      console.error('Contact Form Fetch Error:', err);
      setStatus('error');
      setErrorMessage("We couldn't submit your request right now. Please check your connection and try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      message: '',
      _hp: ''
    });
    setErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section className="py-14 sm:py-18 bg-white scroll-mt-20 border-b border-slate-200/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Smooth Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 reveal-init">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB]">
            Direct Advisory & Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Schedule a Demo & Inquire
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
            Connect with our international trade ERP specialists. Learn how Master Export Pro streamlines export orders, multi-currency invoicing, and customs compliance.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Company Information & Direct Lines */}
          <div className="lg:col-span-5 bg-[#000F2E] text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl border border-[#001848] flex flex-col justify-between min-h-[540px] reveal-init reveal-left stagger-1">
            {/* Ambient Brand Blue Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#004EAB]/25 blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001848] border border-[#004EAB]/40 text-[#8FBDF3] text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Enterprise ERP Support</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  Media Wave Technologies
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Enterprise trade ERP & custom international business technology solutions.
                </p>
              </div>

              {/* Direct Personnel & Support Lines */}
              <div className="space-y-2.5 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Direct Support & Developer Lines
                </div>
                
                {/* Company Support Line */}
                <div className="bg-[#001848]/90 border border-white/10 rounded-2xl p-3.5 space-y-1">
                  <div className="text-xs font-bold text-white">Media Wave Technologies</div>
                  <div className="text-[11px] text-[#8FBDF3]">Company Official Line</div>
                  <div className="text-xs text-slate-200 font-mono pt-1">
                    <a href="tel:+916369153235" className="hover:text-white transition-colors">
                      +91 63691 53235
                    </a>
                  </div>
                </div>

                {/* Developer Line */}
                <div className="bg-[#001848]/90 border border-white/10 rounded-2xl p-3.5 space-y-1">
                  <div className="text-xs font-bold text-white">Technical Support</div>
                  <div className="text-[11px] text-[#8FBDF3]">Lead Developer Contact</div>
                  <div className="text-xs text-slate-200 font-mono pt-1">
                    <a href="tel:+919940440767" className="hover:text-white transition-colors">
                      +91 99404 40767
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address & Operating Hours */}
              <div className="space-y-2 pt-1 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400">📍</span>
                  <span className="leading-relaxed">
                    WD-54, Anandha bhavan complex, Second floor, 17/52, Puthur High Rd, Tiruchirappalli, Tamil Nadu - 620017
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8FBDF3] shrink-0 mt-0.5" />
                  <span>Mon – Sat: <strong>9:00 AM – 6:00 PM (IST)</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8FBDF3] shrink-0 mt-0.5" />
                  <a href="mailto:info@mediawavetech.com" className="hover:text-white transition-colors underline">
                    info@mediawavetech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Media Wave Technologies</span>
              <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-Bit Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Demo Request Form */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-sm reveal-init reveal-right stagger-2">
            
            {/* SUCCESS STATE */}
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/15 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Request Submitted Successfully
                </h3>
                
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Our team will get back to you shortly.
                </p>

                <div className="bg-white border border-[#BCD8F8] rounded-2xl p-5 text-left max-w-md mx-auto shadow-2xs space-y-2 mt-4 text-xs">
                  <div className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Submission Summary</div>
                  <div><strong className="text-slate-700">Name:</strong> {formData.name}</div>
                  <div><strong className="text-slate-700">Email:</strong> {formData.email}</div>
                  <div><strong className="text-slate-700">Country:</strong> {formData.country}</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#004EAB] hover:bg-[#003E8A] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#004EAB]/25"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* FORM STATE */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-3 text-rose-800 text-xs animate-shake">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-rose-900">Something went wrong</div>
                      <div className="mt-0.5">{errorMessage || "We couldn't submit your request right now. Please try again."}</div>
                    </div>
                  </div>
                )}

                {/* Honeypot Spam Trap (Hidden) */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your name"
                        disabled={status === 'submitting'}
                        className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#004EAB] focus:ring-2 focus:ring-[#BCD8F8]/50'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email address"
                        disabled={status === 'submitting'}
                        className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-[#004EAB] focus:ring-2 focus:ring-[#BCD8F8]/50'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Country Selection Field */}
                <div>
                  <label htmlFor="contact-country" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Country <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <select
                      id="contact-country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === 'submitting'}
                      className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none transition-all appearance-none cursor-pointer ${
                        errors.country
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-slate-900'
                          : 'border-slate-200 focus:border-[#004EAB] focus:ring-2 focus:ring-[#BCD8F8]/50 text-slate-900'
                      } ${!formData.country ? 'text-slate-400' : ''}`}
                    >
                      <option value="" disabled>Select your country</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="text-slate-900">
                          {c}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.country && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.country}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us how we can help you..."
                      disabled={status === 'submitting'}
                      className={`w-full p-3.5 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none transition-all placeholder:text-slate-400 resize-y min-h-[110px] ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-[#004EAB] focus:ring-2 focus:ring-[#BCD8F8]/50'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-white bg-[#004EAB] hover:bg-[#003E8A] active:scale-[0.99] rounded-xl transition-all shadow-xl shadow-[#004EAB]/25 hover:shadow-[#004EAB]/40 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm & Submit</span>
                        <ArrowRight className="w-4 h-4 text-[#BCD8F8]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your email and contact details are securely transmitted.</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
