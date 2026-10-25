import './App.css'
import './css/custom.css'
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CV from './components/cv';
import Navbar from './components/navbar';
import PortfolioPage from './pages/PortfolioPage';
// import FreelancePage from './pages/FreelancePage';

const LANGUAGES = ['IT', 'EN', 'FR'];

function readStored(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage not available — ignore */
  }
}

function App() {
  const [dark, setDark] = useState(() => readStored('theme', 'dark') === 'dark');
  const [lang, setLang] = useState(() => {
    const stored = readStored('lang', 'EN');
    return LANGUAGES.includes(stored) ? stored : 'EN';
  });
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    writeStored('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
    writeStored('lang', lang);
  }, [lang]);

  // When switching between Portfolio and Freelance, start from the top
  // (unless the link points to a specific section).
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // Scroll-reveal: re-observe every time the page (tab) or language changes,
  // otherwise sections of the newly opened tab would stay invisible.
  useEffect(() => {
    const revealedElements = document.querySelectorAll('[data-reveal]:not(.is-revealed)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    revealedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname, lang]);

  const shell = (page) => (
    <div className="App" id="top">
      <Navbar
        lang={lang}
        setLang={setLang}
        languages={LANGUAGES}
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
      />
      {page}
    </div>
  );

  return (
    <Routes>
      <Route path="/cv" element={<CV initialLang={lang} />} />
      {/* <Route path="/freelance" element={shell(<FreelancePage lang={lang} />)} /> */}
      <Route path="*" element={shell(<PortfolioPage lang={lang} />)} />
    </Routes>
  )
}

export default App
