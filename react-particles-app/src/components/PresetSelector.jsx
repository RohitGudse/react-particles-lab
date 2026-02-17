export default function PresetSelector({ applyPreset }) {
    const presets = {
        slow: { speed: 1, count: 50 },
        normal: { speed: 3, count: 100 },
        crazy: { speed: 8, count: 200 }
    }
};


return (
    <div>
        <h4>Presets</h4>
        {Object.keys(presets).map(name => (
            <button key={name} onClick={() => applyPreset[name]}>{name}</button>
        ))}
    </div>
)