import Button from "./buttons";
import { useState } from "react";
import '../css/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Services({ lang }) {
    const [startIndex, setStartIndex] = useState(0);
    const copy = {
        IT: {
            eyebrow: "Servizi e pacchetti",
            title: "Alcuni modi chiari per costruire o migliorare la tua presenza online.",
            subtitle: "Prezzi indicativi — ogni progetto viene preventivato bene dopo una prima conversazione, in base a obiettivi, perimetro e complessita."
        },
        EN: {
            eyebrow: "Services & Packages",
            title: "A few clear ways to build or improve your online presence.",
            subtitle: "Indicative pricing only — every project is quoted properly after a first conversation, based on scope, goals, and complexity."
        },
        FR: {
            eyebrow: "Services et formules",
            title: "Quelques facons claires de creer ou d ameliorer votre presence en ligne.",
            subtitle: "Tarifs indicatifs — chaque projet est chiffre apres un premier echange, selon le perimetre, les objectifs et la complexite."
        }
    }[lang];
    const services = [
        {
            title: "Landing Page",
            description:
                "A focused one-page website built to present one offer clearly and turn visits into conversations.",
            idealFor:
                "Ideal for freelancers, personal brands, events, launches, or small businesses that need a clean first impression.",
            price: "From €500",
            timing: "5-7 working days",
            included: [
                "Custom responsive design",
                "Clear structure and call-to-action flow",
                "Basic SEO setup",
                "Contact form or WhatsApp button",
                "Fast, lightweight frontend build",
                "Domain/hosting setup support",
            ],
            notIncluded: [
                "Multi-page structure",
                "Custom dashboard or login area",
                "Advanced animations",
                "E-commerce features",
                "Custom backend systems",
            ],
            buttonText: "I want a landing page",
        },
        {
            title: "Business Website",
            description:
                "A complete website for businesses that need more credibility, more clarity, and a stronger presence online.",
            idealFor:
                "Ideal for studios, service businesses, consultants, or local companies that need more than a single page.",
            price: "From €1,200",
            timing: "2-3 weeks",
            included: [
                "Up to 5 pages",
                "Home, About, Services, Contact",
                "Responsive design on every device",
                "Stronger content structure and user flow",
                "Basic SEO and performance setup",
                "Google Maps, forms, and contact actions",
            ],
            notIncluded: [
                "Custom admin panel",
                "Advanced booking systems",
                "Multilingual setup",
                "Large e-commerce stores",
                "Complex backend integrations",
            ],
            buttonText: "I want a full website",
        },
        {
            title: "Custom Web App / MVP",
            description:
                "A tailored frontend solution for ideas that need more interaction than a standard website.",
            idealFor:
                "Ideal for dashboards, booking flows, internal tools, client areas, or early-stage product ideas.",
            price: "From €2,000",
            timing: "3-6 weeks",
            included: [
                "Project scoping and feature definition",
                "Component-based frontend architecture",
                "Responsive UI built with React",
                "API integration if needed",
                "Reusable structure for future growth",
                "Clean handoff and next-step guidance",
            ],
            notIncluded: [
                "Native mobile apps",
                "Complex backend from scratch",
                "Large-scale enterprise systems",
                "Ongoing maintenance by default",
                "Full product design systems unless agreed separately",
            ],
            buttonText: "Let’s talk about the project",
        },
        {
            title: "Website Refresh",
            description:
                "A redesign for websites that already exist but no longer reflect the quality of the business behind them.",
            idealFor:
                "Ideal for businesses with outdated layouts, weak mobile experience, or unclear messaging.",
            price: "From €700",
            timing: "1-2 weeks",
            included: [
                "Visual redesign of key pages",
                "Better spacing, typography, and layout",
                "Mobile and performance improvements",
                "Cleaner structure and clearer calls to action",
                "Content cleanup support",
                "Frontend polish without rebuilding everything",
            ],
            notIncluded: [
                "Full rebuild of complex websites",
                "Platform migration",
                "Backend redevelopment",
                "Large content rewrite",
                "Advanced custom features",
            ],
            buttonText: "I want to refresh my site",
        },
    ];
    const maxIndex = Math.max(services.length - 3, 0);
    const translatePercentage = startIndex * (100 / 3);

    return (
        <section className="services-wrapper">
            <div className="services-heading">
                <p className="services-eyebrow cont-eyebrows reveal reveal-soft" data-reveal>{copy.eyebrow}</p>
                <h2 className="services-main-title cont-desc reveal" data-reveal>{copy.title}</h2>
                <p className="services-subtitle reveal" data-reveal>{copy.subtitle}</p>
            </div>

            <div className="services-carousel">
                <FontAwesomeIcon
                    icon={faLessThan}
                    className="arrows arrow-left"
                    onClick={() => setStartIndex(prev => Math.max(prev - 1, 0))}
                />
                <div className="services-viewport">
                    <div
                        className="services-track"
                        style={{ transform: `translateX(-${translatePercentage}%)` }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card cont-card flex flex-col items-start gap-4 reveal"
                                data-reveal
                                style={{ '--reveal-delay': `${index * 100}ms` }}
                            >
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-desc">{service.description}</p>
                                <p className="service-hint">{service.idealFor}</p>
                                <div className="flex flex-row justify-between service-meta">
                                    <p className="service-price">{service.price}</p>
                                    <p className="service-timing">{service.timing}</p>
                                </div>
                                {service.included.map((item, idx) => (
                                    <div key={idx} className="service-included-item">
                                        <FontAwesomeIcon className="service-icon" icon={faCheck} />
                                        {item}
                                    </div>
                                ))}
                                {service.notIncluded.map((item, idx) => (
                                    <div key={idx} className="service-not-included-item">
                                        <FontAwesomeIcon className="service-icon cancel-icon" icon={faXmark} />
                                        {item}
                                    </div>
                                ))}
                                <Button>{service.buttonText}</Button>
                            </div>
                        ))}
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faGreaterThan}
                    className="arrows arrow-right"
                    onClick={() => setStartIndex(prev => Math.min(prev + 1, maxIndex))}
                />
            </div>
        </section>
    )
}

export default Services;    
