import { useCallback,  useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            "particles":{
                "color":{
                    "value":"#fff"
                },
                "move":{
                    "direction":"bottom",
                    "enable":true,
                    "outModes":"out",
                    "speed":1
                },
                "number":{
                    "density":{
                        "enable":true,
                        "area":800
                    },
                    "value":100
                },
                "opacity":{
                    "value":0.3
                },
                "shape":{
                    "type":"circle"
                },
                "size":{
                    "value":5
                },
                "wobble":{
                    "enable":true,
                    "distance":5,
                    "speed":20
                },
                "zIndex":{
                    "value":{
                        "min":0,
                        "max":100
                    }
                }
            }
        }
    })

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
}

export default ParticlesComponent