import { useState } from "react";


export default function ThemeToggle() {
    const [drak, setDark] = useState(true);

    const toggle = () => {
        document.body.style.background = drak ? "#fff" : "#000";
        document.body.style.color = drak ? "#000" : "#fff";
        setDark(!drak);
    };

    return <button onClick={toggle}>Toggle Theme</button>
}