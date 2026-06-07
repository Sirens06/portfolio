import '../css/workWithMe.css';

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
            <div className="cont-eyebrows reveal reveal-soft" data-reveal>{copy.eyebrow}</div>
            <div className="cont-desc reveal reveal-soft" data-reveal>{copy.intro}</div>
            <div className="trust-points reveal reveal-soft" data-reveal>
                {copy.points.map((point, index) => (
                    <div key={index} className="trust-point cont-card">
                        <div className='trust-right'>
                            <div className="trust-name project-desc">{point.name}</div>
                            <div className="trust-desc">{point.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkWithMe
