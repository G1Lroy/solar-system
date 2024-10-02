import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Text, Text3D } from "@react-three/drei";
import * as THREE from 'three';
import { rotationPeriods } from './../const/index'

function PlanetWithOrbit({ semiMajorAxis, eccentricity, size, color, orbitPeriod, name, inclination, texture }) {
    const ref = useRef();
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - Math.pow(eccentricity, 2));


    useFrame(({ clock }) => {
        
        const elapsedDays = (clock.getElapsedTime() / 60) * 365; // Переводим прошедшее время в "земные дни"
        const t = (elapsedDays / orbitPeriod) * 2 * -Math.PI; // Угол в радианах для анимации орбиты
        const rotationPeriodInSeconds = rotationPeriods[name.toLowerCase()]; // Период вращения в секундах
        const rotationSpeed = ((2 * Math.PI) / rotationPeriodInSeconds); // Угловая скорость вращения
        // Обновляем положение планеты
        ref.current.position.x = semiMajorAxis * Math.cos(t) + eccentricity;
        ref.current.position.z = semiMinorAxis * Math.sin(t);
        ref.current.rotation.y += rotationSpeed * (clock.getDelta())
    });

    // Создание точек для основной орбиты
    const points = [];
    for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const x = semiMajorAxis * Math.cos(angle) + eccentricity;
        const z = semiMinorAxis * Math.sin(angle);
        points.push([x, 0, z]);
    }


    return (
        <group rotation={[THREE.MathUtils.degToRad(inclination), 0, 0]}>
            {/* Орбита и планета */}
            <Line points={points} color={color} lineWidth={1} />
            <mesh ref={ref}>
                <Text>0</Text>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>

        </group>
    );
}

export default PlanetWithOrbit

