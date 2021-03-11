
function Product({ spantext, image, title, price }) {
    return (
        <>
            <article className="article">
                <span className="span">{spantext}</span>
                <img src={image} alt={title}/>
                <p className="p">{title}</p>
                <h4>{"€" + price}</h4>
            </article>
        </>
    )
};

export default Product