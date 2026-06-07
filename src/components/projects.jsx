import '../css/custom.css';
import '../css/project.css';
import Button from './buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

function Projects({ lang }) {
    const sectionCopy = {
        IT: {
            eyebrow: "Progetti a cui ho lavorato",
            intro: "Qui trovi alcuni dei progetti a cui ho lavorato di recente. Puoi aprire i link per vedere piu dettagli."
        },
        EN: {
            eyebrow: "Projects I worked on",
            intro: "Here are some of the projects I've worked on recently. Click on the links to see more details about each project."
        },
        FR: {
            eyebrow: "Projets sur lesquels j ai travaille",
            intro: "Voici quelques projets sur lesquels j ai travaille recemment. Vous pouvez ouvrir les liens pour voir plus de details."
        }
    }[lang];
    const projects = [
        {
            title: "Guessify",
            subtitle: "Daily music guessing game",
            description:
                "A music challenge app where players listen to short audio previews and try to guess both the song title and the artist within a limited number of attempts.",
            summary:
                "Inspired by daily puzzle games, Guessify turns music knowledge into a fast, replayable experience with new tracks every day.",
            stack: [
                { name: "React", icon: faReact },
                { name: "styled-components", icon: faCode },
                { name: "Node.js", icon: faNodeJs },
                { name: "Express", icon: faServer },
                { name: "Deezer API", icon: faDatabase },
            ],
            features: [
                "5 new songs to guess each day",
                "6 attempts per track",
                "Search suggestions for faster input",
                "Title and artist validation",
                "Skip option for difficult tracks",
                "Daily progress and stats tracking",
            ],
            role: "Frontend and app logic",
            type: "Web App",
            status: "Completed",
            buttonText: "View Guessify",
            url: "https://github.com/Sirens06/Guessify",
        },
        {
            title: "Movie Explorer",
            subtitle: "Movie discovery web app",
            description:
                "A movie browsing experience built around the TMDB database and API, designed to help users explore films, discover details, and search titles through a clean interface.",
            summary:
                "Movie Explorer focuses on movie discovery, giving users a simple way to browse, search, and interact with film data in a modern React interface.",
            stack: [
                { name: "React", icon: faReact },
                { name: "Vite", icon: faCode },
                { name: "JavaScript", icon: faJs },
                { name: "TMDB API", icon: faDatabase },
                { name: "CSS", icon: faCss3Alt },
            ],
            features: [
                "Movie search by title",
                "Dynamic data from TMDB API",
                "Movie details and overview display",
                "Responsive frontend structure",
                "Fast development setup with Vite",
                "Clean component-based UI",
            ],
            role: "Frontend development",
            type: "Web App",
            status: "Completed",
            buttonText: "View Movie Explorer",
            url: "https://github.com/Sirens06/movieexplorer",
        },
        {
            title: "Sibylla S.r.l",
            subtitle: "Frontend development for tourism software",
            description:
                "Frontend work for digital products in the tourism and hospitality sector, contributing to interfaces connected to Sibylla’s software ecosystem.",
            summary:
                "Worked on web interfaces for business-oriented software products, helping improve usability, structure, and frontend integration in a .NET environment.",
            stack: [
                { name: ".NET", icon: faCode },
                { name: "jQuery", icon: faCode },
                { name: "JavaScript", icon: faJs },
                { name: "HTML", icon: faHtml5 },
                { name: "CSS", icon: faCss3Alt },
            ],
            features: [
                "Frontend interfaces for tourism and hospitality software",
                "Work inside a .NET-based development environment",
                "UI maintenance and iterative platform improvements",
                "Responsive web pages and business application flows",
                "Integration support between frontend and backend systems",
                "Collaboration on internal and customer-facing digital products",
            ],
            role: "Frontend Developer",
            type: "Professional Experience",
            status: "Ongoing",
            buttonText: "View Experience",
            url: null,
        },
    ];
    const getStatusClass = (status) => {
        switch (status) {
            case "Completed": return "status-completed"
            case "Ongoing": return "status-ongoing"
            default: return ""; 
        }
    }
    return (
        <div className="projects">
            <h2 className='project-eyebrows cont-eyebrows reveal reveal-soft' data-reveal>{sectionCopy.eyebrow}</h2>
            <p className='project-main-title cont-desc reveal' data-reveal>{sectionCopy.intro}</p>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='project-item cont-card reveal'
                        data-reveal
                        style={{ '--reveal-delay': `${index * 120}ms` }}
                    >
                        <h3 className='project-title'>{project.title}</h3>
                        <h4 className='project-desc'>{project.subtitle}</h4>
                        <p className='project-summary'>{project.summary}</p>
                        <div className='project-stack'>
                            {project.stack.map((item, idx) => (
                                <div key={idx} className='stack'>
                                    <FontAwesomeIcon className='stack-icon' icon={item.icon} />
                                    <span className='stack-item'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                        <p className='features'>{project.features.join(', ')}</p>
                        <div className='flex flex-row justify-between sub-body'>
                            <p className='role'>{project.role}</p>
                            <p className='type'>{project.type}</p>
                        </div>
                        <p className={`project-status ${getStatusClass(project.status)}`}>{project.status}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <Button className="project-button" data-url={project.url}>{project.buttonText}</Button>
                        </a>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects;
