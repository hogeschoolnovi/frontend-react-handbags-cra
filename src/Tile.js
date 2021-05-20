
import React from "react";


function Tile ({ titel, tekst, image, }) {
    return(

        <section className="tile">
            <h2 className="tile-tekst">{titel}</h2>
            <p className="tile-titel">{tekst}</p>
            <img onError={tekst} src={image} alt={titel}/>

        </section>
    )

}

export default Tile