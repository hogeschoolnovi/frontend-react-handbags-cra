import foto from "./bag_1.png";
import React from "react";

function Product(){
return (
    <article className={'product'}>
        <span>Best seller</span>
        <img src={foto} alt={"tas"}/>
        <p className={'product'}> The handy bag  </p>
        <h4 className={'product'}>350,-</h4>
    </article>
)
}

export default Product