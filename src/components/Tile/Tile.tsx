export default function Tile({ children, title, image, imageDesc }: { children: string|undefined, title: string|undefined, image: string|undefined, imageDesc: string|undefined }) {
  return (
    <section>
      {image && <img src={ image } alt={ imageDesc } />}
      <h2>{ title }</h2>
      <p>{ children }</p>
    </section>
  );
}