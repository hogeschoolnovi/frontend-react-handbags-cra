import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";


import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";

import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
          <nav>
            {/*Need to add anonymous onClick function instead of regular onClick function because regular one would execute immediately instead of waiting to be called (clicked) on*/}
            <Button
              text="to the collection"
              onClick={()  => {console.log("to the collection")}}
            />
            <Button
              text="shop all bags"
              onClick={()  => {console.log("shop all bags")}}
            />
            {/* Still need to figure out how to disable this button */}
            <Button boolean="true"
                    text="pre-orders"
                    onClick={()  => {console.log("pre-orders")}}
            />
          </nav>
          <main>
            <Product
              bagLabel="Best seller"
              image={bag_1}
              title="The Handy Bag"
              price="400"
            />
            <Product
              bagLabel="Best seller"
              image={bag_2}
              title="The Stylish Bag"
              price="250"
            />
            <Product
              agLabel="New collection"
              image={bag_3}
              title="The Simple Bag"
              price="300"
            />
            <Product
              bagLabel="New collection"
              image={bag_4}
              title="The Trendy Bag"
              price="150"
            />
          </main>
          <footer>
            <Tile
             title="THE BRAND"
             textBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              Aliquam faucibus purus in massa tempor nec feugiat nisl.
              Nunc sed blandit libero volutpat sed cras ornare arcu.
              Lectus magna fringilla urna porttitor rhoncus dolor purus."
            />
            <Tile
             image={brand}
             imgAlt="brand_picture"
            />
            <Tile
             image={our_story}
             imgAlt="our story"
            />
            <Tile
              title="OUR STORY"
              textBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              Aliquam faucibus purus in massa tempor nec feugiat nisl.
              Nunc sed blandit libero volutpat sed cras ornare arcu.
              Lectus magna fringilla urna porttitor rhoncus dolor purus."
            />
          </footer>
      </>
  );
}

export default App;



