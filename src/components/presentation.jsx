import { Link } from 'react-router-dom';

const A = ({ children }) => <span className="text-accent">{children}</span>;

const copyByVariant = {
    // Recruiter / company view
    portfolio: {
        IT: {
            title: <>Ciao, sono Alessandro. Sviluppo <A>interfacce web</A> pulite, responsive e <A>pensate per chi le usa</A>.</>,
            desc: "Frontend Developer con esperienza in PwC e Sibylla, dove ho sviluppato web app per HR, finance, fashion e hospitality. Tengo a interfacce chiare, accessibili e a codice su cui un team può continuare a costruire.",
            cta: "Guarda il mio CV",
            work: "Vedi i progetti",
            trust: ["✓ Attualmente in Sibylla S.r.l.", "✓ In precedenza Frontend Developer in PwC", "✓ Italiano · Inglese · Francese"],
        },
        EN: {
            title: <>Hi, I'm Alessandro. I build <A>clean, responsive interfaces</A> for <A>real products</A>.</>,
            desc: "Frontend Developer with experience at PwC and Sibylla, building web apps for HR, finance, fashion and hospitality. I care about clear UI, accessibility and code a team can keep building on.",
            cta: "View my CV",
            work: "See my projects",
            trust: ["✓ Currently at Sibylla S.r.l.", "✓ Previously Frontend Developer at PwC", "✓ Italian · English · French"],
        },
        FR: {
            title: <>Salut, je suis Alessandro. Je crée des <A>interfaces web</A> propres et responsives pour de <A>vrais produits</A>.</>,
            desc: "Développeur Frontend avec une expérience chez PwC et Sibylla, sur des web apps RH, finance, mode et hospitality. J'attache de l'importance à des interfaces claires, accessibles et à un code sur lequel une équipe peut continuer à construire.",
            cta: "Voir mon CV",
            work: "Voir mes projets",
            trust: ["✓ Actuellement chez Sibylla S.r.l.", "✓ Auparavant Développeur Frontend chez PwC", "✓ Italien · Anglais · Français"],
        },
    },
    // Client / freelance view (original copy)
    freelance: {
        IT: {
            title: <>Realizzo <A>siti web</A> curati e <A>esperienze frontend</A> che aiutano le attività a sembrare più moderne online.</>,
            desc: "Lavoro con brand, freelance e piccoli team per creare esperienze web responsive con interfacce pulite, struttura chiara e una presenza visiva forte.",
            cta: "Contattami",
            work: "Guarda cosa ho realizzato",
            trust: ["✓ Due call introduttive gratuite per iniziare", "✓ Preventivo chiaro entro 48 ore", "✓ Prima versione pronta in 1-3 settimane"],
        },
        EN: {
            title: <>I build polished <A>websites</A> and <A>frontend experiences</A> that help businesses feel more modern online.</>,
            desc: "I work with brands, freelancers, and small teams to create responsive web experiences with clean UI, thoughtful structure, and a strong visual presence.",
            cta: "Get in Touch",
            work: "Look what I made",
            trust: ["✓ Two free intro calls to get started", "✓ Clear quote within 48 hours", "✓ First version ready in 1-3 weeks"],
        },
        FR: {
            title: <>Je crée des <A>sites web</A> soignés et des <A>expériences frontend</A> qui aident les entreprises à paraître plus modernes en ligne.</>,
            desc: "Je travaille avec des marques, des freelances et de petites équipes pour créer des expériences web responsive avec une interface propre, une structure claire et une vraie présence visuelle.",
            cta: "Me contacter",
            work: "Voir mes projets",
            trust: ["✓ Deux appels de découverte gratuits pour commencer", "✓ Devis clair sous 48 heures", "✓ Première version prête en 1 à 3 semaines"],
        },
    },
};

const primaryClass = "inline-flex items-center justify-center gap-[0.55rem] bg-accent text-[#f7f7ff] px-[1.2rem] py-[0.75rem] border border-transparent rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)] no-underline transition-colors hover:bg-accent-strong";
const secondaryClass = "hero-secondary-button inline-flex items-center justify-center gap-[0.55rem] border border-[color-mix(in_srgb,var(--color-accent)_72%,white_28%)] px-[1.2rem] py-[0.75rem] rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)] no-underline";

function Presentation({ lang, variant = 'portfolio' }) {
    const copy = copyByVariant[variant][lang];
    const isPortfolio = variant === 'portfolio';

    return (
        <div className="mt-[1.6rem] max-w-[58rem] reveal" data-reveal id="presentation">
            <h1 className="hero-title w-full max-w-[12ch] m-0 text-[color-mix(in_srgb,var(--color-on-surface)_92%,white_8%)] font-display text-[length:var(--font-size-hero)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {copy.title}
            </h1>
            <p className="w-full max-w-[36rem] mt-[1.4rem] mb-0 text-[color-mix(in_srgb,var(--color-on-surface)_72%,var(--color-surface)_28%)] font-display text-[length:var(--font-size-body)] font-normal leading-[1.7] tracking-[-0.02em]">
                {copy.desc}
            </p>

            <div className="hero-buttons flex flex-wrap items-center gap-[1rem] mt-[2.2rem]">
                {isPortfolio ? (
                    <Link className={primaryClass} to="/cv">
                        {copy.cta} <span aria-hidden="true">→</span>
                    </Link>
                ) : (
                    <a className={primaryClass} href="#contact">
                        {copy.cta} <span aria-hidden="true">→</span>
                    </a>
                )}
                <a className={secondaryClass} href="#projects">
                    {copy.work}
                </a>
            </div>

            <ul className="hero-trust grid grid-cols-3 items-start gap-y-[0.6rem] gap-x-[1.5rem] mt-[1.6rem] p-0 list-none text-[color-mix(in_srgb,var(--color-on-surface)_68%,var(--color-surface)_32%)] font-display text-[0.8rem] font-medium tracking-[-0.02em]">
                {copy.trust.map((item) => (
                    <li className="block min-w-0 whitespace-normal leading-[1.55]" key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Presentation;
