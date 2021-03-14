import React from "react";

function Product( { bagLabel, image, title, price} ){
  return (
    <article className="product">
      <span>{bagLabel}</span>
      <img src={image} alt={title}/>
      <p>€{price},-</p>
      <h4>{title}</h4>
    </article>

  );
}

export default Product;