import { useState, useEffect } from 'react';
import '../css/cv.css';
import '../css/custom.css';

const copy = {
    IT: {
        role: 'Frontend Developer',
        location: 'Roma, IT',
        print: 'Stampa',
        download: 'Scarica PDF',
        profile: {
            label: 'Profilo',
            text: "Frontend Developer con esperienza nello sviluppo di interfacce moderne, responsive e user-friendly, soprattutto in ambito HR. Ho collaborato a UI/UX complesse e interattive, con attenzione all'accessibilità. Sto approfondendo Angular e TypeScript da autodidatta. Appassionato di tecnologia, sport, musica e videogiochi, sono autonomo, preciso e orientato al problem solving."
        },
        stack: {
            label: 'Stack tecnico',
            items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Node.js', 'jQuery', 'Bootstrap', 'Git', 'SAP ABAP']
        },
        experience: {
            label: 'Esperienza',
            items: [
                {
                    role: 'Frontend Developer',
                    company: 'Sibylla S.r.l. | Roma, IT',
                    period: 'Dicembre 2025 – Presente',
                    points: [
                        "Sviluppo e manutenzione di interfacce web per il prodotto principale dell'azienda utilizzando HTML, CSS, jQuery, Bootstrap e Git",
                        "Collaborazione con il team per migliorare la UX/UI delle componenti front-end nell'ambito di un prodotto software per il settore hospitality/turismo"
                    ]
                },
                {
                    role: 'Frontend Developer',
                    company: 'PwC | Roma, IT',
                    period: 'Settembre 2023 – Febbraio 2025',
                    points: [
                        'Sviluppo di interfacce utente per webapp complesse, con particolare focus sulla gamification per soluzioni HR, finance e fashion',
                        'Utilizzo di HTML, CSS, JS e Node.js, in collaborazione con sviluppatori backend per garantire soluzioni complete'
                    ]
                },
                {
                    role: 'ABAP Developer',
                    company: 'Avvale/Techedge | Roma, IT',
                    period: 'Febbraio 2022 – Giugno 2023',
                    points: [
                        'Sviluppo di Function Module e gestione tabelle SAP',
                        'Collaborazione con team funzionali per garantire coerenza informativa e qualità dei dati'
                    ]
                }
            ]
        },
        results: {
            label: 'Risultati',
            items: [
                'Interfacce complesse per webapp HR, finance e fashion consegnate in team con PwC',
                'Miglioramento continuo della UX/UI su prodotti software nel settore hospitality',
                'Gestione autonoma di moduli SAP con alto standard di qualità dei dati',
                'Approfondimento costante di Angular e TypeScript su progetti reali'
            ]
        },
        education: {
            label: 'Formazione',
            items: [
                {
                    title: "Laurea in LINFO (Lingue nella società dell'informazione)",
                    institution: 'Università degli Studi di Roma Tor Vergata | Roma, IT',
                    year: 'Ottobre 2017 – Giugno 2021'
                }
            ]
        },
        interests: {
            label: 'Interessi',
            items: ['Basketball', 'Calcio', 'Videogiochi', 'Serie TV', 'Musica', 'Streetwear', 'Web Developing', 'Collezionismo', 'Fantacalcio']
        },
        languages: {
            label: 'Lingue',
            items: [
                { lang: 'Italiano', level: 'Madrelingua' },
                { lang: 'Inglese', level: 'Fluente' },
                { lang: 'Francese', level: 'Intermedio' }
            ]
        },
        contacts: {
            label: 'Contatti',
            email: 'alexrutini6@gmail.com',
            phone: '+39 3917971944',
            github: 'github.com/Sirens06',
            linkedin: 'linkedin.com/in/alessandro-rutini'
        },
        back: 'Torna indietro'
    },
    EN: {
        role: 'Frontend Developer',
        location: 'Rome, IT',
        print: 'Print',
        download: 'Download PDF',
        profile: {
            label: 'Profile',
            text: "Frontend Developer experienced in building modern, responsive and user-friendly interfaces, especially in the HR space. I have worked on complex and interactive UI/UX projects with a focus on accessibility. Currently deepening my knowledge of Angular and TypeScript self-taught. Passionate about technology, sports, music and gaming — autonomous, precise and problem-solving oriented."
        },
        stack: {
            label: 'Tech Stack',
            items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Node.js', 'jQuery', 'Bootstrap', 'Git', 'SAP ABAP']
        },
        experience: {
            label: 'Experience',
            items: [
                {
                    role: 'Frontend Developer',
                    company: 'Sibylla S.r.l. | Rome, IT',
                    period: 'December 2025 – Present',
                    points: [
                        "Development and maintenance of web interfaces for the company's main product using HTML, CSS, jQuery, Bootstrap and Git",
                        "Collaboration with the team to improve front-end UX/UI components for a hospitality/tourism software product"
                    ]
                },
                {
                    role: 'Frontend Developer',
                    company: 'PwC | Rome, IT',
                    period: 'September 2023 – February 2025',
                    points: [
                        'Development of user interfaces for complex web apps with a focus on gamification for HR, finance and fashion solutions',
                        'Used HTML, CSS, JS and Node.js in collaboration with backend developers to deliver complete solutions'
                    ]
                },
                {
                    role: 'ABAP Developer',
                    company: 'Avvale/Techedge | Rome, IT',
                    period: 'February 2022 – June 2023',
                    points: [
                        'Development of Function Modules and SAP table management',
                        'Collaboration with functional teams to ensure data consistency and quality'
                    ]
                }
            ]
        },
        results: {
            label: 'Results',
            items: [
                'Delivered complex interfaces for HR, finance and fashion web apps at PwC',
                'Continuous UX/UI improvement on hospitality software products',
                'Autonomous management of SAP modules with high data quality standards',
                'Ongoing deepening of Angular and TypeScript on real projects'
            ]
        },
        education: {
            label: 'Education',
            items: [
                {
                    title: "Bachelor's Degree in LINFO (Languages in the Information Society)",
                    institution: 'Università degli Studi di Roma Tor Vergata | Rome, IT',
                    year: 'October 2017 – June 2021'
                }
            ]
        },
        interests: {
            label: 'Interests',
            items: ['Basketball', 'Soccer', 'Videogames', 'TV Series', 'Music', 'Streetwear', 'Web Developing', 'Collecting', 'Fantasy Football']
        },
        languages: {
            label: 'Languages',
            items: [
                { lang: 'Italian', level: 'Native' },
                { lang: 'English', level: 'Fluent' },
                { lang: 'French', level: 'Intermediate' }
            ]
        },
        contacts: {
            label: 'Contacts',
            email: 'alexrutini6@gmail.com',
            phone: '+39 3917971944',
            github: 'github.com/Sirens06',
            linkedin: 'linkedin.com/in/alessandro-rutini',
        },
        back: 'Go back'
    },
    FR: {
        role: 'Développeur Frontend',
        location: 'Rome, IT',
        print: 'Imprimer',
        download: 'Télécharger PDF',
        profile: {
            label: 'Profil',
            text: "Développeur Frontend expérimenté dans la création d'interfaces modernes, responsives et conviviales, notamment dans le domaine RH. J'ai collaboré à des projets UI/UX complexes et interactifs avec une attention particulière à l'accessibilité. J'approfondis Angular et TypeScript en autodidacte. Passionné de technologie, sport, musique et jeux vidéo — autonome, précis et orienté résolution de problèmes."
        },
        stack: {
            label: 'Stack technique',
            items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Node.js', 'jQuery', 'Bootstrap', 'Git', 'SAP ABAP']
        },
        experience: {
            label: 'Expérience',
            items: [
                {
                    role: 'Développeur Frontend',
                    company: 'Sibylla S.r.l. | Rome, IT',
                    period: 'Décembre 2025 – Présent',
                    points: [
                        "Développement et maintenance d'interfaces web pour le produit principal de l'entreprise avec HTML, CSS, jQuery, Bootstrap et Git",
                        "Collaboration avec l'équipe pour améliorer les composants UX/UI front-end d'un logiciel pour le secteur hospitality/tourisme"
                    ]
                },
                {
                    role: 'Développeur Frontend',
                    company: 'PwC | Rome, IT',
                    period: 'Septembre 2023 – Février 2025',
                    points: [
                        "Développement d'interfaces utilisateur pour des webapps complexes avec un focus sur la gamification pour des solutions RH, finance et mode",
                        'Utilisation de HTML, CSS, JS et Node.js en collaboration avec des développeurs backend'
                    ]
                },
                {
                    role: 'Développeur ABAP',
                    company: 'Avvale/Techedge | Rome, IT',
                    period: 'Février 2022 – Juin 2023',
                    points: [
                        'Développement de Function Modules et gestion de tables SAP',
                        "Collaboration avec les équipes fonctionnelles pour assurer la cohérence et la qualité des données"
                    ]
                }
            ]
        },
        results: {
            label: 'Résultats',
            items: [
                "Interfaces complexes livrées pour des webapps RH, finance et mode chez PwC",
                "Amélioration continue de l'UX/UI sur des produits logiciels dans le secteur hospitality",
                'Gestion autonome de modules SAP avec un haut niveau de qualité des données',
                'Approfondissement continu d\'Angular et TypeScript sur des projets réels'
            ]
        },
        education: {
            label: 'Formation',
            items: [
                {
                    title: "Licence en LINFO (Langues dans la société de l'information)",
                    institution: 'Università degli Studi di Roma Tor Vergata | Rome, IT',
                    year: 'Octobre 2017 – Juin 2021'
                }
            ]
        },
        interests: {
            label: 'Intérêts',
            items: ['Basketball', 'Football', 'Jeux vidéo', 'Séries TV', 'Musique', 'Streetwear', 'Développement Web', 'Collection', 'Fantasy Football']
        },
        languages: {
            label: 'Langues',
            items: [
                { lang: 'Italien', level: 'Langue maternelle' },
                { lang: 'Anglais', level: 'Courant' },
                { lang: 'Français', level: 'Intermédiaire' }
            ]
        },
        contacts: {
            label: 'Contacts',
            email: 'alexrutini6@gmail.com',
            github: 'github.com/Sirens06',
            linkedin: 'linkedin.com/in/alessandro-rutini'
        },
        back: 'Retour',
    }
};

function CV() {
    const languages = ['IT', 'EN', 'FR'];
    const [lang, setLang] = useState('EN');
    const [dark] = useState(true);
    const t = copy[lang];

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    

    return (
        <div className="cv-page">
            
            <div className="cv-container">

                {/* Header */}
                <div className="cv-header">
                    <div className="cv-header-left">
                        <h1 className="cv-name">Alessandro Rutini</h1>
                        <p className="cv-role">{t.role}</p>
                        <p className="cv-location">{t.location}</p>
                    </div>
                    <div className="cv-header-right no-print">
                        <div className="cv-lang-toggle">
                            {languages.map(l => (
                                <button key={l} className={`cv-lang-btn ${l === lang ? 'active' : ''}`} onClick={() => setLang(l)}>{l}</button>
                            ))}
                        </div>
                        <div className="cv-actions">
                            <button className="cv-btn cv-btn-secondary" onClick={() => window.history.back()}>{t.back}</button>
                            <button className="cv-btn cv-btn-secondary" onClick={() => window.print()}>{t.print}</button>
                            <a className="cv-btn cv-btn-primary" href="public/CV.pdf" rel='no-referrer' target='_blank'>{t.download}</a>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.profile.label}</h2>
                    <p className="cv-profile-text">{t.profile.text}</p>
                </section>

                {/* Stack */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.stack.label}</h2>
                    <div className="cv-stack-group cont-card">
                        <div className="cv-stack-items">
                            {t.stack.items.map(item => (
                                <span key={item} className="cv-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.experience.label}</h2>
                    {t.experience.items.map((item, i) => (
                        <div key={i} className="cv-experience-item cont-card">
                            <div className="cv-experience-header">
                                <div>
                                    <p className="cv-experience-role">{item.role}</p>
                                    <p className="cv-experience-company">{item.company}</p>
                                </div>
                                <span className="cv-experience-period">{item.period}</span>
                            </div>
                            <ul className="cv-experience-points">
                                {item.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Results */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.results.label}</h2>
                    <div className="cv-results cont-card">
                        <ul className="cv-results-list">
                            {t.results.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.education.label}</h2>
                    {t.education.items.map((item, i) => (
                        <div key={i} className="cv-education-item cont-card">
                            <div className="cv-experience-header">
                                <div>
                                    <p className="cv-experience-role">{item.title}</p>
                                    <p className="cv-experience-company">{item.institution}</p>
                                </div>
                                <span className="cv-experience-period">{item.year}</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Interests */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.interests.label}</h2>
                    <div className="cv-stack-group cont-card">
                        <div className="cv-stack-items">
                            {t.interests.items.map(item => (
                                <span key={item} className="cv-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Languages */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.languages.label}</h2>
                    <div className="cv-languages cont-card">
                        {t.languages.items.map((item, i) => (
                            <div key={i} className="cv-language-item">
                                <span className="cv-language-name">{item.lang}</span>
                                <span className="cv-language-level">{item.level}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contacts */}
                <section className="cv-section">
                    <h2 className="cv-section-label">{t.contacts.label}</h2>
                    <div className="cv-contacts cont-card">
                        <a className="cv-contact-item" href={`mailto:${t.contacts.email}`}>{t.contacts.email}</a>
                        <a className="cv-contact-item" href={`tel:${t.contacts.phone}`}>{t.contacts.phone}</a>
                        <a className="cv-contact-item" href="#" target="_blank" rel="noreferrer">{t.contacts.github}</a>
                        <a className="cv-contact-item" href="#" target="_blank" rel="noreferrer">{t.contacts.linkedin}</a>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default CV;
