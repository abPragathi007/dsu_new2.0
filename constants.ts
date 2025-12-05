import { BookOpen, GraduationCap, Microscope, Building2, HeartPulse, Laptop, Gavel } from 'lucide-react';
import dsu2Research from './dsu2_research.jpg';

export const UNIVERSITY_NAME = "Dayananda Sagar University";
export const WHATSAPP_NUMBER = "918042161750"; // Generic DSU contact number

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Academics', path: '/academics' },
  { name: 'Placements', path: '/placements' },
  { name: 'Contact', path: '/contact' },
];

export const STATS = [
  { label: 'Years of Legacy', value: '60+' },
  { label: 'Students', value: '25k+' },
  { label: 'Faculty', value: '1500+' },
  { label: 'Acres of Campus', value: '100+' },
];

// Hero Slides Configuration mirroring DSU website content
export const HERO_SLIDES = [
  {
    id: 1,
    // Grand Main Building Shot
    image:  "C:/Users/Pragathi/Desktop/dsunew/DSU_Logo_1.jpg",
    hasTextOverlay: true,
    title: "DAYANANDA SAGAR UNIVERSITY",
    subtitle: "Experience a New World of Academic Excellence in a Global Environment.",
    highlightText: "World Class Campus",
    primaryCta: "Apply Now",
    secondaryCta: "Virtual Tour"
  },
  {
    id: 2,
    // Blue Abstract / Tech background for Admissions Banner vibe
    image: "C:/Users/Pragathi/Desktop/dsunew/dsu3.jpg", 
    hasTextOverlay: true,
    title: "ADMISSIONS OPEN 2026-27",
    subtitle: "B.Tech | M.Tech | MBA | Medical | Law | Arts & Design",
    highlightText: "Join the League of Achievers",
    primaryCta: "Enquire Now",
    secondaryCta: "View Programs"
  },
  {
    id: 3,
    // Student Success / Scholarship Vibe
    image: "C:/Users/Pragathi/Desktop/dsunew/ 4.jpg",
    hasTextOverlay: true,
    title: "SCHOLARSHIPS & PLACEMENTS",
    subtitle: "Prestigious Merit Scholarships based on JEE / CET Scores. Top Global Recruiters await you.",
    highlightText: "Your Future Starts Here",
    primaryCta: "Scholarship Details",
    secondaryCta: "Placement Records"
  },
  {
    id: 4,
    // Innovation / Lab Vibe
    image: "C:/Users/Pragathi/Desktop/dsunew/dsu2_research.jpg" ,
    hasTextOverlay: true,
    title: "INNOVATION & RESEARCH",
    subtitle: "Cutting-edge labs and research facilities driving the future of technology and health sciences.",
    highlightText: "Research Driven University",
    primaryCta: "Explore Research",
    secondaryCta: "Centers of Excellence"
  }
];

// Used for Academics page listing
export const SCHOOLS = [
  { 
    id: 1, 
    name: "School of Engineering", 
    icon: Laptop, 
    desc: "Cutting-edge technology and innovation driven curriculum.", 
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" 
  },
  { 
    id: 2, 
    name: "School of Health Sciences", 
    icon: HeartPulse, 
    desc: "Excellence in medical education and healthcare services.", 
    color: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400" 
  },
  { 
    id: 3, 
    name: "School of Commerce & Management", 
    icon: Building2, 
    desc: "Shaping future leaders and entrepreneurs.", 
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400" 
  },
  { 
    id: 4, 
    name: "School of Basic & Applied Sciences", 
    icon: Microscope, 
    desc: "Research-oriented programs in fundamental sciences.", 
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400" 
  },
  { 
    id: 5, 
    name: "School of Arts, Design & Humanities", 
    icon: BookOpen, 
    desc: "Fostering creativity and critical thinking.", 
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" 
  },
  { 
    id: 6, 
    name: "School of Law", 
    icon: Gavel, 
    desc: "Upholding justice through comprehensive legal education.", 
    color: "bg-slate-50 text-slate-800 dark:bg-slate-800/50 dark:text-slate-300" 
  },
];

export const NEWS = [
  { id: 1, title: "Admissions Open for 2025 Batch - Apply Now", date: "Oct 15, 2024" },
  { id: 2, title: "DSU Ranked Top 5 in Innovation by ARIIA", date: "Sep 22, 2024" },
  { id: 3, title: "International Conference on AI & Robotics", date: "Sep 10, 2024" },
  { id: 4, title: "Campus Placement Drive: 98% Placed", date: "Aug 30, 2024" },
];

export const RECRUITERS = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/ibm.com",
  "https://logo.clearbit.com/infosys.com",
  "https://logo.clearbit.com/wipro.com",
  "https://logo.clearbit.com/accenture.com",
  "https://logo.clearbit.com/deloitte.com",
];

export const ACCREDITATIONS = [
  { id: "ksurf", text: "KSURF 5 Stars", sub: "Research Excellence", color: "border-l-4 border-yellow-500" },
  { id: "edu", text: "Educational Excellence", sub: "Most Trusted 2021", color: "border-l-4 border-red-500" },
  { id: "eng", text: "Emerging Engineering", sub: "Rank No. 1", color: "border-l-4 border-blue-500" },
  { id: "times", text: "Times Business Awards", sub: "Best Emerging Univ", color: "border-l-4 border-slate-800" },
  { id: "naac", text: "NAAC A+", sub: "Accredited", isHighlight: true },
  { id: "silicon", text: "Silicon India", sub: "Ranked A+++", color: "border-l-4 border-orange-500" },
  { id: "iirf", text: "IIRF 2023", sub: "National Rank 10", color: "border-l-4 border-indigo-500" },
  { id: "c360", text: "Careers 360", sub: "AAA Ranking", color: "border-l-4 border-blue-800" },
];

// Images carefully selected to resemble DSU's academic vibe
export const PROGRAM_LINKS = [
  { title: "ENGINEERING", path: "/academics", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" }, // Tech lab
  { title: "COMPUTER APPLICATIONS", path: "/academics", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" }, // Coding
  { title: "SCHOOL OF LAW", path: "/academics", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" }, // Law
  { title: "APPLIED SCIENCES", path: "/academics", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" }, // Science
  { title: "COMMERCE & MANAGEMENT", path: "/academics", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" }, // Business
  { title: "EXECUTIVE EDUCATION", path: "/academics", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" }, // Executive
  { title: "ARTS, DESIGN & HUMANITIES", path: "/academics", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" }, // Art
  { title: "DESIGN & DIGITAL TRANSMEDIA", path: "/academics", image: "https://images.unsplash.com/photo-1626785774573-4b799314341d?auto=format&fit=crop&q=80" }, // Design
  { title: "HEALTH SCIENCES", path: "/academics", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" }, // Health
  { title: "MBBS", path: "/academics", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80" }, // Doctors
];