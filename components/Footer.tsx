import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
// @ts-ignore
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* Abstract BG Shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dsu-primary via-purple-600 to-dsu-accent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-dsu-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">DSU</h3>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Dayananda Sagar University is a premier institution dedicated to innovation, research, and excellence in education. Join us to shape your future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-dsu-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Admissions', 'Academics', 'Research', 'Campus Life', 'Examinations'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm hover:text-dsu-accent flex items-center gap-2 transition-colors">
                    <span className="w-1 h-1 bg-dsu-accent rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Schools */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Schools</h4>
            <ul className="space-y-3">
              {['Engineering', 'Health Sciences', 'Commerce & Management', 'Basic Sciences', 'Arts & Humanities'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dsu-primary shrink-0 mt-1" />
                <span className="text-sm">Devarakaggalahalli, Harohalli, Kanakapura Road, Bangalore – 562 112</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dsu-primary shrink-0" />
                <span className="text-sm">+91 80 4216 1751</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dsu-primary shrink-0" />
                <span className="text-sm">admissions@dsu.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Dayananda Sagar University. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;