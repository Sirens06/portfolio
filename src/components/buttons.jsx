function Button({ children }) {
    return (
        <div className="button">
            <button className="primary-button">{children}</button>
        </div>
    );
}

export default Button;