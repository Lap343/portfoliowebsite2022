// Npm imports
import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
// Component imports
import Enemy from './Enemy';

const Enemies = () => {

    let counter = 0;

    const [enemy, setEnemy] = useState(true);
    const [enemy2, setEnemy2] = useState(true);

    useFrame(() => {
        if(counter === 100){
            setEnemy(true)
            setEnemy2(true)
            counter = 0
        }else{
            counter++
        }
    })

    return(
        <>
            {enemy && <Enemy setEnemy={setEnemy} height={3} goingRight={true} name='enemy1' />}
            {enemy2 && <Enemy setEnemy={setEnemy2} height={2} goingRight={false} name='enemy2' />}
        </>
    )
};

export default Enemies;