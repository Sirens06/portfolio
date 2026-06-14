function Labels({ lang }) {
    const labels = {
        IT: "Frontend Developer per esperienze web moderne per freelance e piccole attivita",
        EN: "Frontend Developer for Modern Freelance Web Experiences",
        FR: "Developpeur Frontend pour des experiences web modernes pour freelances et petites activites",
    };

    return (
        <div className="w-[min(100%,48rem)] reveal reveal-soft" data-reveal>
            <div className="inline-flex items-center justify-start w-[min(100%,48rem)] min-h-[2.4rem] px-[1.15rem] py-[0.58rem] border border-[color-mix(in_srgb,var(--color-border)_72%,white_28%)] rounded-full bg-[linear-gradient(180deg,color-mix(in_srgb,var(--app-surface)_72%,black_28%),color-mix(in_srgb,var(--app-surface)_88%,black_12%))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_18px_rgba(0,0,0,0.18)] text-[color-mix(in_srgb,var(--color-on-surface)_74%,white_26%)] font-mono text-[length:var(--font-size-label)] font-medium tracking-[0.18em] leading-[1.35] uppercase text-balance whitespace-normal">
                {labels[lang]}
            </div>
        </div>
    );
}

export default Labels;
