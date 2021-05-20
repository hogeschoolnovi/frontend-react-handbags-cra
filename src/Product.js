
import React from "react";


/*function Product(){
return (
    <article className={'product'}>
        <span>Best seller</span>
        <img src={foto} alt={"tas"}/>
        <p className={'product'}> The handy bag  </p>
        <h4 className={'product'}>350,-</h4>
    </article>
)
}*/

/*<Product
    span="Best-seller"
    image={bag1}
    omschrijving="The handy bag"
    prijs="350,-"

/>*/

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