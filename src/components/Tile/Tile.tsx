export default function Tile({ children, title, image, imageDesc }: { children?: string, title?: string, image?: string, imageDesc?: string }) {
  return (
    <section>
      {image && <img src={ image } alt={ imageDesc } />}
      <h2>{ title }</h2>
      <p>{ children }</p>
    </section>
  );
}