import React from 'react';

function Tile( { title, textBody, image, imgAlt } ){
  return(
      <section>
        <h2>{title}
          <img src={image} alt={imgAlt}/>
        </h2>
        <p>
          {textBody}
        </p>
      </section>
  );
}

export default Tile;