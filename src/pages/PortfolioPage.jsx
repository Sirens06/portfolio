import Labels from '../components/labels';
import Presentation from '../components/presentation';
import FrontendShowcase from '../components/frontendShowcase';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Technologies from '../components/technologies';
import Contact from '../components/contact';
import FreelanceTeaser from '../components/freelanceTeaser';

// The "hire me" view: who I am, where I worked, what I built. No pricing.
function PortfolioPage({ lang }) {
    return (
        <main>
            <section className="content">
                <div className="hero-layout">
                    <div className="hero-copy">
                        <Labels lang={lang} variant="portfolio" />
                        <Presentation lang={lang} variant="portfolio" />
                    </div>
                    <FrontendShowcase />
                </div>
            </section>
            <section className="section" id="experience">
                <Experience lang={lang} />
            </section>
            <section className="section" id="projects">
                <Projects lang={lang} />
            </section>
            <section className="section" id="technologies">
                <Technologies lang={lang} />
            </section>
            <section className="section" id="contact">
                <Contact lang={lang} variant="portfolio" />
            </section>
            <section className="section">
                <FreelanceTeaser lang={lang} />
            </section>
        </main>
    );
}

export default PortfolioPage;
