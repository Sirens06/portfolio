import '../css/faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Faq({ lang }) {
    const copy = {
        IT: {
            eyebrow: "Domande frequenti",
            intro: "Qui trovi alcune delle domande che mi fanno piu spesso. Se hai altri dubbi, scrivimi pure.",
            items: [
                { id: 1, question: "Quanto costa di solito un progetto?", answer: "Ogni progetto viene valutato in base a obiettivi, complessita e perimetro, ma cerco sempre di mantenere i prezzi chiari fin dall inizio. Dopo una prima call posso darti una stima concreta senza confusione." },
                { id: 2, question: "Quanto tempo serve per realizzare un sito?", answer: "I progetti piu piccoli possono essere pronti in circa una settimana, mentre i siti piu completi richiedono di solito qualche settimana. Dipende da dimensione del progetto, velocita dei feedback e contenuti gia pronti." },
                { id: 3, question: "Di cosa hai bisogno prima di iniziare?", answer: "Di solito mi servono una visione chiara del business, degli obiettivi, delle pagine necessarie e di eventuali contenuti o riferimenti gia disponibili. Se manca qualcosa, posso aiutarti a organizzarlo." },
                { id: 4, question: "Ti occupi solo di design o anche di sviluppo?", answer: "Mi concentro soprattutto su design e sviluppo frontend, quindi costruisco la parte visiva e interattiva del sito. Se il progetto richiede altro, posso aiutarti a definire i prossimi passi giusti." },
                { id: 5, question: "Puoi aiutarmi con hosting, dominio o messa online?", answer: "Si. Posso guidarti nel processo di pubblicazione e aiutarti con la parte pratica per mettere il sito online, anche se non lo hai mai fatto prima." },
                { id: 6, question: "Cosa succede dopo che il sito e finito?", answer: "A progetto concluso faccio un handoff pulito e mi assicuro che tu sappia bene cosa fare dopo. Se serve, possiamo anche valutare aggiornamenti o migliorie successive." }
            ]
        },
        EN: {
            eyebrow: "Frequently Asked Questions",
            intro: "Here are some of the questions I get asked most often. If you have any other questions, feel free to reach out.",
            items: [
                { id: 1, question: "How much does a project usually cost?", answer: "Every project is quoted based on scope, goals, and complexity, but I always try to keep pricing clear from the start. After a first conversation, I can give you a proper estimate with no confusion." },
                { id: 2, question: "How long does it take to build a website?", answer: "Smaller projects can be ready in about one week, while more complete websites usually take a few weeks. The timeline depends on the size of the project, feedback speed, and how much content is already prepared." },
                { id: 3, question: "What do you need from me before we start?", answer: "Usually I need a clear idea of your business, your goals, the pages you need, and any content or references you already have. If some of that is missing, I can still help you organize it." },
                { id: 4, question: "Do you only work on design or also development?", answer: "I mainly focus on frontend design and development, which means I build the visual and interactive part of the website. If the project needs extra technical work, I can help define the right next steps." },
                { id: 5, question: "Can you help with hosting, domain, or putting the site online?", answer: "Yes. I can guide you through the launch process and help with the practical side of getting the website online, even if you have never done it before." },
                { id: 6, question: "What happens after the website is finished?", answer: "Once the project is complete, I deliver a clean handoff and make sure you know what comes next. If needed, we can also discuss future updates or improvements separately." }
            ]
        },
        FR: {
            eyebrow: "Questions frequentes",
            intro: "Voici quelques questions que l on me pose souvent. Si vous en avez d autres, n hésitez pas a me contacter.",
            items: [
                { id: 1, question: "Combien coute en general un projet ?", answer: "Chaque projet est chiffre selon son perimetre, ses objectifs et sa complexite, mais je fais toujours en sorte que le prix soit clair des le depart. Apres un premier echange, je peux vous donner une estimation concrete." },
                { id: 2, question: "Combien de temps faut il pour creer un site ?", answer: "Les projets les plus simples peuvent etre prets en environ une semaine, tandis que les sites plus complets prennent souvent quelques semaines. Tout depend de la taille du projet, de la rapidite des retours et des contenus deja disponibles." },
                { id: 3, question: "De quoi as tu besoin avant de commencer ?", answer: "J ai en general besoin d une vision claire de votre activite, de vos objectifs, des pages necessaires et de tout contenu ou reference deja disponible. S il manque quelque chose, je peux vous aider a l organiser." },
                { id: 4, question: "Tu fais seulement le design ou aussi le developpement ?", answer: "Je me concentre surtout sur le design et le developpement frontend, donc sur la partie visuelle et interactive du site. Si le projet demande davantage, je peux vous aider a definir la bonne suite." },
                { id: 5, question: "Peux tu aider pour l hebergement, le domaine ou la mise en ligne ?", answer: "Oui. Je peux vous guider pendant la mise en ligne et vous aider sur toute la partie pratique, meme si vous ne l avez jamais fait auparavant." },
                { id: 6, question: "Que se passe t il une fois le site termine ?", answer: "Une fois le projet termine, je fais une passation propre et je m assure que vous sachiez exactement quoi faire ensuite. Si besoin, nous pouvons aussi parler d evolutions futures." }
            ]
        }
    }[lang];

    const [isClicked, setIsClicked] = useState(null);
    const toggleAnswer = (id) => {
        setIsClicked((prev) => (prev === id ? null : id));
    };

    return (
        <div className="faq">
            <h2 className='faq-eyebrows cont-eyebrows reveal reveal-soft' data-reveal>{copy.eyebrow}</h2>
            <p className='faq-main-title cont-desc reveal' data-reveal>{copy.intro}</p>
            <div className="faq-list">
                {copy.items.map((item) => (
                    <div key={item.id} className={`faq-item cont-card ${isClicked === item.id ? 'faq-open' : ''}`}>
                        <div className="faq-question-row" onClick={() => toggleAnswer(item.id)}>
                            <h3 className="faq-title">{item.question}</h3>
                            <FontAwesomeIcon className="faq-icon" icon={isClicked === item.id ? faMinus : faPlus} />
                        </div>
                        <p className="faq-answer">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq;
