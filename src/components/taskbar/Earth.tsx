// Npm imports
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from './Globe'

const Earth = () => {
    return(
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <Globe />
            </Suspense>
        </Canvas>
    )
};

export default Earth;