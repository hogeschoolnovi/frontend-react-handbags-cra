import React from 'react';
import './App.css';
import foto from './bag_1.png';





function App() {
  return (

/*     <nav>

      <h1>Handbags & Purses</h1>

         <Button subject ={"To The Collection"}/>
         <Button subject ={"Shop All Bags"}/>
         <Button subject ={"Pre-Orders"}/>

     </nav>*/

<main>
          <article>
              <span>Best seller</span>
              <img src={foto} alt={"tas"}/>
              <p> The handy bag  </p>
              <h4>350,-</h4>
          </article>

        <article subject={"Best-Seller"}/>

</main>
  );
}

export default App;



