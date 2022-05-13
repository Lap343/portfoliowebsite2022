// Npm imports
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
/// Component imports
import Shot from './Shot';
// Model imports
import SpaceShuttel from 'assets/AlienGame/Models/SpaceShuttel';

interface Props {
    score: number
    setScore: Function
}

const Player: React.FC<Props>  = ({ score, setScore }) => {

    const playerMesh = useRef<THREE.Mesh>(null!);

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);

    const [xPos, setXPos] = useState(0);
    const [xPos2, setXPos2] = useState(0);
    const [xPos3, setXPos3] = useState(0);

    const [shot, setShot] = useState(false);
    const [shot2, setShot2] = useState(false);
    const [shot3, setShot3] = useState(false);

    const handleKeyDown = useCallback((e: any) => {
        if(e.code === 'ArrowLeft'){
            setLeft(true)
        }
        if(e.code === 'ArrowRight'){
            setRight(true)
        }
        if(e.code === 'Space'){
            if(shot2){
                if(!shot3){
                    setXPos3(playerMesh.current!.position.x)
                }
                setShot3(true)
            }
            if(shot){
                if(!shot2){
                    setXPos2(playerMesh.current!.position.x)
                }
                setShot2(true)
            }
            if(!shot){
                setXPos(playerMesh.current!.position.x)
            }
            setShot(true)
        }
    }, [shot, shot2, shot3]);

    const handleKeyUp = (e: any) => {
        if(e.code === 'ArrowLeft'){
            setLeft(false)
        }
        if(e.code === 'ArrowRight'){
            setRight(false)
        }
    };

    useFrame(() => {
        if(left && playerMesh.current!.position.x > -3.5){
            playerMesh.current!.position.x -= 0.1;
        }
        if(right && playerMesh.current!.position.x < 3.5){
            playerMesh.current!.position.x += 0.1;
        }
    });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown]);

    return(
        <>
            {shot && 
                <Shot 
                    playerPos={xPos} 
                    setShot={setShot} 
                    name='shot1' 
                    setScore={setScore} 
                    score={score}
                />
            }
            {shot2 && 
                <Shot 
                    playerPos={xPos2} 
                    setShot={setShot2} 
                    name='shot2' 
                    setScore={setScore} 
                    score={score}
                />
            }
            {shot3 && 
                <Shot 
                    playerPos={xPos3} 
                    setShot={setShot3} 
                    name='shot3' 
                    setScore={setScore} 
                    score={score}
                />
            }
            <mesh ref={playerMesh} position={[0, -3, 0]} name={'player'} >
                <SpaceShuttel position={[0.25, -0.5, 0]} scale={0.25} rotation={[0, 1.5, 0]} />
            </mesh>
        </>
    )
};

export default Player;