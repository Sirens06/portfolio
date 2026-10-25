const buttonClass = "inline-flex items-center justify-center gap-[0.55rem] bg-accent text-[#f7f7ff] px-[1.2rem] py-[0.75rem] border border-transparent rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)] no-underline transition-colors hover:bg-accent-strong";

// Renders a link when `href` is given (a <button> inside an <a> is invalid HTML),
// otherwise a plain button.
function Button({ children, href, onClick, className = '' }) {
    return (
        <div className={`button inline-flex ${className}`}>
            {href ? (
                <a
                    className={buttonClass}
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                    {children}
                </a>
            ) : (
                <button className={buttonClass} onClick={onClick}>{children}</button>
            )}
        </div>
    );
}

export default Button;
