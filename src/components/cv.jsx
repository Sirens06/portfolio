import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/cv.css';
import '../css/custom.css';
import { cvData } from '../data/cvData';

const copy = cvData;

function CV({ initialLang = 'EN' }) {
    const languages = ['IT', 'EN', 'FR'];
    const [lang, setLang] = useState(initialLang);
    const [dark] = useState(true);
    const t = copy[lang];
    const navigate = useNavigate();
    const location = useLocation();
    // Go back inside the site; if the CV was opened directly, go to the home page.
    const goBack = () => (location.key !== 'default' ? navigate(-1) : navigate('/'));

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
                            <button className="cv-btn cv-btn-secondary" onClick={goBack}>{t.back}</button>
                            <button className="cv-btn cv-btn-secondary" onClick={() => window.print()}>{t.print}</button>
                            <a className="cv-btn cv-btn-primary" href="/CV-10.pdf" rel='no-referrer' target='_blank'>{t.download}</a>
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
