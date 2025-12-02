import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronRight, ChevronLeft } from 'lucide-react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { NEWS, RECRUITERS, ACCREDITATIONS, PROGRAM_LINKS, HERO_SLIDES } from '../constants';

// Import local images and set the slides order per your swap request.
import slideA from '../DSU_Logo_1.jpg'; // Use for "DAYANANDA SAGAR UNIVERSITY"
import slideB from '../dsu3.jpg';
import slideC from '../4.jpg';
import slideD from '../dsu2_research.jpg'; // Use for "INNOVATION & RESEARCH"
import researchImg from '../research.jpg';
import incubationImg from '../incubation_entreprener.jpg';
import innovationImg from '../innovative_lab.jpg';
import founderImg from '../shri r dayananda sagar.jpg';
import hemachandraImg from '../dr d hemachandra.jpg';
import premachandraImg from '../dr d premachandra.jpg';
import chandrammaImg from '../smt chandramma.jpg';


const SLIDE_IMAGES = [slideA, slideB, slideC, slideD];

// Build slides by reusing existing HERO_SLIDES text content but overriding images
const SLIDES = HERO_SLIDES.map((s, i) => ({ ...s, image: SLIDE_IMAGES[i] || s.image }));

const Home: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); 
    return () => clearInterval(timer);
  }, [currentSlideIndex]);

  const nextSlide = () => setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  // Touch swipe handling
  const touchStartX = React.useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;
    const threshold = 50; // px
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section with Slider */}
      <section
        className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Slider Images rendered as full-background slides */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <div
              className="w-full h-[100dvh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            >
              {/* Dark overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows — vertically centered */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
                
                {/* Text Content Overlay */}
                <div className="container mx-auto px-4 relative z-10 pt-20">
                  <AnimatePresence mode="wait">
                    {currentSlide.hasTextOverlay && (
                      <motion.div 
                        key={`text-${currentSlide.id}`} 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-4xl mx-auto text-center md:text-left"
                      >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                  {currentSlide.title}
                </h1>
                
                <p className="text-lg md:text-2xl text-slate-100 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light drop-shadow-md border-l-4 border-dsu-accent pl-4">
                  {currentSlide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link 
                    to="/admissions"
                    className="group px-8 py-4 rounded-full bg-dsu-primary text-white font-bold text-lg hover:bg-rose-700 transition-all shadow-[0_10px_20px_-10px_rgba(190,18,60,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(190,18,60,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    {currentSlide.primaryCta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {currentSlide.secondaryCta && (
                    <Link 
                      to="/academics"
                      className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 flex items-center justify-center"
                    >
                      {currentSlide.secondaryCta}
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Accreditations Strip */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative z-20 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 items-center">
            {ACCREDITATIONS.map((acc, index) => (
              <motion.div 
                key={acc.id}
                {...({
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.05 }
                } as any)}
                className={`flex flex-col items-center justify-center text-center ${acc.isHighlight ? '-mt-2' : ''}`}
              >
                {acc.isHighlight ? (
                  <div className="relative group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-white dark:border-slate-800 ring-2 ring-yellow-100 dark:ring-yellow-900 transform group-hover:scale-105 transition-transform">
                      <span className="font-black text-2xl leading-none">A+</span>
                      <span className="text-[10px] font-bold uppercase">NAAC</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                      Accredited
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col items-center p-2 ${acc.color} bg-slate-50 dark:bg-slate-800 rounded-lg min-w-[120px] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors`}>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-tight mb-1">{acc.text}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{acc.sub}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Grid Program Finder (Primary Navigation) */}
      <section className="relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROGRAM_LINKS.map((program, index) => (
            <Link 
              to={program.path} 
              key={index}
              className="group relative h-40 md:h-48 overflow-hidden bg-[#004070] dark:bg-[#002040] hover:bg-[#003055] dark:hover:bg-[#001530] flex items-center justify-center text-center p-4 border-r border-b border-blue-400/20 dark:border-blue-400/10"
            >
              {/* Image Background - Low opacity by default for texture */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover grayscale" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-white font-bold text-xs md:text-sm uppercase tracking-wider leading-relaxed px-2 drop-shadow-md">
                  {program.title}
                </h3>
                <div className="h-0.5 w-0 bg-dsu-accent mx-auto mt-3 transition-all duration-300 group-hover:w-8"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Campus Happenings / News */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Campus Happenings</h2>
            <div className="w-16 h-1 bg-dsu-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Large News Item */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl h-[300px] lg:h-auto shadow-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="bg-dsu-accent text-black text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">FEATURED</span>
                <h3 className="text-xl font-bold mb-2">International Conference on Innovation 2025</h3>
                <p className="text-sm text-slate-300 line-clamp-2">Bringing together minds from across the globe to discuss the future of technology and sustainable development.</p>
              </div>
            </div>

            {/* Recent News List */}
            <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 dark:text-white">Recent Announcements</h3>
                <button className="text-xs font-bold text-dsu-primary hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {NEWS.map((item) => (
                  <div key={item.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex flex-col items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700 group-hover:border-dsu-primary dark:group-hover:border-dsu-primary transition-colors">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">{item.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-white leading-none">{item.date.split(' ')[1].replace(',','')}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-dsu-primary transition-colors line-clamp-2 mb-1">{item.title}</h4>
                      <Link to="#" className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center gap-1">Read more <ArrowRight size={10}/></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =================== DSU VIDEO SECTION =================== */}
<section className="py-20 bg-slate-900 text-white">
  <div className="container mx-auto px-4">

    <h2 className="text-3xl font-serif font-bold text-center">DSU Videos</h2>
    <div className="w-20 h-1 bg-dsu-primary mx-auto mt-4 mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Video 1 */}
      <div className="rounded-2xl overflow-hidden bg-slate-800 shadow-lg border border-slate-700">
       <iframe
  className="w-full h-64 md:h-80"
  src="https://www.youtube.com/embed/l_sIBsGwy6w"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>


        <div className="p-4 font-semibold text-center">Life at DSU Main Campus</div>
      </div>

      {/* Video 2 */}
      <div className="rounded-2xl overflow-hidden bg-slate-800 shadow-lg border border-slate-700">
    <iframe
  className="w-full h-64 md:h-80"
  src="https://www.youtube.com/embed/y18grnnZ4Wg"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>


        <div className="p-4 font-semibold text-center">CDSIMER Campus Video</div>
      </div>

    </div>

    {/* Quick Buttons */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {[
        "E-Learning (Moodle)",
        "360° Virtual Tour",
        "New Campus",
        "UG Research Forum",
      ].map((item, idx) => (
        <button
          key={idx}
          className="py-4 rounded-xl bg-blue-700 hover:bg-blue-600 
                     shadow-md hover:shadow-lg border border-blue-500/30
                     transition-all font-bold"
        >
          {item}
        </button>
      ))}
    </div>

  </div>
</section>
{/* =================== DSU FACTS SECTION (FINAL) =================== */}
<section className="py-20 bg-slate-950">
  <div className="container mx-auto px-4">

    <h2 className="text-3xl font-serif font-bold text-center text-white">
      DSU Facts
    </h2>
    <div className="w-20 h-1 bg-dsu-primary mx-auto mt-4 mb-12"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Research */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg group 
                   bg-slate-800 border border-slate-700"
      >
        <div
          className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all"
          style={{ backgroundImage: `url(${researchImg})` }}
        ></div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-2">
            Research
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            DSU is one of India's leading institutions with strong focus on innovation & research.
          </p>
        </div>
      </div>

      {/* Incubation & Entrepreneurship */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg group 
                   bg-slate-800 border border-slate-700"
      >
        <div
          className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all"
          style={{ backgroundImage: `url(${incubationImg})` }}
        ></div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-2">
            Incubation & Entrepreneurship
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            DERBI Foundation supports student startups with DST-backed incubation programs.
          </p>
        </div>
      </div>

      {/* Innovation Labs */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg group 
                   bg-slate-800 border border-slate-700"
      >
        <div
          className="h-48 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all"
          style={{ backgroundImage: `url(${innovationImg})` }}
        ></div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-300 mb-2">
            Innovation Labs
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Advanced labs in AI, ML, IoT, Big Data & Robotics created with industry partners.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* =================== DSU DIFFERENTIATOR + LEADERSHIP (FINAL) =================== */}
<section className="py-20 bg-slate-900 text-white">
  <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* ---------- LEFT SIDE: DSU DIFFERENTIATOR ---------- */}
    <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700">
      <h3 className="text-xl font-semibold mb-4 text-dsu-accent">DSU Differentiator</h3>

      <ul className="space-y-3 text-slate-300 leading-relaxed">
        <li>• Industry-Aligned Curriculum</li>
        <li>• Global Board of Studies</li>
        <li>• Advanced Teaching–Learning Process</li>
        <li>• Industry Driven Academic Programs</li>
        <li>• Research Excellence & Innovation</li>
        <li>• Highly Experienced Faculty</li>
        <li>• Startup Incubation & Entrepreneurship</li>
      </ul>
    </div>

    {/* ---------- RIGHT SIDE: LEADERSHIP WITH IMAGES ---------- */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Founder */}
      <div className="bg-blue-800/40 border border-blue-700 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
        <img 
          src={founderImg}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
        />
        <h4 className="text-sm opacity-70">FOUNDING FATHER</h4>
        <h2 className="text-lg font-bold mt-1">Late Shri R Dayananda Sagar</h2>
        <p className="text-blue-100 text-sm mt-3 leading-relaxed">
          Visionary founder who established DSU with commitment to quality education and nation-building.
        </p>
      </div>

      {/* Dr. D. Hemachandra Sagar */}
      <div className="bg-blue-800/40 border border-blue-700 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
        <img 
          src={hemachandraImg}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
        />
        <h4 className="text-sm opacity-70">CHAIRMAN</h4>
        <h2 className="text-lg font-bold mt-1">Dr. D. Hemachandra Sagar</h2>
        <p className="text-blue-100 text-sm mt-3 leading-relaxed">
          Provides strategic leadership to DSU, driving innovation, global expansion & academic growth.
        </p>
      </div>

      {/* Dr. D. Premachandra S. */}
      <div className="bg-blue-800/40 border border-blue-700 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
        <img 
          src={premachandraImg}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
        />
        <h4 className="text-sm opacity-70">PRO CHANCELLOR</h4>
        <h2 className="text-lg font-bold mt-1">Dr. D. Premachandra S.</h2>
        <p className="text-blue-100 text-sm mt-3 leading-relaxed">
          Leads academic excellence, research innovation, and high-quality learning frameworks.
        </p>
      </div>

      {/* Smt. Chandramma Sagar */}
      <div className="bg-blue-800/40 border border-blue-700 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
        <img 
          src={chandrammaImg}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-400 shadow-lg mb-4"
        />
        <h4 className="text-sm opacity-70">CO-FOUNDER</h4>
        <h2 className="text-lg font-bold mt-1">Smt. Chandramma Sagar</h2>
        <p className="text-blue-100 text-sm mt-3 leading-relaxed">
          Played a significant role in building the foundation of DSU through dedication & service.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Recruiters Marquee - Seamless Loop */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Our Top Recruiters</h2>
          <div className="w-12 h-1 bg-dsu-primary mx-auto mt-3 rounded-full"></div>
        </div>
        
        <div className="relative flex overflow-hidden py-4 group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>
          
          {/* First Marquee Strip */}
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center gap-20 px-10">
             {RECRUITERS.map((logo, index) => (
               <img 
                 key={`a-${index}`}
                 src={logo} 
                 alt="Recruiter" 
                 className="h-12 w-auto object-contain opacity-60 dark:opacity-40 hover:opacity-100 dark:hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 dark:invert hover:dark:invert-0 hover:scale-110"
               />
             ))}
          </div>
          {/* Second Marquee Strip (Duplicate for Seamlessness) */}
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center gap-20 px-10">
             {RECRUITERS.map((logo, index) => (
               <img 
                 key={`b-${index}`}
                 src={logo} 
                 alt="Recruiter" 
                 className="h-12 w-auto object-contain opacity-60 dark:opacity-40 hover:opacity-100 dark:hover:opacity-80 transition-all duration-300 grayscale hover:grayscale-0 dark:invert hover:dark:invert-0 hover:scale-110"
               />
             ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;