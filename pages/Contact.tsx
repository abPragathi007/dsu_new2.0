import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-slate-600 dark:text-slate-400">We'd love to hear from you. Reach out to our admissions team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white">Main Campus</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                Devarakagalahalli, Harohalli,<br/>
                                Kanakapura Road, Bengaluru South District,<br/>
                                Karnataka, India 562112.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">080 - 4216 1751</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">080 - 4216 1750</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">admissions@dsu.edu.in</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">info@dsu.edu.in</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white">Office Hours</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Mon - Sat: 9:00 AM - 5:00 PM</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- UPDATED MAP ---------- */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden min-h-[400px]">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.154078092938!2d77.493738!3d12.659948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4170f1a9e2fb%3A0xaea2d06bbf575f37!2sDayananda%20Sagar%20University%20-%20Harohalli%20Campus!5e0!3m2!1sen!2sin!4v1733128999999!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="dark:invert dark:hue-rotate-180 dark:contrast-75"
/>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
