import React from 'react';
import './App.css';
import foto from './bag_1.png';
import Button from "./Button";
import Product from "./Product";





function App() {
  return (
      <main>
     <nav>

      <h1>Handbags & Purses</h1>

         <Button subject ={"To The Collection"}/>
         <Button subject ={"Shop All Bags"}/>
         <Button subject ={"Pre-Orders"}/>

     </nav>


          <article>
              <span>Best seller</span>
              <img src={foto} alt={"tas"}/>
              <p> The handy bag  </p>
              <h4>350,-</h4>
          </article>

          <Product/>
          <Product/>
          <Product/>
</main>
  );
}

export default App;



