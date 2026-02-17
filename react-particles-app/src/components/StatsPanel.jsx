import { useEffect, useState } from "react";

export default function StatsPanel() {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let last = performance.now();
    let frames = 0;

    const loop = () => {
      frames++;
      const now = performance.now();

      if (now > last + 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <div className="stats">FPS: {fps}</div>;
}
