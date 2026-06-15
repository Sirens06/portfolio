# CSS to Tailwind Tokens Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move CSS custom properties from `custom.css` into Tailwind `@theme` tokens in `index.css`, then replace CSS class usage in simple components with inline Tailwind utilities.

**Architecture:** Tokens (colors, font sizes, spacing) move to `@theme` so Tailwind generates utility classes automatically. Complex structural CSS (`.App`, `.navbar`, `.hero-layout`, pseudo-elements, media queries, animations) stays in `custom.css` — too painful to inline. Simple component CSS (labels, presentation, problems, faq, buttons, workWithMe) gets replaced with inline Tailwind and their CSS deleted.

**Tech Stack:** Tailwind CSS v4 (via `@tailwindcss/vite`), React, Vite

---

## Task 1: Extend @theme in index.css with missing tokens

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add accent, font-size, and spacing tokens to `@theme` block**

Inside the existing `@theme { ... }` block in `src/index.css`, add after the existing brand/neutral tokens:

```css
  /* Accent */
  --color-accent:        #8b7cf6;
  --color-accent-strong: #7f72e8;
  --color-accent-muted:  rgba(139, 124, 246, 0.2);
  --color-text-muted:    #cec9bf;

  /* Font sizes (fluid) */
  --font-size-label: clamp(0.72rem, 0.68rem + 0.18vw, 0.82rem);
  --font-size-nav:   clamp(0.88rem, 0.84rem + 0.2vw, 0.98rem);
  --font-size-ui:    clamp(0.88rem, 0.80rem + 0.22vw, 0.96rem);
  --font-size-body:  clamp(1rem, 0.96rem + 0.22vw, 1.1rem);
  --font-size-hero:  clamp(1.9rem, 1.5rem + 1.2vw, 3.6rem);

  /* Spacing */
  --spacing-section: 4.5rem;
```

- [ ] **Step 2: Verify Tailwind picks up tokens**

Run `npm run dev` and open the browser. In DevTools, confirm `var(--color-accent)` resolves to `#8b7cf6`.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add accent, font-size, and spacing tokens to @theme"
```

---

## Task 2: Migrate labels.jsx

**Files:**
- Modify: `src/components/labels.jsx`
- Delete CSS from: `src/css/custom.css` (`.labels`, `.label` classes)

The `.label` class has border, background gradient, box-shadow, font-family, font-size, letter-spacing — all replaceable inline.

- [ ] **Step 1: Replace labels.jsx with Tailwind-only version**

```jsx
function Labels({ lang }) {
    const labels = {
        IT: "Frontend Developer per esperienze web moderne per freelance e piccole attivita",
        EN: "Frontend Developer for Modern Freelance Web Experiences",
        FR: "Developpeur Frontend pour des experiences web modernes pour freelances et petites activites",
    };

    return (
        <div className="w-[min(100%,48rem)] reveal reveal-soft" data-reveal>
            <div className="inline-flex items-center justify-start w-[min(100%,48rem)] min-h-[2.4rem] px-[1.15rem] py-[0.58rem] border border-[color-mix(in_srgb,var(--color-border)_72%,white_28%)] rounded-full bg-[linear-gradient(180deg,color-mix(in_srgb,var(--app-surface)_72%,black_28%),color-mix(in_srgb,var(--app-surface)_88%,black_12%))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_18px_rgba(0,0,0,0.18)] text-[color-mix(in_srgb,var(--color-on-surface)_74%,white_26%)] font-mono text-[length:var(--font-size-label)] font-medium tracking-[0.18em] uppercase text-balance">
                {labels[lang]}
            </div>
        </div>
    );
}

export default Labels;
```

- [ ] **Step 2: Remove `.labels` and `.label` blocks from `src/css/custom.css`**

Delete these two rule blocks (search for `.labels {` and `.label {`).

- [ ] **Step 3: Commit**

```bash
git add src/components/labels.jsx src/css/custom.css
git commit -m "refactor: migrate labels to Tailwind utilities"
```

---

## Task 3: Migrate presentation.jsx

**Files:**
- Modify: `src/components/presentation.jsx`
- Delete CSS from: `src/css/custom.css` (`.presentation`, `.presentation-title`, `.presentation-description`, `.buttons-container`, `.trust-points`, `.important`)

- [ ] **Step 1: Replace presentation.jsx**

```jsx
function Presentation({ lang }) {
    const copy = {
        IT: {
            title: <>Realizzo <span className="text-accent">siti web</span> curati e <span className="text-accent">esperienze frontend</span> che aiutano le attivita a sembrare piu moderne online.</>,
            desc: "Lavoro con brand, freelance e piccoli team per creare esperienze web responsive con interfacce pulite, struttura chiara e una presenza visiva forte.",
            cta: "Contattami",
            work: "Guarda cosa ho realizzato",
            trust: ["✓ Due call introduttive gratuite per iniziare", "✓ Preventivo chiaro entro 48 ore", "✓ Prima versione pronta in 1-3 settimane"],
        },
        EN: {
            title: <>I build polished <span className="text-accent">websites</span> and <span className="text-accent">frontend experiences</span> that help businesses feel more modern online.</>,
            desc: "I work with brands, freelancers, and small teams to create responsive web experiences with clean UI, thoughtful structure, and a strong visual presence.",
            cta: "Get in Touch",
            work: "Look what I made",
            trust: ["✓ Two free intro calls to get started", "✓ Clear quote within 48 hours", "✓ First version ready in 1-3 weeks"],
        },
        FR: {
            title: <>Je cree des <span className="text-accent">sites web</span> soignes et des <span className="text-accent">experiences frontend</span> qui aident les entreprises a paraitre plus modernes en ligne.</>,
            desc: "Je travaille avec des marques, des freelances et de petites equipes pour creer des experiences web responsive avec une interface propre, une structure claire et une vraie presence visuelle.",
            cta: "Me contacter",
            work: "Voir mes projets",
            trust: ["✓ Deux appels de decouverte gratuits pour commencer", "✓ Devis clair sous 48 heures", "✓ Premiere version prete en 1 a 3 semaines"],
        },
    }[lang];

    return (
        <div className="mt-[1.6rem] max-w-[58rem] reveal" data-reveal id="presentation">
            <h1 className="w-full max-w-[12ch] m-0 text-[color-mix(in_srgb,var(--color-on-surface)_92%,white_8%)] font-display text-[length:var(--font-size-hero)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {copy.title}
            </h1>
            <p className="w-full max-w-[36rem] mt-[1.4rem] mb-0 text-[color-mix(in_srgb,var(--color-on-surface)_72%,var(--color-surface)_28%)] font-display text-[length:var(--font-size-ui)] font-normal leading-[1.7] tracking-[-0.02em]">
                {copy.desc}
            </p>

            <div className="flex flex-wrap items-center gap-[1.2rem] mt-[2.4rem]">
                <button className="inline-flex items-center gap-[0.55rem] bg-accent text-[#f7f7ff] px-[1.2rem] py-[0.75rem] border border-transparent rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)]">
                    {copy.cta} <span aria-hidden="true">→</span>
                </button>
                <a className="inline-flex items-center justify-center gap-[0.55rem] text-[#f7f7ff] border border-[color-mix(in_srgb,var(--color-accent)_72%,white_28%)] bg-[color-mix(in_srgb,var(--app-surface)_82%,black_18%)] px-[1.2rem] py-[0.75rem] rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)] no-underline" href="#projects">
                    {copy.work}
                </a>
            </div>

            <div className="grid grid-cols-3 items-start gap-y-[0.85rem] gap-x-[1.5rem] mt-[1.6rem] text-[color-mix(in_srgb,var(--color-on-surface)_68%,var(--color-surface)_32%)] font-display text-[0.75rem] font-medium tracking-[-0.02em]">
                {copy.trust.map((item) => <span className="block min-w-0 whitespace-normal leading-[1.55]" key={item}>{item}</span>)}
            </div>
        </div>
    );
}

export default Presentation;
```

- [ ] **Step 2: Remove `.presentation`, `.presentation-title`, `.presentation-description`, `.buttons-container`, `.presentation-button`, `.works-made`, `.trust-points`, `.important` from `src/css/custom.css`**

- [ ] **Step 3: Commit**

```bash
git add src/components/presentation.jsx src/css/custom.css
git commit -m "refactor: migrate presentation to Tailwind utilities"
```

---

## Task 4: Migrate problems.jsx

**Files:**
- Modify: `src/components/problems.jsx`
- Delete: `src/css/problems.css`
- Modify: `src/App.jsx` — remove `import './css/problems.css'` (check if it's imported there or in problems.jsx)

- [ ] **Step 1: Replace problems.jsx**

```jsx
function Problems({ lang }) {
    const copy = {
        IT: {
            eyebrow: "Dove posso aiutarti",
            intro: "Se ti ritrovi in una di queste situazioni, il tuo sito ha bisogno di piu di un po di estetica: ha bisogno di struttura e direzione.",
            problems: [
                { id: 1, title: 'Il tuo sito e carino, ma non resta impresso', description: 'Le persone arrivano, scorrono un po e vanno via senza un vero motivo per restare o contattarti.' },
                { id: 2, title: 'Hai servizi validi, ma il messaggio non e chiaro', description: 'Quello che fai ha valore, ma il sito non lo spiega in modo semplice e non guida le persone all azione.' },
                { id: 3, title: 'La tua immagine online e sparsa ovunque', description: 'Social, vecchio sito e visual incoerenti fanno sembrare il business meno solido di quanto sia davvero.' },
                { id: 4, title: 'Ripeti sempre le stesse risposte', description: 'Prezzi, servizi, disponibilita e prossimi passi tornano continuamente perche il sito non fa abbastanza di questo lavoro.' },
                { id: 5, title: 'Vuoi qualcosa di piu personale di un template', description: 'Ti serve un sito che sembri davvero tuo, non qualcosa che assomiglia a tutti gli altri.' },
                { id: 6, title: 'La tua attivita e cresciuta, il sito no', description: 'La qualita del tuo lavoro e migliorata, ma la tua presenza online racconta ancora una versione piu vecchia di te.' }
            ]
        },
        EN: {
            eyebrow: "Where I Can Help",
            intro: "If any of this feels close to home, your website needs more than polish — it needs purpose and structure.",
            problems: [
                { id: 1, title: 'Your website looks decent but feels forgettable', description: 'People visit, scroll a little, and leave without a clear reason to stay or get in touch.' },
                { id: 2, title: 'You have services to offer, but the message feels unclear', description: 'What you do is real, but the website does not explain it simply or guide people to act.' },
                { id: 3, title: 'Your online image feels split across too many places', description: 'A few social pages, an old site, and inconsistent visuals make the business feel less solid than it is.' },
                { id: 4, title: 'You spend too much time answering the same questions', description: 'Pricing, services, availability, and next steps keep coming back because the site does not do enough of that work.' },
                { id: 5, title: 'You want something more custom than a template', description: 'You need a site that feels aligned with your brand, not something that looks like everyone else\'s.' },
                { id: 6, title: 'You know your business has grown, but the website has not', description: 'The quality of your work improved, but your online presence still reflects an older version of you.' }
            ]
        },
        FR: {
            eyebrow: "Ou je peux vous aider",
            intro: "Si l une de ces situations vous parle, votre site a besoin de plus qu une simple mise en forme : il a besoin de structure et d intention.",
            problems: [
                { id: 1, title: 'Votre site est correct mais peu memorable', description: 'Les gens arrivent, font defiler un peu, puis repartent sans vraie raison de rester ou de vous contacter.' },
                { id: 2, title: 'Vous avez des services a proposer, mais le message reste flou', description: 'Ce que vous faites a de la valeur, mais le site ne l explique pas simplement et ne guide pas a l action.' },
                { id: 3, title: 'Votre image en ligne est trop dispersee', description: 'Quelques reseaux sociaux, un ancien site et des visuels incoherents rendent l activite moins solide qu elle ne l est.' },
                { id: 4, title: 'Vous repondez trop souvent aux memes questions', description: 'Prix, services, disponibilite et prochaines etapes reviennent sans cesse parce que le site ne fait pas assez ce travail.' },
                { id: 5, title: 'Vous voulez quelque chose de plus personnel qu un template', description: 'Il vous faut un site aligne sur votre marque, pas quelque chose qui ressemble a tout le monde.' },
                { id: 6, title: 'Votre activite a evolue, mais pas votre site', description: 'La qualite de votre travail a progresse, mais votre presence en ligne raconte encore une ancienne version de vous.' }
            ]
        }
    }[lang];

    return (
        <div>
            <h1 className="mt-[1.8rem] mb-0 text-text-muted font-display text-base font-medium tracking-[1px] uppercase reveal reveal-soft" data-reveal>
                {copy.eyebrow}
            </h1>
            <p className="mt-[0.8rem] mb-[2rem] text-[color-mix(in_srgb,var(--color-accent)_68%,var(--color-surface)_32%)] font-display text-[1.75rem] font-semibold w-[min(60%,50rem)] leading-[1.5] tracking-[-0.2px] reveal" data-reveal>
                {copy.intro}
            </p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-6 items-stretch">
                {copy.problems.map(p => (
                    <li
                        key={p.id}
                        className="border border-[var(--border)] rounded-lg flex flex-col items-center justify-start p-6 gap-2 transition-transform duration-[400ms] ease-in-out min-h-[170px] hover:-translate-y-1 reveal"
                        data-reveal
                        style={{ '--reveal-delay': `${p.id * 80}ms` }}
                    >
                        <h2 className="text-base font-display font-semibold text-text-muted self-start">{p.title}</h2>
                        <p className="text-[0.65rem] font-mono text-[color-mix(in_srgb,var(--color-on-surface)_68%,var(--color-surface)_32%)]">{p.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Problems;
```

- [ ] **Step 2: Remove import of problems.css**

Check `src/App.jsx` for `import './css/problems.css'` and remove it. Also check `src/components/problems.jsx` for any CSS import.

- [ ] **Step 3: Delete `src/css/problems.css`**

```bash
rm src/css/problems.css
```

- [ ] **Step 4: Commit**

```bash
git add src/components/problems.jsx src/App.jsx
git commit -m "refactor: migrate problems to Tailwind utilities, delete problems.css"
```

---

## Task 5: Migrate buttons.jsx and workWithMe.jsx

**Files:**
- Modify: `src/components/buttons.jsx`
- Modify: `src/components/workWithMe.jsx`
- Delete: `src/css/workWithMe.css`

- [ ] **Step 1: Read current buttons.jsx and workWithMe.jsx**

```bash
cat src/components/buttons.jsx
cat src/components/workWithMe.jsx
cat src/css/workWithMe.css
```

- [ ] **Step 2: Rewrite buttons.jsx using Tailwind**

Replace all CSS class usage with Tailwind utilities. Primary button uses `bg-accent text-[#f7f7ff]`, secondary uses `border border-accent/40 bg-transparent`.

- [ ] **Step 3: Rewrite workWithMe.jsx using Tailwind, delete workWithMe.css**

```bash
rm src/css/workWithMe.css
```

- [ ] **Step 4: Commit**

```bash
git add src/components/buttons.jsx src/components/workWithMe.jsx src/App.jsx
git commit -m "refactor: migrate buttons and workWithMe to Tailwind utilities"
```

---

## What stays as CSS (intentionally)

These are too complex to inline and should remain in CSS files:

- `custom.css`: `.App`, `.navbar`, `.hero-layout`, `.showcase-window`, `.cont-card`, `.mode-toggle` — these use `::before`, complex gradients, media queries, and animations
- `services.css`, `project.css`, `contact.css`, `steps.css`, `technologies.css`, `faq.css`, `cv.css` — carousel logic, grid layouts, scroll behaviors

The tokens from `@theme` are now available inside these CSS files too via `var(--color-accent)` etc.
