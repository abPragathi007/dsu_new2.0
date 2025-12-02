import React, { useEffect, useState, createContext, useContext } from 'react';
// @ts-ignore
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import GeminiChat from './components/GeminiChat';
import ChatWidget from './components/ChatWidget';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Theme Context
type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage (optional)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-rose-200 selection:text-rose-900 dark:selection:bg-rose-900 dark:selection:text-rose-100">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} /> {/* Fallback to Home for now */}
            </Routes>
          </main>
          <Footer />
          <GeminiChat />
          <ChatWidget />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;