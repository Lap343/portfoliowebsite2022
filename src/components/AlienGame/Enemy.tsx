// Npm imports
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Model imports
import UFO from 'assets/AlienGame/Models/UFO';

interface Props {
    setEnemy: Function
    height: number
    goingRight: boolean
    name: string
};

const Enemy: React.FC<Props> = ({ setEnemy, height, goingRight, name }) => {

    const enemyMesh = useRef<THREE.Mesh>(null!);

    useFrame(() => {
        if((enemyMesh.current!.position.x > 5 && goingRight) || (enemyMesh.current!.position.x < -5 && !goingRight)){
            setEnemy(false)
        }
        goingRight ? enemyMesh.current!.position.x += 0.1 : enemyMesh.current!.position.x -= 0.1;
    })

    return(
        <>
            <mesh ref={enemyMesh} position={[goingRight ? -6 : 6, height, 0]} name={name} >
                <UFO scale={0.2} rotation={[1, 0, 0]} />
            </mesh>
        </>
    )
};

export default Enemy;