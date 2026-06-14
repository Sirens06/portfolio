function Presentation({ lang }) {
    const copy = {
        IT: {
            title: <>Realizzo <span className="text-accent">siti web</span> curati e <span className="text-accent">esperienze frontend</span> che aiutano le attivita a sembrare piu moderne online.</>,
            desc: "Lavoro con brand, freelance e piccoli team per creare esperienze web responsive con interfacce pulite, struttura chiara e una presenza visiva forte.",
            cta: "Contattami",
            work: "Guarda cosa ho realizzato",
            trust: ["✓ Due call introduttive gratuite per iniziare", "✓ Preventivo chiaro entro 48 ore", "✓ Prima versione pronta in 1-3 settimane"],
        },
        EN: {
            title: <>I build polished <span className="text-accent">websites</span> and <span className="text-accent">frontend experiences</span> that help businesses feel more modern online.</>,
            desc: "I work with brands, freelancers, and small teams to create responsive web experiences with clean UI, thoughtful structure, and a strong visual presence.",
            cta: "Get in Touch",
            work: "Look what I made",
            trust: ["✓ Two free intro calls to get started", "✓ Clear quote within 48 hours", "✓ First version ready in 1-3 weeks"],
        },
        FR: {
            title: <>Je cree des <span className="text-accent">sites web</span> soignes et des <span className="text-accent">experiences frontend</span> qui aident les entreprises a paraitre plus modernes en ligne.</>,
            desc: "Je travaille avec des marques, des freelances et de petites equipes pour creer des experiences web responsive avec une interface propre, une structure claire et une vraie presence visuelle.",
            cta: "Me contacter",
            work: "Voir mes projets",
            trust: ["✓ Deux appels de decouverte gratuits pour commencer", "✓ Devis clair sous 48 heures", "✓ Premiere version prete en 1 a 3 semaines"],
        },
    }[lang];

    return (
        <div className="mt-[1.6rem] max-w-[58rem] reveal" data-reveal id="presentation">
            <h1 className="w-full max-w-[12ch] m-0 text-[color-mix(in_srgb,var(--color-on-surface)_92%,white_8%)] font-display text-[length:var(--font-size-hero)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {copy.title}
            </h1>
            <p className="w-full max-w-[36rem] mt-[1.4rem] mb-0 text-[color-mix(in_srgb,var(--color-on-surface)_72%,var(--color-surface)_28%)] font-display text-[length:var(--font-size-ui)] font-normal leading-[1.7] tracking-[-0.02em]">
                {copy.desc}
            </p>

            <div className="flex flex-wrap items-center gap-[1.2rem] mt-[2.4rem]">
                <button className="inline-flex items-center gap-[0.55rem] bg-accent text-[#f7f7ff] px-[1.2rem] py-[0.75rem] border border-transparent rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)]">
                    {copy.cta} <span aria-hidden="true">→</span>
                </button>
                <a className="inline-flex items-center justify-center gap-[0.55rem] text-[#f7f7ff] border border-[color-mix(in_srgb,var(--color-accent)_72%,white_28%)] bg-[color-mix(in_srgb,var(--app-surface)_82%,black_18%)] px-[1.2rem] py-[0.75rem] rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)] no-underline" href="#projects">
                    {copy.work}
                </a>
            </div>

            <div className="grid grid-cols-3 items-start gap-y-[0.85rem] gap-x-[1.5rem] mt-[1.6rem] text-[color-mix(in_srgb,var(--color-on-surface)_68%,var(--color-surface)_32%)] font-display text-[0.75rem] font-medium tracking-[-0.02em]">
                {copy.trust.map((item) => (
                    <span className="block min-w-0 whitespace-normal leading-[1.55]" key={item}>{item}</span>
                ))}
            </div>
        </div>
    );
}

export default Presentation;
