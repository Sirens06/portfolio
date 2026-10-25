import { Link } from 'react-router-dom';

const copy = {
    IT: {
        label: "Anche freelance",
        text: "Lavoro anche come freelance con piccole attività e professionisti: siti, landing page e restyling.",
        cta: "Scopri servizi e pacchetti",
    },
    EN: {
        label: "Also freelance",
        text: "I also work freelance with small businesses and professionals: websites, landing pages and redesigns.",
        cta: "See services & packages",
    },
    FR: {
        label: "Aussi en freelance",
        text: "Je travaille aussi en freelance avec des petites entreprises et des indépendants : sites, landing pages et refontes.",
        cta: "Voir services et formules",
    },
};

// Small bridge from the Portfolio tab to the Freelance tab.
function FreelanceTeaser({ lang }) {
    const t = copy[lang];
    return (
        <div className="freelance-teaser reveal reveal-soft" data-reveal>
            <div>
                <p className="freelance-teaser-label">{t.label}</p>
                <p className="freelance-teaser-text">{t.text}</p>
            </div>
            <Link className="freelance-teaser-link" to="/freelance">
                {t.cta} <span aria-hidden="true">→</span>
            </Link>
        </div>
    );
}

export default FreelanceTeaser;
