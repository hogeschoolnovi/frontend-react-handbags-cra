import React from 'react';

function Button( { onClick, text, boolean } ) {
  return(
    <button disabled={boolean} onClick={onClick}>
      {text}
      </button>
  );
}

export default Button;