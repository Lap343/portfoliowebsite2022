// Npm imports
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

interface Props {
    position: number[]
}

const Globe: React.FC<Props>  = ({ position }) => {

    const earthMesh = useRef<THREE.Mesh>(null!);

    const colorMap = useLoader(TextureLoader, 'earth.jpg');

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        earthMesh.current!.rotation.y = a;
    });

    return(
        <mesh ref={earthMesh} position={[position[0], position[1], position[2]]} >
            <sphereGeometry args={[2,10,14]} />
            <meshBasicMaterial map={colorMap} />
        </mesh>
    )
};

export default Globe;