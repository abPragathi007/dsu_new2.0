import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, HelpCircle } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Admission 2025</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Start your journey with Dayananda Sagar University. Fill out the form below to enquire or begin your application.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Sidebar info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-4 dark:text-white">Admission Process</h3>
              <ul className="space-y-4">
                {[
                  "Fill the Enquiry Form",
                  "Counseling Session",
                  "Submit Application",
                  "Entrance Test (DSAT)",
                  "Interview & Selection",
                  "Fee Payment"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-dsu-primary/10 text-dsu-primary flex items-center justify-center font-bold text-xs">{i+1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-slate-900 dark:from-blue-950 dark:to-black p-6 rounded-2xl shadow-lg text-white">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Download size={18}/> Downloads</h3>
              <p className="text-sm text-slate-300 mb-4">Get the latest brochures and fee structures.</p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors mb-2">Download Prospectus 2025</button>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Fee Structure</button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div 
              {...({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              } as any)}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Enquiry Form</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Interested Program</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all">
                    <option value="">Select a Program</option>
                    <option value="btech">B.Tech - Computer Science</option>
                    <option value="mba">MBA</option>
                    <option value="mbbs">MBBS</option>
                    <option value="llb">LLB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white focus:border-dsu-primary focus:ring-2 focus:ring-dsu-primary/20 outline-none transition-all" placeholder="Any specific questions?"></textarea>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <input type="checkbox" id="terms" className="rounded text-dsu-primary focus:ring-dsu-primary" />
                  <label htmlFor="terms">I agree to receive communications from DSU.</label>
                </div>

                <button className="w-full py-4 bg-dsu-primary text-white font-bold rounded-lg hover:bg-rose-800 transition-colors shadow-lg shadow-rose-500/30">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;