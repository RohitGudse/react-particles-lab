import { useCallback } from "react";
import Particles from "react-tsparticles";
import {loadFull} from "trparticles";


export default function ParticleBackground() {


    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);


    retrun(
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                background: { color: "0f172a" },
                particles: {
                    number: { values: 80 },
                    size: { value: 3 },
                    move: { enable: true, speed: 1 },
                    links: {
                        enable: true,
                        distance: 150

                    }
                },

                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    },

                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 }
                    }
                }
            }}
        />
    );
}