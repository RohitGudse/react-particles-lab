   export default function SaveSettings({ config }) {

  const save = () => {
    localStorage.setItem("particleConfig", JSON.stringify(config));
    alert("Saved!");
  };

  const load = () => {
    const saved = localStorage.getItem("particleConfig");
    if (saved) window.location.reload();
  };

  return (
    <div>
      <button onClick={save}>Save</button>
      <button onClick={load}>Load</button>
    </div>
  );
}
