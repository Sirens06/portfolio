function Presentation({ lang }) {
    const copy = {
        IT: {
            title: <>Realizzo <span className="important">siti web</span> curati e <span className="important">esperienze frontend</span> che aiutano le attivita a sembrare piu moderne online.</>,
            desc: "Lavoro con brand, freelance e piccoli team per creare esperienze web responsive con interfacce pulite, struttura chiara e una presenza visiva forte.",
            cta: "Contattami",
            work: "Guarda cosa ho realizzato",
            trust: ["✓ Due call introduttive gratuite per iniziare", "✓ Preventivo chiaro entro 48 ore", "✓ Prima versione pronta in 1-3 settimane"],
        },
        EN: {
            title: <>I build polished <span className="important">websites</span> and <span className="important">frontend experiences</span> that help businesses feel more modern online.</>,
            desc: "I work with brands, freelancers, and small teams to create responsive web experiences with clean UI, thoughtful structure, and a strong visual presence.",
            cta: "Get in Touch",
            work: "Look what I made",
            trust: ["✓ Two free intro calls to get started", "✓ Clear quote within 48 hours", "✓ First version ready in 1-3 weeks"],
        },
        FR: {
            title: <>Je cree des <span className="important">sites web</span> soignes et des <span className="important">experiences frontend</span> qui aident les entreprises a paraitre plus modernes en ligne.</>,
            desc: "Je travaille avec des marques, des freelances et de petites equipes pour creer des experiences web responsive avec une interface propre, une structure claire et une vraie presence visuelle.",
            cta: "Me contacter",
            work: "Voir mes projets",
            trust: ["✓ Deux appels de decouverte gratuits pour commencer", "✓ Devis clair sous 48 heures", "✓ Premiere version prete en 1 a 3 semaines"],
        },
    }[lang];

    return (
        <div className="presentation reveal" data-reveal id="presentation">
            <h1 className="presentation-title">{copy.title}</h1>
            <p className="presentation-description">{copy.desc}</p>

            <div className="buttons-container">
                <button className="presentation-button primary-button">{copy.cta} <span aria-hidden="true">→</span></button>
                <a className="works-made" href="#projects">{copy.work}</a>
            </div>

            <div className="trust-points">
                {copy.trust.map((item) => <span key={item}>{item}</span>)}
            </div>
        </div>
    );
}

export default Presentation;
