import '../css/steps.css'

function Steps({ lang }) {
    const copy = {
        IT: {
            eyebrow: "Come lavoriamo insieme",
            intro: "Un processo semplice pensato per mantenere tutto chiaro, collaborativo e facile da portare avanti.",
            steps: [
                { id: 1, name: "Call iniziale veloce", desc: "Partiamo con una conversazione semplice sul tuo business, sui tuoi obiettivi e su cio che il sito deve davvero fare." },
                { id: 2, name: "Scope e preventivo", desc: "Trasformo quella prima chiamata in una proposta chiara con tempi, prezzo e perimetro giusto per il progetto." },
                { id: 3, name: "Direzione creativa", desc: "Una volta allineati, definisco struttura e direzione visiva cosi che il sito sia chiaro, moderno e focalizzato." },
                { id: 4, name: "Sviluppo e rifinitura", desc: "Sviluppo il sito in modo responsive, condivido i progressi e rifinisco i dettagli finche tutto non e solido." },
                { id: 5, name: "Pubblicazione e handoff", desc: "Quando tutto e pronto pubblichiamo il progetto e ti lascio una consegna pulita con i prossimi passi." },
            ]
        },
        EN: {
            eyebrow: "What working together looks like",
            intro: "A simple process designed to keep things clear, collaborative, and easy to move forward with.",
            steps: [
                { id: 1, name: "Quick intro call", desc: "We start with a simple conversation about your business, your goals, and what the website actually needs to do." },
                { id: 2, name: "Scope and quote", desc: "I turn that first conversation into a clear proposal with timeline, price, and the right scope for your project." },
                { id: 3, name: "Design direction", desc: "Once we align, I shape the structure and visual direction so the site feels clear, modern, and focused." },
                { id: 4, name: "Build and refine", desc: "I develop the site responsively, share progress with you, and refine the details until everything feels solid." },
                { id: 5, name: "Launch and handoff", desc: "When everything is ready, we publish the project and I leave you with a clean handoff and next-step guidance." },
            ]
        },
        FR: {
            eyebrow: "Comment se passe la collaboration",
            intro: "Un processus simple pense pour garder le projet clair, collaboratif et facile a faire avancer.",
            steps: [
                { id: 1, name: "Premier appel rapide", desc: "Nous commencons par une conversation simple sur votre activite, vos objectifs et ce que le site doit vraiment accomplir." },
                { id: 2, name: "Perimetre et devis", desc: "Je transforme ce premier echange en une proposition claire avec delais, prix et bon perimetre de travail." },
                { id: 3, name: "Direction design", desc: "Une fois alignes, je definis la structure et la direction visuelle pour que le site soit clair, moderne et concentre." },
                { id: 4, name: "Creation et ajustements", desc: "Je developpe le site en responsive, je partage l avancement et j affine les details jusqu a ce que tout soit solide." },
                { id: 5, name: "Mise en ligne et passation", desc: "Quand tout est pret, nous mettons le projet en ligne et je vous laisse une passation propre avec les prochaines etapes." },
            ]
        }
    }[lang];

    return (
        <div>
            <div className='cont-eyebrows reveal reveal-soft' data-reveal>{copy.eyebrow}</div>
            <div className='cont-desc reveal' data-reveal>{copy.intro}</div>
            <div className="steps-list">
                {copy.steps.map((step, index) => (
                    <div
                        key={index}
                        className="step-item cont-card reveal problem-item"
                        data-reveal
                        style={{ '--reveal-delay': `${index * 100}ms` }}
                    >
                        <div className="step-number cont-eyebrows">{step.id}</div>
                        <div className='step-right'>
                            <p className="step-name">{step.name}</p>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps
