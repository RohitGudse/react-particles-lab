export default function ShapeSelector({ setShape }) {
  return (
    <div>
      <label>Shape</label>
      <select onChange={e => setShape(e.target.value)}>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="star">Star</option>
      </select>
    </div>
  );
}
