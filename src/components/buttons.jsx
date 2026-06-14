function Button({ children }) {
    return (
        <div className="inline-flex">
            <button className="inline-flex items-center gap-[0.55rem] bg-accent text-[#f7f7ff] px-[1.2rem] py-[0.75rem] border border-transparent rounded-[14px] cursor-pointer text-[length:var(--font-size-ui)]">
                {children}
            </button>
        </div>
    );
}

export default Button;
