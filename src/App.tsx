import React from 'react';
import './App.css';

// Components
import Button from './components/Button/Button';
import Product from './components/Product/Product';
import Tile from './components/Tile/Tile';

export default function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button disabled={ false }>to the collection</Button>
        <Button disabled={ false }>shop all bags</Button>
        <Button disabled={ true }>pre-orders</Button>
      </nav>
      <main>
        <Product label='Best seller' image='./assets/bag_1.png' price={ 400 }>The handy bag</Product>
        <Product label='Best seller' image='./assets/bag_2.png' price={ 250 }>The stylish bag</Product>
        <Product label='New collection' image='./assets/bag_3.png' price={ 300 }>The simple bag</Product>
        <Product label='New collection' image='./assets/bag_4.png' price={ 150 }>The trendy bag</Product>
      </main>
      <footer>
        <Tile title='The brand' image={undefined} imageDesc={undefined}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.
        </Tile>
        <Tile image='./assets/brand.png' imageDesc='The brand logo' children={undefined} title={undefined} />
        <Tile image='./assets/our_story.png' imageDesc='The designers' children={undefined} title={undefined} />
        <Tile title='Our story' image={undefined} imageDesc={undefined}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.
        </Tile>
      </footer>
    </>
  );
}
