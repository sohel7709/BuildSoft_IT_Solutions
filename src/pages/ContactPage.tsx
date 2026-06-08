import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import FadeIn from '../components/ui/FadeIn';
import { CheckCircle2, Mail, MapPin, Phone, Send, Shield, X } from 'lucide-react';
import { useSEO } from './_internal/useSEOAdapter';
import { COMPANY_INFO } from '../data/content';

export default function ContactPage() {
  useSEO('Contact Us', 'Get in touch with BuildSoft IT Solutions.');
  const [formState, setFormState] = React.useState<{ status: 'idle' | 'submitting' | 'success' | 'error'; message: string }>({
    status: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });

    const formData = new FormData(e.currentTarget);

    // Honeypot
    if (formData.get('_honey') !== '') {
      setFormState({ status: 'success', message: 'Message sent!' });
      return;
    }

    formData.append('access_key', 'cc683032-0f75-42d3-bb91-5caf2be6a727');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setFormState({
          status: 'success',
          message:
            'Thank you! Your message has been successfully sent. Our team will contact you within 24 hours.'
        });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setFormState({ status: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setFormState({ status: 'error', message: 'Network error. Please check your internet connection and try again.' });
    }
  };

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="Let's discuss how we can help your business scale with reliable technology." />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn direction="right">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed font-medium">
                Whether you have a fully fleshed-out project spec or just an idea, we'd love to hear from you. We provide{' '}
                <span className="font-bold text-gray-900 dark:text-white">free technical consultations</span> and upfront cost estimates.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="group flex items-start sm:items-center p-5 sm:p-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-slate-700 p-3 sm:p-4 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors border border-blue-100 dark:border-slate-600 group-hover:border-transparent mt-1 sm:mt-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Our Office</h3>
                    <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400 whitespace-pre-line font-medium">
                      {COMPANY_INFO.address}
                      {'\n'}
                      {COMPANY_INFO.city}
                    </p>
                  </div>
                </div>

                <div className="group flex items-start sm:items-center p-5 sm:p-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-slate-700 p-3 sm:p-4 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors border border-blue-100 dark:border-slate-600 group-hover:border-transparent mt-1 sm:mt-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="ml-4 sm:ml-6 flex-grow">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Call Us</h3>
                    <div className="mt-1 flex flex-col sm:flex-row sm:space-x-4">
                      <a href={`tel:${COMPANY_INFO.phone1}`} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">{COMPANY_INFO.phone1}</a>
                      <a href={`tel:${COMPANY_INFO.phone2}`} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">{COMPANY_INFO.phone2}</a>
                    </div>
                  </div>
                  <div className="hidden sm:block text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full border border-green-200 dark:border-green-800/50 whitespace-nowrap">Open Now</div>
                </div>

                <div className="group flex items-start sm:items-center p-5 sm:p-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 bg-blue-50 dark:bg-slate-700 p-3 sm:p-4 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors border border-blue-100 dark:border-slate-600 group-hover:border-transparent mt-1 sm:mt-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Email</h3>
                    <p className="mt-1">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="left">
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6 sm:mb-8">Send us a message</h3>

              {formState.status === 'success' ? (
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-300 p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-xl sm:text-2xl font-black mb-2 text-gray-900 dark:text-white">Message Sent!</p>
                  <p className="text-sm sm:text-base font-medium">{formState.message}</p>
                  <button
                    onClick={() => setFormState({ status: 'idle', message: '' })}
                    className="mt-6 sm:mt-8 px-6 py-2 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800/50 rounded-xl text-green-700 dark:text-green-400 font-bold hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors shadow-sm text-sm sm:text-base"
                    type="button"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">First name</label>
                      <input id="first-name" type="text" name="First Name" required className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">Last name</label>
                      <input id="last-name" type="text" name="Last Name" required className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">Email address</label>
                      <input id="email" type="email" name="Email" required className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">Mobile number</label>
                      <input id="phone" type="tel" name="Phone" required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">
                      Company name <span className="text-gray-400 dark:text-gray-500 font-medium">(Optional)</span>
                    </label>
                    <input id="company" type="text" name="Company" className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 dark:text-gray-300 mb-1.5 sm:mb-2">Project details</label>
                    <textarea id="message" name="Message" rows={4} required placeholder="Tell us about your requirements, timeline, and budget..." className="block w-full rounded-2xl border-gray-200 dark:border-slate-700 shadow-sm focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 border-2 p-3.5 sm:p-4 resize-none bg-gray-50 dark:bg-slate-900/50 focus:bg-white dark:focus:bg-slate-900 transition-all hover:border-gray-300 dark:hover:border-slate-600 font-medium text-sm sm:text-base text-gray-900 dark:text-white" />
                  </div>

                  {formState.status === 'error' && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-bold border border-red-200 dark:border-red-800/50 flex items-center">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" /> {formState.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState.status === 'submitting'}
                    className="w-full flex justify-center py-3.5 sm:py-4 px-4 border border-transparent rounded-2xl shadow-md text-base sm:text-lg font-black text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:-translate-y-1 active:scale-95"
                  >
                    {formState.status === 'submitting' ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3" /> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </span>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-xs font-bold text-gray-400 dark:text-gray-500 text-center mt-4 sm:mt-6 flex justify-center items-center uppercase tracking-wider">
                    <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 text-green-500" /> 100% Secure & Confidential
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

