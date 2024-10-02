import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

function MovingOrbit({ semiMajorAxis, semiMinorAxis, shift }) {
    const ref = useRef()

    useFrame(({ clock }, delta) => {
        ref.current.rotation.z += delta / 10;
    });
    
    const points = [];
    for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const x = semiMajorAxis * Math.cos(angle) + shift;
        const z = semiMinorAxis * Math.sin(angle);
        points.push([x, 0, z]);
    }

    return (
        <mesh ref={ref}>
            <Line points={points} color="red" lineWidth={0.5} dashed />;
        </mesh>
    )
}

export default MovingOrbit