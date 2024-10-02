import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Text, Text3D } from "@react-three/drei";
import * as THREE from 'three';



function PlanetWithOrbit({ semiMajorAxis, eccentricity, size, color, orbitPeriod, name, inclination, texture, isRetrograd, rotationPeriod }) {
    const ref = useRef();
    const [timeScale, setTimeScale] = useState(1);

    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - Math.pow(eccentricity, 2));


    useFrame(({ clock }) => {
        // Прошедшее время в земных годах, где 1 минута = 1 земной год
        const elapsedYears = (clock.getElapsedTime()) / 60 * timeScale

        // Угол в радианах для движения по орбите
        const orbitProgress = elapsedYears / (orbitPeriod / 365);
        const orbitAngle = orbitProgress * 2 * -Math.PI;

        // Обновляем положение планеты по орбите
        const x = semiMajorAxis * Math.cos(orbitAngle) + eccentricity;
        const z = semiMinorAxis * Math.sin(orbitAngle);
        ref.current.position.set(x, 0, z);

        // Угловая скорость вращения
        const rotationSpeed = (2 * Math.PI * 365) / (rotationPeriod);

        // Вращение планеты вокруг своей оси
        if (isRetrograd) {
            ref.current.rotation.y += rotationSpeed * timeScale
        } else {
            ref.current.rotation.y -= rotationSpeed * timeScale
        }
    });

    // Создание точек для основной орбиты
    const points = Array.from({ length: 361 }, (_, i) => {
        const angle = (i * Math.PI) / 180;
        const x = semiMajorAxis * Math.cos(angle) + eccentricity;
        const z = semiMinorAxis * Math.sin(angle);
        return [x, 0, z];
    });


    return (
        <group rotation={[THREE.MathUtils.degToRad(inclination), 0, 0]}>
            {/* Орбита и планета */}
            <Line points={points} color={color} lineWidth={1} />
            <mesh ref={ref}>
                <Text >0</Text>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>

        </group>
    );
}

export default PlanetWithOrbit

