// Npm imports
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Globe = () => {

    const earthMesh = useRef<THREE.Mesh>(null!);

    const colorMap = useLoader(TextureLoader, 'earth.jpg');
 
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        earthMesh.current!.rotation.y = a;
    });

    return(
        <mesh ref={earthMesh}>
            <sphereGeometry args={[2,10,14]} />
            <meshBasicMaterial map={colorMap} />
        </mesh>
    )
};

export default Globe;