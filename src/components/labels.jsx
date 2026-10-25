const labels = {
    portfolio: {
        IT: "Frontend Developer · Roma, Italia",
        EN: "Frontend Developer · Rome, Italy",
        FR: "Développeur Frontend · Rome, Italie",
    },
    freelance: {
        IT: "Frontend Developer per esperienze web moderne per freelance e piccole attività",
        EN: "Frontend Developer for Modern Freelance Web Experiences",
        FR: "Développeur Frontend pour des expériences web modernes pour freelances et petites activités",
    },
};

function Labels({ lang, variant = 'portfolio' }) {
    return (
        <div className="w-[min(100%,48rem)] reveal reveal-soft" data-reveal>
            <div className="hero-label inline-flex items-center justify-start max-w-full min-h-[2.4rem] px-[1.15rem] py-[0.58rem] border border-[color-mix(in_srgb,var(--color-border)_72%,white_28%)] rounded-full bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-app-surface)_72%,black_28%),color-mix(in_srgb,var(--color-app-surface)_88%,black_12%))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_18px_rgba(0,0,0,0.18)] text-[color-mix(in_srgb,var(--color-on-surface)_74%,white_26%)] font-mono text-[length:var(--font-size-label)] font-medium tracking-[0.18em] leading-[1.35] uppercase text-balance whitespace-normal">
                {labels[variant][lang]}
            </div>
        </div>
    );
}

export default Labels;
