function Labels({ lang }) {
    const labels = {
        IT: "Frontend Developer per esperienze web moderne per freelance e piccole attivita",
        EN: "Frontend Developer for Modern Freelance Web Experiences",
        FR: "Developpeur Frontend pour des experiences web modernes pour freelances et petites activites",
    };

    return (
        <div className="labels reveal reveal-soft" data-reveal>
            <div className="label">
                {labels[lang]}
            </div>
        </div>
    );
}

export default Labels;
