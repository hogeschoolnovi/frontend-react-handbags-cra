
function Button({ title, disable }) {
    return (
        <button type="button" disabled={disable} className="button">{title}</button>
    )
}

export default Button