import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import logo from './logo.png';
// header thumbnails removed; thumbnails will be shown in the hero section
import { NAV_LINKS, UNIVERSITY_NAME } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
  <img 
    src={logo} 
    alt="DSU Logo" 
    className="h-12 w-12 object-contain rounded-full group-hover:scale-110 transition-transform"
  />

  <div
    className={`flex flex-col ${
      isScrolled ? 'text-slate-900 dark:text-white' : 'text-white drop-shadow-md'
    } transition-colors`}
  >
    <span className="font-serif font-bold text-lg leading-none tracking-wide">
      DAYANANDA SAGAR UNIVERSITY
    </span>
    <span className="text-[10px] uppercase tracking-widest opacity-90">
      Bangalore, India
    </span>
  </div>
</Link>

<a 
  href="/dsu_new2.0/Rform/form.html" 
  target="_blank" 
  rel="noreferrer"
  className="text-white ml-4"
>
  Registration
</a>




        {/* thumbnails removed from header; displayed in hero */}


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide hover:text-dsu-accent transition-colors relative group ${
                isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dsu-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300' 
                : 'hover:bg-white/20 text-white'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className={`p-2 rounded-full transition-colors ${
            isScrolled 
              ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300' 
              : 'hover:bg-white/20 text-white'
            }`}
          >
            <Search size={20} />
          </button>
          
          <Link 
            to="/admissions"
            className="px-5 py-2 rounded-full bg-dsu-primary text-white text-sm font-bold shadow-lg hover:shadow-xl hover:bg-rose-800 transition-all transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className={`p-2 ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...({
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: 'auto' },
              exit: { opacity: 0, height: 0 }
            } as any)}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-700 dark:text-slate-200 font-medium text-lg hover:text-dsu-primary dark:hover:text-dsu-accent"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/admissions"
                className="w-full text-center py-3 bg-dsu-primary text-white rounded-lg font-bold"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;