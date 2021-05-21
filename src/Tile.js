
import React from "react";


function Tile ({ titel, tekst, image, }) {
    return(

        <section className="tile">
            <h2>{titel}</h2>
            <p>{tekst}</p>
            <img src={image} onError={titel}/>

        </section>
    )

}

export default Tile