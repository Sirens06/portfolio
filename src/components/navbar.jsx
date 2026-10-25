import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { links } from '../data/links';

const navCopy = {
    IT: {
        portfolio: 'Portfolio', freelance: 'Freelance',
        about: 'Chi sono', experience: 'Esperienza', projects: 'Progetti', skills: 'Competenze',
        services: 'Servizi', process: 'Processo', faq: 'FAQ', contact: 'Contatti', cv: 'CV',
        dark: 'Scuro', light: 'Chiaro', menu: 'Apri menu', close: 'Chiudi menu', views: 'Scegli sezione',
    },
    EN: {
        portfolio: 'Portfolio', freelance: 'Freelance',
        about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills',
        services: 'Services', process: 'Process', faq: 'FAQ', contact: 'Contact', cv: 'CV',
        dark: 'Dark', light: 'Light', menu: 'Open menu', close: 'Close menu', views: 'Choose view',
    },
    FR: {
        portfolio: 'Portfolio', freelance: 'Freelance',
        about: 'À propos', experience: 'Expérience', projects: 'Projets', skills: 'Compétences',
        services: 'Services', process: 'Processus', faq: 'FAQ', contact: 'Contact', cv: 'CV',
        dark: 'Sombre', light: 'Clair', menu: 'Ouvrir le menu', close: 'Fermer le menu', views: 'Choisir la vue',
    },
};

function Navbar({ lang, setLang, languages, dark, toggleDark }) {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const isFreelance = pathname.startsWith('/freelance');
    const t = navCopy[lang];

    // Close the mobile menu with Escape.
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const sectionLinks = isFreelance
        ? [
            { href: '#services', label: t.services },
            { href: '#projects', label: t.projects },
            { href: '#steps', label: t.process },
            { href: '#faq', label: t.faq },
            { href: '#contact', label: t.contact },
        ]
        : [
            { href: '#presentation', label: t.about },
            { href: '#experience', label: t.experience },
            { href: '#projects', label: t.projects },
            { href: '#technologies', label: t.skills },
            { href: '#contact', label: t.contact },
        ];

    const socials = isFreelance
        ? [{ href: links.whatsapp, icon: faWhatsapp, label: 'WhatsApp', className: 'is-whatsapp' }]
        : [
            { href: links.linkedin, icon: faLinkedinIn, label: 'LinkedIn', className: '' },
            { href: links.github, icon: faGithub, label: 'GitHub', className: '' },
        ];

    return (
        <header className={`navbar ${open ? 'is-open' : ''}`}>
            <div className="navbar-bar">
                <a href="#top" className="nav-brand" aria-label="Alessandro Rutini — top">AR</a>

                <div className="view-switch" role="tablist" aria-label={t.views}>
                    <NavLink to="/" end onClick={() => setOpen(false)} role="tab" aria-selected={!isFreelance} className={`view-switch-option ${!isFreelance ? 'is-active' : ''}`}>
                        {t.portfolio}
                    </NavLink>
                    <NavLink to="/freelance" onClick={() => setOpen(false)} role="tab" aria-selected={isFreelance} className={`view-switch-option ${isFreelance ? 'is-active' : ''}`}>
                        {t.freelance}
                    </NavLink>
                </div>

                <button
                    className="nav-menu-button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    aria-controls="nav-panel"
                    aria-label={open ? t.close : t.menu}
                >
                    <FontAwesomeIcon icon={open ? faXmark : faBars} />
                </button>
            </div>

            <div className="nav-panel" id="nav-panel">
                <ul className="nav-links">
                    {sectionLinks.map((l) => (
                        <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
                    ))}
                    <li><Link to="/cv">{t.cv}</Link></li>
                </ul>

                <div className="nav-actions">
                    {socials.map((s) => (
                        <a key={s.label} className={`nav-icon-link ${s.className}`} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                            <FontAwesomeIcon icon={s.icon} />
                        </a>
                    ))}
                    <button
                        className="mode-toggle"
                        onClick={toggleDark}
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <span className={`mode-toggle-option ${dark ? 'is-active' : ''}`}>
                            <FontAwesomeIcon icon={faMoon} />
                            <span className="mode-toggle-text">{t.dark}</span>
                        </span>
                        <span className={`mode-toggle-option ${!dark ? 'is-active' : ''}`}>
                            <FontAwesomeIcon icon={faSun} />
                            <span className="mode-toggle-text">{t.light}</span>
                        </span>
                    </button>
                    <div className="languages-toggle">
                        {languages.map((l) => (
                            <button key={l} onClick={() => setLang(l)} className={`mode-toggle-option ${l === lang ? 'is-active' : ''}`} aria-pressed={l === lang}>
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
