// Npm imports
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

interface Props {
    playerPos: number
    setShot: Function
    name: string
    setScore: Function
    score: number
};

const Shot: React.FC<Props> = ({ playerPos, setShot, name, setScore, score }) => {

    const three = useThree();

    const enemyArray = three.scene.children.filter(element => element.name.includes('enemy'));

    const shotMesh1 = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        shotMesh1.current!.position.y += 0.2;

        if(shotMesh1.current!.position.y >= 5){
            setShot(false)
        }
        for (var i = 0; i < enemyArray.length; i++) {

            let enemyLeft = enemyArray[i].position.x - 1
            let enemyRight = enemyArray[i].position.x + 1
            let enemyUp = enemyArray[i].position.y + 0.5
            let enemyDown = enemyArray[i].position.y - 1

            if(
                enemyLeft <= shotMesh1.current!.position.x && 
                enemyRight >= shotMesh1.current!.position.x &&
                enemyUp >= shotMesh1.current!.position.y &&
                enemyDown <= shotMesh1.current!.position.y 
            ){
                state.set(state => {
                    explodeCheck()
                    setScore(score += 100)
                    let setEnemyArray = state.scene.children.filter(element => element.name.includes('enemy'))
                    setEnemyArray[i].visible = false
                })
                setShot(false)
            }
        }
    });

    return(
        <>
            <mesh 
                ref={shotMesh1} 
                position={[playerPos, -3, 0]} 
                name={name}
            >
                <planeGeometry args={[0.1, 0.8]} />
                <meshBasicMaterial color={'lightgreen'} />
            </mesh>
        </>
    )
};

export default Shot;