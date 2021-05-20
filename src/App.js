import React from 'react';
import './App.css';
import bag1 from './bag_1.png';
import bag2 from './bag_2.png';
import bag3 from './bag_3.png';
import bag4 from './bag_4.png';
import Button from "./Button";
import Product from "./Product";





function App() {
  return (

     <nav>

      <h1>Handbags & Purses</h1>

         <Button subject ={"To The Collection"}/>
         <Button subject ={"Shop All Bags"}/>
         <Button subject ={"Pre-Orders"}/>


    <main>

          <Product
              span="Best-seller"
              image={bag1}
              omschrijving="The handy bag"
              prijs="€350,-"
          />

        <Product
            span="Best-seller"
            image={bag2}
            omschrijving="The stylish bag"
            prijs="€250,-"
        />

        <Product
            span="New collection"
            image={bag2}
            omschrijving="The simple bag"
            prijs="€300,-"
        />

        <Product
            span="New collection"
            image={bag2}
            omschrijving="The trendy bag"
            prijs="€150,-"
        />

</main>

</nav>
  );
}

export default App;



