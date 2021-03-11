
function Tile({ title, p, image }) {
    if (p === "") {
        return (
            <img src={image} alt={title}/>
            )
    } else {
        return (
            <>
                <h2>{title}</h2>
                <p className="p"> {p} </p>
            </>
        )
    }
}

export default Tile