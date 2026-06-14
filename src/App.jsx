
import './App.css'
import './css/custom.css'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CV from './components/cv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Labels from './components/labels';
import Presentation from './components/presentation';
import FrontendShowcase from './components/frontendShowcase';
import Problems from './components/problems';
import Services from './components/services';
import Projects from './components/projects';
import Steps from './components/steps';
import WorkWithMe from './components/workWithMe';
import Technologies from './components/technologies';
import Faq from './components/faq';
import Contact from './components/contact';

const navCopy = {
  IT: { home: 'Home', about: 'Chi sono', services: 'Servizi', projects: 'Progetti', contact: 'Contatti', faq: 'FAQ', dark: 'Scuro', light: 'Chiaro', cv: 'CV' },
  EN: { home: 'Home', about: 'About Me', services: 'Services', projects: 'Projects', contact: 'Contact', faq: 'FAQ', dark: 'Dark', light: 'Light', cv: 'CV' },
  FR: { home: 'Accueil', about: 'À propos', services: 'Services', projects: 'Projets', contact: 'Contact', faq: 'FAQ', dark: 'Sombre', light: 'Clair', cv: 'CV' },
};

function App() {
  const [dark, setDark] = useState(true);
  const languages = ['IT', 'EN', 'FR'];
  const [lang, setLang] = useState(languages[1]);
  const whatsappHref = 'https://wa.me/393000000000?text=Hi%20Alessandro%2C%20I%27d%20like%20to%20talk%20about%20my%20website.';
  const nav = navCopy[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const revealedElements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );
    revealedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Routes>
      <Route path="/cv" element={<CV />} />
      <Route path="*" element={
    <div className="App">
      <nav className="navbar flex align-center justify-between">
        <ul className='nav-links flex align-center justify-center gap-4'>
          <li><a href="#">{nav.home}</a></li>
          <li><a href="#presentation">{nav.about}</a></li>
          <li><a href="#services">{nav.services}</a></li>
          <li><a href="#projects">{nav.projects}</a></li>
          <li><a href="#contact">{nav.contact}</a></li>
          <li><a href="#faq">{nav.faq}</a></li>
          <li><a href="/cv">{nav.cv}</a></li>
        </ul>
        <div className='nav-actions flex flex-row items-center justify-center gap-4'>
          <a
            className='nav-icon-link'
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact on WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <button
            className='mode-toggle'
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className={`mode-toggle-option ${dark ? 'is-active' : ''}`}>
              <FontAwesomeIcon icon={faMoon} />
              <span className='dark-text'>{nav.dark}</span>
            </span>
            <span className={`mode-toggle-option ${!dark ? 'is-active' : ''}`}>
              <FontAwesomeIcon icon={faSun} />
              <span>{nav.light}</span>
            </span>
          </button>
          <div className='languages-toggle flex flex-row items-center justify-center gap-2'>
            {languages.map(l => {
              return (
                <button key={l} onClick={() => setLang(l)} className={l === lang ? 'active' : ''}>{l}</button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="content">
        <div className="hero-layout">
          <div className="hero-copy">
            <Labels lang={lang} />
            <Presentation lang={lang} />
          </div>
          <FrontendShowcase />
        </div>
      </div>
      <div className='problem-section' id='problems'>
        <Problems lang={lang} />
      </div>
      <div className="services" id='services'>
        <Services lang={lang} />
      </div>
      <div className="projects" id='projects'>
        <Projects lang={lang} />
      </div>
      <div className="steps" id='steps'>
        <Steps lang={lang} />
      </div>
      <div className="work-with-me" id='work-with-me'>
        <WorkWithMe lang={lang} />
      </div>
      <div className="technologies" id='technologies'>
        <Technologies lang={lang} />
      </div>
      <div className="faq" id='faq'>
        <Faq lang={lang} />
      </div>
      <div className="contact" id='contact'>
        <Contact lang={lang} />
      </div>
    </div>
      } />
    </Routes>
  )
}

export default App
