const Button = (props) => {
    return (
        <button type="button" onClick={() => alert(`Io sono il button ${props.label}`)}>{props.label}</button>
    )
}

export default Button;