import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  return (
     <nav>

      <h1>Handbags & Purses</h1>

       <button
           onClick={() => console.log( "to the collection")}>
           to the collection
       </button>

         <button
             onClick={() => console.log( "shop al bags")}>
         > shop all bags
         </button>

         <Button/>

     </nav>
  );
}

export default App;



