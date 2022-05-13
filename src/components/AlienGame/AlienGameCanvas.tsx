// Npm imports
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// Component imports
// import Background from './Background';
import Player from './Player';
import Enemies from './Enemies';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from 'components/taskbar/Globe';

interface Props {
    score: number
    setScore: Function
    started: boolean
}

const AlienGameCanvas: React.FC<Props> = ({ score, setScore, started }) => {
    return(
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10,15,10]} angle={0.3} />
                    <Stars />
                    <Globe position={[8, -8, -10]} />
                    {started && 
                        <>
                            <Player score={score} setScore={setScore} />
                            <Enemies />
                        </>
                    }
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </>
    )
};

export default AlienGameCanvas;