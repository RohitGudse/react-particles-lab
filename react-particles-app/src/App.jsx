import ParticleBackground from "./components/ParticleBackground";
import ControlPanel from "./components/ControlPanel";
import ThemeToggle from "./components/ThemeToggle";
import StatsPanel from "./components/StatsPanel";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import useParticlesConfig from "./hooks/useParticlesConfig";
import { useState, useEffect } from "react";

export default function App() {
  const { config, setSpeed, setCount, setColor } = useParticlesConfig();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Layout>
      <ParticleBackground config={config} />
      <Header />
      <ThemeToggle />
      <ControlPanel
        setSpeed={setSpeed}
        setCount={setCount}
        setColor={setColor}
      />
      <StatsPanel />
    </Layout>
  );
}
