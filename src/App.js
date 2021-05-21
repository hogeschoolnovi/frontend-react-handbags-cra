import React from 'react';
import './App.css';
import bag1 from './bag_1.png';
import bag2 from './bag_2.png';
import bag3 from './bag_3.png';
import bag4 from './bag_4.png';
import brand from './brand.png';
import story from './our_story.png';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile.js";





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
            image={bag3}
            omschrijving="The simple bag"
            prijs="€300,-"
        />

        <Product
            span="New collection"
            image={bag4}
            omschrijving="The trendy bag"
            prijs="€150,-"
        />

</main>


         <footer>

{/*             Tegels
             Maak een omwikkelende footer-tag voor de tegels. Maak vier section-elementen met daarin:
             Een afbeelding van het merk of de designers (als er geen tekst in staat)
             Een h2-element voor de titel en p-elementen voor de paragrafen (als er wel tekst in staat)
             Maak nu een custom Tile-component die alle benodigde data kan ontvangen.
             Als er een afbeelding wordt meegegeven gedraagd hij zich als een foto-tegel,
             maar zonder afbeelding is het een tekst-tegel.
             Houd er rekening mee dat je van tevoren ook niet weet hoeveel
             losse paragrafen er in een Tile komen te staan.

             [x] maak section elementen
             [] vertaal naar component

             [] functie "foto of tekst kan in component (in js toch ?)"
             [] optie tot meerdere paragrafen ?*/}


             <Tile
             titel="The brand"
             tekst="fantastisch merk"

             />

             <Tile
                 titel="our story"
                 tekst="LoremLoremLoremLoremLoremLorem"
                 image={brand}
             />

             <Tile
                 titel="our story"
                 tekst="ge-wel-dig verhaal"
                 image={story}
             />

             <Tile
                 titel="our story"
                 tekst="ge-wel-dig verhaal"
             />

         </footer>


</nav>
  );
}

export default App;



