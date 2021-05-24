
import React from "react";



function Product({span, image, omschrijving, prijs}){

return (
    <article className="product">
        <span className="product-span">{span}</span>
        <img src={image} alt={omschrijving}/>
        <p className="product-naam">{omschrijving}</p>
        <h4 className="product-prijs">{prijs}</h4>
    </article>

)
}

export default Product