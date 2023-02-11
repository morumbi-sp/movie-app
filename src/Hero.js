export default function Hero({ name, modified, resourceURI }) {
  return (
    <li>
      <h2>{name}</h2>
      <span>{modified}</span>
      <br />
      <span>{resourceURI}</span>
    </li>
  );
}
