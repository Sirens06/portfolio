function Problems({ lang }) {
    const copy = {
        IT: {
            eyebrow: "Dove posso aiutarti",
            intro: "Se ti ritrovi in una di queste situazioni, il tuo sito ha bisogno di piu di un po di estetica: ha bisogno di struttura e direzione.",
            problems: [
                { id: 1, title: 'Il tuo sito e carino, ma non resta impresso', description: 'Le persone arrivano, scorrono un po e vanno via senza un vero motivo per restare o contattarti.' },
                { id: 2, title: 'Hai servizi validi, ma il messaggio non e chiaro', description: 'Quello che fai ha valore, ma il sito non lo spiega in modo semplice e non guida le persone all azione.' },
                { id: 3, title: 'La tua immagine online e sparsa ovunque', description: 'Social, vecchio sito e visual incoerenti fanno sembrare il business meno solido di quanto sia davvero.' },
                { id: 4, title: 'Ripeti sempre le stesse risposte', description: 'Prezzi, servizi, disponibilita e prossimi passi tornano continuamente perche il sito non fa abbastanza di questo lavoro.' },
                { id: 5, title: 'Vuoi qualcosa di piu personale di un template', description: 'Ti serve un sito che sembri davvero tuo, non qualcosa che assomiglia a tutti gli altri.' },
                { id: 6, title: 'La tua attivita e cresciuta, il sito no', description: 'La qualita del tuo lavoro e migliorata, ma la tua presenza online racconta ancora una versione piu vecchia di te.' }
            ]
        },
        EN: {
            eyebrow: "Where I Can Help",
            intro: "If any of this feels close to home, your website needs more than polish — it needs purpose and structure.",
            problems: [
                { id: 1, title: 'Your website looks decent but feels forgettable', description: 'People visit, scroll a little, and leave without a clear reason to stay or get in touch.' },
                { id: 2, title: 'You have services to offer, but the message feels unclear', description: 'What you do is real, but the website does not explain it simply or guide people to act.' },
                { id: 3, title: 'Your online image feels split across too many places', description: 'A few social pages, an old site, and inconsistent visuals make the business feel less solid than it is.' },
                { id: 4, title: 'You spend too much time answering the same questions', description: 'Pricing, services, availability, and next steps keep coming back because the site does not do enough of that work.' },
                { id: 5, title: 'You want something more custom than a template', description: "You need a site that feels aligned with your brand, not something that looks like everyone else's." },
                { id: 6, title: 'You know your business has grown, but the website has not', description: 'The quality of your work improved, but your online presence still reflects an older version of you.' }
            ]
        },
        FR: {
            eyebrow: "Ou je peux vous aider",
            intro: "Si l une de ces situations vous parle, votre site a besoin de plus qu une simple mise en forme : il a besoin de structure et d intention.",
            problems: [
                { id: 1, title: 'Votre site est correct mais peu memorable', description: 'Les gens arrivent, font defiler un peu, puis repartent sans vraie raison de rester ou de vous contacter.' },
                { id: 2, title: 'Vous avez des services a proposer, mais le message reste flou', description: 'Ce que vous faites a de la valeur, mais le site ne l explique pas simplement et ne guide pas a l action.' },
                { id: 3, title: 'Votre image en ligne est trop dispersee', description: 'Quelques reseaux sociaux, un ancien site et des visuels incoherents rendent l activite moins solide qu elle ne l est.' },
                { id: 4, title: 'Vous repondez trop souvent aux memes questions', description: 'Prix, services, disponibilite et prochaines etapes reviennent sans cesse parce que le site ne fait pas assez ce travail.' },
                { id: 5, title: 'Vous voulez quelque chose de plus personnel qu un template', description: 'Il vous faut un site aligne sur votre marque, pas quelque chose qui ressemble a tout le monde.' },
                { id: 6, title: 'Votre activite a evolue, mais pas votre site', description: 'La qualite de votre travail a progresse, mais votre presence en ligne raconte encore une ancienne version de vous.' }
            ]
        }
    }[lang];

    return (
        <div>
            <h1 className="mt-[1.8rem] mb-0 text-text-muted font-display text-base font-medium tracking-[1px] uppercase reveal reveal-soft" data-reveal>
                {copy.eyebrow}
            </h1>
            <p className="mt-[0.8rem] mb-[2rem] text-[color-mix(in_srgb,var(--color-accent)_68%,var(--color-surface)_32%)] font-display text-[1.75rem] font-semibold w-[min(60%,50rem)] leading-[1.5] tracking-[-0.2px] reveal" data-reveal>
                {copy.intro}
            </p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-6 items-stretch list-none p-0 m-0">
                {copy.problems.map(p => (
                    <li
                        key={p.id}
                        className="border border-[var(--border)] rounded-lg flex flex-col items-start justify-start p-6 gap-2 transition-transform duration-[400ms] ease-in-out min-h-[170px] hover:-translate-y-1 reveal"
                        data-reveal
                        style={{ '--reveal-delay': `${p.id * 80}ms` }}
                    >
                        <h2 className="text-base font-display font-semibold text-text-muted self-start m-0">{p.title}</h2>
                        <p className="text-[0.65rem] font-mono text-[color-mix(in_srgb,var(--color-on-surface)_68%,var(--color-surface)_32%)] m-0">{p.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Problems;
