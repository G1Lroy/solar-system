import { OrbitControls, } from '@react-three/drei';
import { Canvas, } from '@react-three/fiber';
import PlanetWithOrbit from './PlanetWithOrbit';
import Sun from './Sun';
import { planetsData } from '../const';
import * as THREE from 'three';


function SolarSystem() {
  return (
    <Canvas
      camera={{ position: [10, 10, 10], fov: 100 }}
      style={{ height: '100vh' }}
    >
      <color
        attach="background"
        args={['#030035']}
      />
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      <Sun />

      {Object.entries(planetsData).map(([name, params]) => (
        <PlanetWithOrbit
          key={name}
          name={name}
          semiMajorAxis={params.semiMajorAxis}
          eccentricity={params.eccentricity}
          size={params.size}
          color={params.color}
          orbitPeriod={params.orbitPeriod}
          inclination={params.inclination}
          texture={createGradientTexture()}
          isRetrograd={params.isRetrograd}
          rotationPeriod={params.rotationPeriod}
        />
      ))}
    </Canvas>
  );
}

export default SolarSystem;


function createGradientTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
  gradient.addColorStop(0, 'rgba(255, 255, 0, 1)'); // Цвет в центре
  gradient.addColorStop(1, 'rgba(255, 0, 0, 1)'); // Цвет на краю

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}








