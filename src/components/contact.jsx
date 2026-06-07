import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Contact({ lang }) {
    const whatsappHref = 'https://wa.me/393000000000?text=Hi%20Alessandro%2C%20I%27d%20like%20to%20talk%20about%20my%20website.';
    const emailHref = 'mailto:arutini91@gmail.com?subject=Website%20Project&body=Hi%20Alessandro%2C%20I%27d%20like%20to%20talk%20about%20my%20website.';
    const copy = {
        IT: {
            pretitle: "Non sei ancora sicuro di come sta andando il tuo sito? Mandamelo e ti dico cosa sistemare prima.",
            label: "Parliamone",
            title: "Se il tuo sito sembra poco chiaro, datato o semplicemente non abbastanza forte, possiamo sistemarlo.",
            desc: "Mandami il tuo sito o la tua idea e ti aiuto a capire qual e il prossimo passo giusto, senza complicare il processo.",
            primary: "Chiedi su WhatsApp",
            email: "Mandami una mail",
            meta: "Di solito rispondo entro 24 ore lavorative"
        },
        EN: {
            pretitle: "Still not sure where your website stands? Send it over and I’ll point out what to fix first.",
            label: "Let's talk",
            title: "If your website feels unclear, outdated, or just not strong enough yet, we can fix that.",
            desc: "Send me your website or your idea and I'll help you understand the right next step, without making the process complicated.",
            primary: "Ask on WhatsApp",
            email: "Send me an email",
            meta: "Usually reply within 24 business hours"
        },
        FR: {
            pretitle: "Vous ne savez pas encore ou en est votre site ? Envoyez le moi et je vous dirai quoi corriger en premier.",
            label: "Parlons en",
            title: "Si votre site semble flou, date ou simplement pas assez fort, on peut le corriger.",
            desc: "Envoyez moi votre site ou votre idee et je vous aiderai a comprendre la bonne prochaine etape, sans compliquer le processus.",
            primary: "Demander sur WhatsApp",
            email: "M envoyer un email",
            meta: "Je reponds en general sous 24 heures ouvrées"
        }
    }[lang];

    return (
        <section className="contact-wrapper">
            <p className="contact-pretitle reveal reveal-soft" data-reveal>{copy.pretitle}</p>

            <div className="contact-card cont-card reveal" data-reveal id="contact">
                <div className="contact-copy">
                    <p className="contact-label">{copy.label}</p>
                    <h2 className="contact-title">{copy.title}</h2>
                    <p className="contact-desc">{copy.desc}</p>
                </div>

                <div className="contact-actions">
                    <a className="contact-button contact-button-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>{copy.primary}</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <a className="contact-button contact-button-ghost" href={emailHref}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>{copy.email}</span>
                    </a>
                </div>

                <p className="contact-meta">
                    {copy.meta} — <a href="mailto:arutini91@gmail.com">arutini91@gmail.com</a> — Rome, Italy
                </p>
            </div>
        </section>
    );
}

export default Contact;
