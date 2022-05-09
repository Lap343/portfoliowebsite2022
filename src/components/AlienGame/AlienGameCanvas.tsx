// Npm imports
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// Component imports
// import Background from './Background';
import Player from './Player';
import Enemies from './Enemies';
import { OrbitControls, Stars } from '@react-three/drei';

const AlienGameCanvas = () => {
    return(
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10,15,10]} angle={0.3} />
                <Stars />
                <Player />
                <Enemies />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
};

export default AlienGameCanvas;