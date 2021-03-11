import React from 'react';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand_image from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import './App.css';

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav className="nav">
            <Button
                title="to the collection"
                disable={false}
            />
            <Button
                title="shop all bags"
                disable={false}
            />
            <Button
                title="pre orders"
                disable={true}
            />
        </nav>
        <main className="main">
            <Product
                spantext="Best seller"
                image={bag_1}
                title="The handy bag"
                price="400"
            />
            <Product
                spantext="Best seller"
                image={bag_2}
                title="The stylish bag"
                price="250"
            />
            <Product
                spantext="New Collection"
                image={bag_3}
                title="The simple bag"
                price="300"
            />
            <Product
                spantext="New Collection"
                image={bag_4}
                title="The trendy bag"
                price="150"
            />
        </main>
          <footer className="footer">
              <section className="section">
                  <Tile
                  title="The brand"
                  p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  image=""
                  />
              </section>
              <section className="section">
                  <Tile
                      title=""
                      p=""
                      image={brand_image}
                  />
              </section>
              <section className="section">
                  <Tile
                      title=""
                      p=""
                      image={our_story}
                  />
              </section>
              <section className="section">
                  <Tile
                      title="Our story"
                      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                      image=""
                  />
              </section>
          </footer>
      </>
  )
};

export default App;

