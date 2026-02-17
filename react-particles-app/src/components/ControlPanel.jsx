export default function ControlPanel({ setSpeed, setCount, setColor }) {
  return (
    <div className="panel">
      <h3>Controls</h3>

      <label>Speed</label>
      <input type="range" min="1" max="10"
        onChange={e => setSpeed(e.target.value)} />

      <label>Count</label>
      <input type="range" min="10" max="200"
        onChange={e => setCount(e.target.value)} />

      <label>Color</label>
      <input type="color"
        onChange={e => setColor(e.target.value)} />
    </div>
  );
}