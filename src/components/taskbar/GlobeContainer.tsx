// Npm imports
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// Component imports
import Globe from './Globe';

const GlobeContainer = () => {
    return(
        <Canvas>
            <Suspense fallback={null}>
                <OrbitControls />
                <ambientLight intensity={0.2} />
                <directionalLight />
                <Globe position={[0, 0, 0]} />
            </Suspense>
        </Canvas>
    )
};

export default GlobeContainer;