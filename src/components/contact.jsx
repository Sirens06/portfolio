import '../css/contact.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { links } from '../data/links';

const copyByVariant = {
    portfolio: {
        IT: {
            pretitle: null,
            label: "Contatti",
            title: "Cerchi un frontend developer per il tuo team? Parliamone.",
            desc: "Sono aperto a nuove opportunità come Frontend Developer. Il modo più veloce per raggiungermi è via email o LinkedIn, e il mio CV è a un click.",
            email: "Scrivimi una mail",
            cv: "Vedi il CV",
            location: "Roma, Italia",
        },
        EN: {
            pretitle: null,
            label: "Contact",
            title: "Looking for a frontend developer for your team? Let's talk.",
            desc: "I'm open to new Frontend Developer opportunities. The fastest way to reach me is by email or LinkedIn, and my CV is one click away.",
            email: "Send me an email",
            cv: "View CV",
            location: "Rome, Italy",
        },
        FR: {
            pretitle: null,
            label: "Contact",
            title: "Vous cherchez un développeur frontend pour votre équipe ? Parlons-en.",
            desc: "Je suis ouvert à de nouvelles opportunités en tant que Développeur Frontend. Le plus rapide est de m'écrire par email ou sur LinkedIn, et mon CV est à un clic.",
            email: "M'envoyer un email",
            cv: "Voir le CV",
            location: "Rome, Italie",
        },
    },
    freelance: {
        IT: {
            pretitle: "Non sei ancora sicuro di come sta andando il tuo sito? Mandamelo e ti dico cosa sistemare prima.",
            label: "Parliamone",
            title: "Se il tuo sito sembra poco chiaro, datato o semplicemente non abbastanza forte, possiamo sistemarlo.",
            desc: "Mandami il tuo sito o la tua idea e ti aiuto a capire qual è il prossimo passo giusto, senza complicare il processo.",
            primary: "Chiedi su WhatsApp",
            email: "Mandami una mail",
            meta: "Di solito rispondo entro 24 ore lavorative",
            location: "Roma, Italia",
        },
        EN: {
            pretitle: "Still not sure where your website stands? Send it over and I’ll point out what to fix first.",
            label: "Let's talk",
            title: "If your website feels unclear, outdated, or just not strong enough yet, we can fix that.",
            desc: "Send me your website or your idea and I'll help you understand the right next step, without making the process complicated.",
            primary: "Ask on WhatsApp",
            email: "Send me an email",
            meta: "Usually reply within 24 business hours",
            location: "Rome, Italy",
        },
        FR: {
            pretitle: "Vous ne savez pas encore où en est votre site ? Envoyez-le-moi et je vous dirai quoi corriger en premier.",
            label: "Parlons-en",
            title: "Si votre site semble flou, daté ou simplement pas assez fort, on peut le corriger.",
            desc: "Envoyez-moi votre site ou votre idée et je vous aiderai à comprendre la bonne prochaine étape, sans compliquer le processus.",
            primary: "Demander sur WhatsApp",
            email: "M'envoyer un email",
            meta: "Je réponds en général sous 24 heures ouvrées",
            location: "Rome, Italie",
        },
    },
};

function Contact({ lang, variant = 'portfolio' }) {
    const copy = copyByVariant[variant][lang];
    const isPortfolio = variant === 'portfolio';
    const email = isPortfolio ? links.email : links.freelanceEmail;
    const emailHref = isPortfolio
        ? `mailto:${email}`
        : `mailto:${email}?subject=Website%20Project&body=Hi%20Alessandro%2C%20I%27d%20like%20to%20talk%20about%20my%20website.`;

    return (
        <section className="contact-wrapper">
            {copy.pretitle && <p className="contact-pretitle reveal reveal-soft" data-reveal>{copy.pretitle}</p>}

            <div className="contact-card cont-card reveal" data-reveal>
                <div className="contact-copy">
                    <p className="contact-label">{copy.label}</p>
                    <h2 className="contact-title">{copy.title}</h2>
                    <p className="contact-desc">{copy.desc}</p>
                </div>

                {isPortfolio ? (
                    <div className="contact-actions">
                        <a className="contact-button contact-button-primary" href={emailHref}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{copy.email}</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a className="contact-button contact-button-ghost" href={links.linkedin} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <span>LinkedIn</span>
                        </a>
                        <a className="contact-button contact-button-ghost" href={links.github} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </a>
                        <Link className="contact-button contact-button-ghost" to="/cv">
                            <FontAwesomeIcon icon={faFileLines} />
                            <span>{copy.cv}</span>
                        </Link>
                    </div>
                ) : (
                    <div className="contact-actions">
                        <a className="contact-button contact-button-primary" href={links.whatsapp} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <span>{copy.primary}</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a className="contact-button contact-button-ghost" href={emailHref}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{copy.email}</span>
                        </a>
                    </div>
                )}

                <p className="contact-meta">
                    {copy.meta && <>{copy.meta} — </>}
                    <a href={`mailto:${email}`}>{email}</a> — {copy.location}
                </p>
            </div>
        </section>
    );
}

export default Contact;
