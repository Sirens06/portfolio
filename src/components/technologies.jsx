import '../css/technologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3Alt, faMicrosoft, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faMobileScreenButton, faDatabase, faKey, faServer, faLink } from '@fortawesome/free-solid-svg-icons';

function Technologies({ lang }) {
    const sectionCopy = {
        IT: {
            eyebrow: "Tecnologie che uso",
            intro: "Uno stack pratico per costruire interfacce pulite, funzionalita dinamiche e siti facili da far crescere.",
            frontendDesc: "Gli strumenti che uso per creare interfacce curate, layout responsive e un esperienza utente scorrevole.",
            backendDesc: "Le tecnologie con cui lavoro quando un progetto ha bisogno di logica, integrazioni, dati o supporto lato server.",
            responsive: "UI responsive",
            auth: "Flussi di autenticazione",
            db: "Integrazione database",
            third: "Servizi esterni"
        },
        EN: {
            eyebrow: "Technologies I Use",
            intro: "A practical stack for building clean interfaces, dynamic features, and websites that stay easy to grow.",
            frontendDesc: "The tools I use to build polished interfaces, responsive layouts, and smooth user experiences.",
            backendDesc: "The technologies I work with when a project needs logic, integrations, data, or server-side support.",
            responsive: "Responsive UI",
            auth: "Authentication flows",
            db: "Database integration",
            third: "Third-party services"
        },
        FR: {
            eyebrow: "Technologies que j utilise",
            intro: "Un stack pratique pour creer des interfaces propres, des fonctions dynamiques et des sites faciles a faire evoluer.",
            frontendDesc: "Les outils que j utilise pour creer des interfaces soignees, des layouts responsive et une experience fluide.",
            backendDesc: "Les technologies avec lesquelles je travaille quand un projet a besoin de logique, d integrations, de donnees ou d un support serveur.",
            responsive: "UI responsive",
            auth: "Flux d authentification",
            db: "Integration base de donnees",
            third: "Services tiers"
        }
    }[lang];

    const technologies = [
        {
            id: 1,
            title: "Frontend",
            desc: sectionCopy.frontendDesc,
            items: [
                { name: "React", icon: faReact },
                { name: "JavaScript", icon: faJs },
                { name: "HTML", icon: faHtml5 },
                { name: "CSS", icon: faCss3Alt },
                { name: "Vite", icon: faBolt },
                { name: sectionCopy.responsive, icon: faMobileScreenButton }
            ]
        },
        {
            id: 2,
            title: "Backend",
            desc: sectionCopy.backendDesc,
            items: [
                { name: "Node.js", icon: faNodeJs },
                { name: "C#", icon: faMicrosoft },
                { name: "REST APIs", icon: faServer },
                { name: sectionCopy.auth, icon: faKey },
                { name: sectionCopy.db, icon: faDatabase },
                { name: sectionCopy.third, icon: faLink }
            ]
        }
    ];

    return (
        <div className="technologies-wrapper">
            <p className="cont-eyebrows reveal reveal-soft" data-reveal>{sectionCopy.eyebrow}</p>
            <h2 className="cont-desc reveal" data-reveal>{sectionCopy.intro}</h2>
            <div className="technologies-content">
                {technologies.map(tech => (
                    <div key={tech.id} className="technology-section cont-card reveal" data-reveal>
                        <div className="technology-heading">
                            <p className="technology-label">{tech.title}</p>
                            <p className="technology-desc">{tech.desc}</p>
                        </div>
                        <div className="technology-items">
                            {tech.items.map((item, index) => (
                                <div key={index} className="technology-item">
                                    <FontAwesomeIcon className="technology-icon" icon={item.icon} />
                                    <span className="technology-name">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technologies
