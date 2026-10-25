import { Link } from 'react-router-dom';
import { cvData } from '../data/cvData';
import '../css/experience.css';

const sectionCopy = {
    IT: {
        eyebrow: "Esperienza",
        intro: "Dove ho lavorato e cosa ho costruito, dalla consulenza ai prodotti software.",
        full: "Leggi il CV completo",
    },
    EN: {
        eyebrow: "Experience",
        intro: "Where I've worked and what I've built, from consulting to software products.",
        full: "Read the full CV",
    },
    FR: {
        eyebrow: "Expérience",
        intro: "Où j'ai travaillé et ce que j'ai construit, du conseil aux produits logiciels.",
        full: "Lire le CV complet",
    },
};

function Experience({ lang }) {
    const copy = sectionCopy[lang];
    const cv = cvData[lang];

    return (
        <div>
            <p className="cont-eyebrows reveal reveal-soft" data-reveal>{copy.eyebrow}</p>
            <h2 className="cont-desc reveal" data-reveal>{copy.intro}</h2>

            <ol className="experience-list">
                {cv.experience.items.map((item, index) => {
                    const [company, place] = item.company.split('|').map((s) => s.trim());
                    return (
                        <li
                            key={item.company}
                            className="experience-item cont-card reveal"
                            data-reveal
                            style={{ '--reveal-delay': `${index * 100}ms` }}
                        >
                            <div className="experience-head">
                                <div>
                                    <p className="experience-company">{company}</p>
                                    <p className="experience-role">{item.role}{place ? ` · ${place}` : ''}</p>
                                </div>
                                <span className="experience-period">{item.period}</span>
                            </div>
                            <ul className="experience-points">
                                {item.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </li>
                    );
                })}
            </ol>

            <div className="experience-footer reveal reveal-soft" data-reveal>
                <div className="experience-stack">
                    {cv.stack.items.map((s) => <span key={s} className="experience-tag">{s}</span>)}
                </div>
                <Link className="experience-cv-link" to="/cv">{copy.full} <span aria-hidden="true">→</span></Link>
            </div>
        </div>
    );
}

export default Experience;
