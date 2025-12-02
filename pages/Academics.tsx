import React from 'react';
import { SCHOOLS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Academics: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Our Schools</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            DSU offers a diverse range of programs across multiple disciplines, fostering an environment of interdisciplinary learning and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCHOOLS.map((school, i) => (
            <motion.div
              key={school.id}
              {...({
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: i * 0.1 }
              } as any)}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-32 ${school.color.split(' ')[0]} opacity-20`}></div>
              <div className="p-8 relative">
                <div className={`absolute -top-10 left-8 w-20 h-20 rounded-2xl ${school.color} shadow-lg flex items-center justify-center text-2xl ring-4 ring-white dark:ring-slate-900 transition-all`}>
                  <school.icon size={32} />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{school.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {school.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span> Undergraduate
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span> Postgraduate
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span> PhD Programs
                    </li>
                  </ul>
                  <button className="w-full py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 group-hover:border-dsu-primary group-hover:text-dsu-primary dark:group-hover:text-dsu-primary transition-all">
                    View Programs <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;