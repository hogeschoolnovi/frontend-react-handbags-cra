export default function Product({ children, label, image, price }: { children: string, label: string, image: string, price: number }) {
  return (
    <article>
      <span>{ label }</span>
      <img src={ image } alt={ children } />
      <p>{ children }</p>
      <h4>€{ price },-</h4>
    </article>
  );
}