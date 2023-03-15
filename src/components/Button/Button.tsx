export default function Button({ children, disabled }: { children: string, disabled: boolean }) {
  return (
    <button disabled={ disabled } onClick={() => console.log({ children })}>{ children }</button>
  );
}