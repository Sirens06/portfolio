function WorkWithMe({ lang }) {
    const copy = {
        IT: {
            eyebrow: "Perche piace lavorare con me",
            intro: "Mi concentro su siti che risultano chiari, moderni e facili da percepire come affidabili. L obiettivo non e solo fare qualcosa di bello, ma qualcosa che aiuti il business a comunicare meglio e porti le persone ad agire.",
            points: [
                { id: 1, name: "Comunicazione chiara", desc: "Sai sempre a che punto e il progetto, cosa succede dopo e cosa aspettarti da me." },
                { id: 2, name: "Lavoro su misura, non da template", desc: "Costruisco attorno al tuo business, ai tuoi obiettivi e alla sensazione che vuoi trasmettere a chi arriva sul sito." },
                { id: 3, name: "Frontend attento e responsive", desc: "Realizzo siti veloci, responsive e facili da mantenere, usando strumenti moderni e buone pratiche." },
                { id: 4, name: "Un processo semplice", desc: "Mi piace mantenere i progetti strutturati, collaborativi e facili da portare avanti, anche se non sei tecnico." }
            ]
        },
        EN: {
            eyebrow: "Why clients like working with me",
            intro: "I focus on building websites that feel clear, modern, and easy to trust. The goal is not just to make something nice to look at, but something that helps your business communicate better and move people to act.",
            points: [
                { id: 1, name: "Clear communication", desc: "You always know what stage the project is in, what happens next, and what to expect from me." },
                { id: 2, name: "Custom work, not template-looking work", desc: "I build around your business, your goals, and the feeling you want people to get when they land on your site." },
                { id: 3, name: "Responsive and thoughtful frontend", desc: "I build sites that are fast, responsive, and easy to maintain. I use modern tools and best practices to make sure everything feels solid." },
                { id: 4, name: "A process that stays simple", desc: "I like keeping projects structured, collaborative, and easy to move forward with, even if you are not technical." }
            ]
        },
        FR: {
            eyebrow: "Pourquoi les clients aiment travailler avec moi",
            intro: "Je me concentre sur des sites clairs, modernes et faciles a juger fiables. Le but n est pas seulement de creer quelque chose de beau, mais quelque chose qui aide votre activite a mieux communiquer et a faire passer a l action.",
            points: [
                { id: 1, name: "Communication claire", desc: "Vous savez toujours ou en est le projet, ce qui vient ensuite et ce que vous pouvez attendre de moi." },
                { id: 2, name: "Du sur-mesure, pas un rendu template", desc: "Je construis autour de votre activite, de vos objectifs et de l impression que vous voulez transmettre." },
                { id: 3, name: "Un frontend soigne et responsive", desc: "Je cree des sites rapides, responsive et faciles a maintenir avec des outils modernes et de bonnes pratiques." },
                { id: 4, name: "Un processus simple", desc: "J aime garder les projets structures, collaboratifs et faciles a faire avancer, meme si vous n etes pas technique." }
            ]
        }
    }[lang];

    return (
        <div>
            <div className="mt-[1.8rem] mb-0 text-text-muted font-display text-base font-medium tracking-[1px] uppercase reveal reveal-soft" data-reveal>
                {copy.eyebrow}
            </div>
            <div className="mt-[0.8rem] mb-[2rem] text-[color-mix(in_srgb,var(--color-accent)_68%,var(--color-surface)_32%)] font-display text-[1.75rem] font-semibold w-[min(60%,50rem)] leading-[1.5] tracking-[-0.2px] reveal reveal-soft" data-reveal>
                {copy.intro}
            </div>
            <div className="grid grid-cols-4 gap-6 items-stretch [grid-auto-rows:1fr] max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1 reveal reveal-soft" data-reveal>
                {copy.points.map((point, index) => (
                    <div key={index} className="cont-card flex flex-col h-full p-5">
                        <div className="flex flex-col flex-1 w-full gap-[0.2rem]">
                            <div className="m-0 font-semibold leading-[1.35] mb-3 text-[color-mix(in_srgb,var(--color-on-surface)_92%,white_8%)] font-display text-[clamp(1.35rem,1.2rem+0.5vw,1.7rem)] tracking-[-0.04em]">
                                {point.name}
                            </div>
                            <div className="m-0 w-[min(100%,34ch)] leading-[1.7] text-wrap-pretty text-[color-mix(in_srgb,var(--color-on-surface)_80%,var(--color-surface)_20%)] text-[0.98rem]">
                                {point.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkWithMe;
