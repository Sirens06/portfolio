function FrontendShowcase() {
  return (
    <aside className="frontend-showcase reveal reveal-right" data-reveal aria-label="Frontend developer showcase">
      <div className="showcase-window">
        <div className="window-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="window-content">
          <div className="code-panel">
            <div className="code-line code-line-tag">
              <span className="code-accent">&lt;section</span> className=
              <span className="code-string">"hero"</span>
              <span className="code-accent">&gt;</span>
            </div>
            <div className="code-line code-line-indent">
              <span className="code-accent">&lt;Headline</span> text=
              <span className="code-string">"Modern frontend"</span>
              <span className="code-accent"> /&gt;</span>
            </div>
            <div className="code-line code-line-indent">
              <span className="code-accent">&lt;CTA</span> variant=
              <span className="code-string">"primary"</span>
              <span className="code-accent"> /&gt;</span>
            </div>
            <div className="code-line">
              <span className="code-accent">&lt;/section&gt;</span>
            </div>
          </div>

          <div className="preview-panel">
            <div className="preview-badge">Live UI</div>
            <div className="preview-card preview-card-main">
              <div className="preview-chip" />
              <div className="preview-heading" />
              <div className="preview-text" />
              <div className="preview-text preview-text-short" />
              <div className="preview-actions">
                <span className="preview-button preview-button-primary" />
                <span className="preview-button preview-button-secondary" />
              </div>
            </div>

            <div className="stack-card stack-card-top">
              <span>React</span>
            </div>
            <div className="stack-card stack-card-middle">
              <span>Tailwind</span>
            </div>
            <div className="stack-card stack-card-bottom">
              <span>Components</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FrontendShowcase;
