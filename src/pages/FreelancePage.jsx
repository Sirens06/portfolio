import Labels from '../components/labels';
import Presentation from '../components/presentation';
import FrontendShowcase from '../components/frontendShowcase';
import Problems from '../components/problems';
import Services from '../components/services';
import Projects from '../components/projects';
import Steps from '../components/steps';
import WorkWithMe from '../components/workWithMe';
import Faq from '../components/faq';
import Contact from '../components/contact';

// The client view: problems I solve, packages & pricing, process, FAQ.
function FreelancePage({ lang }) {
    return (
        <main>
            <section className="content">
                <div className="hero-layout">
                    <div className="hero-copy">
                        <Labels lang={lang} variant="freelance" />
                        <Presentation lang={lang} variant="freelance" />
                    </div>
                    <FrontendShowcase />
                </div>
            </section>
            <section className="problem-section" id="problems">
                <Problems lang={lang} />
            </section>
            <section className="section" id="services">
                <Services lang={lang} />
            </section>
            <section className="section" id="projects">
                <Projects lang={lang} />
            </section>
            <section className="section" id="steps">
                <Steps lang={lang} />
            </section>
            <section className="section" id="work-with-me">
                <WorkWithMe lang={lang} />
            </section>
            <section className="section" id="faq">
                <Faq lang={lang} />
            </section>
            <section className="section" id="contact">
                <Contact lang={lang} variant="freelance" />
            </section>
        </main>
    );
}

export default FreelancePage;
