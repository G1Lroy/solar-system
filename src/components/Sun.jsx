import React from 'react'
import { SUN_SIZE } from './../const/index'
import { PointLight } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
function Sun() {



    return (
        <mesh >
            <sphereGeometry args={[SUN_SIZE, 64, 64]} />
            <meshStandardMaterial
                color="yellow"
                emissive="orange"
                emissiveIntensity={2}
            />
            <pointLight
                position={[0, 0, 0]}
                intensity={3} // Настройте интенсивность света
                distance={50} // Определите радиус действия света
                decay={1} // Параметр затухания
            />
        </mesh>
    );
}

export default Sun