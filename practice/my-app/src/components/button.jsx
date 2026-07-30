function Button({text, colour, onnclick}) {
    return(
        <button
        className="btn"
        style={{ backgroundColor: colour }}
        onClick={onnclick}
        >
        {text}
        </button>
    );
}
export default Button;