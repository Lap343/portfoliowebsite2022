// Npm imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
// Asset imports
import bluetooth from 'assets/bluetooth.png';
import abluetooth from 'assets/abluetooth.png';
// Animation imports
import { fadeIn } from 'animation';

const Bluetooth = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <BluetoothImg 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img src={bluetooth} alt="a bluetooth icon" />
            </BluetoothImg>

            <AnimatePresence>
                {hovered && <BluetoothPopUp 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    // Animation
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <img src={abluetooth} alt="a blue tooth" />
                </BluetoothPopUp>}
            </AnimatePresence>
        </>
    )
};

const BluetoothImg = styled(motion.div)`
    height: 2em;
    width: 1.9em;
    display: flex;
    align-items: center;
    justify-content: baseline;
    border-radius: 15px;
    padding: 0.2em 0.2em 0.2em 0.5em;

    &:hover{
        background: rgba(136,136,136, 0);
        background: radial-gradient(circle, rgba(136,136,136,0.3) 0%, rgba(221,221,221,0.3) 70%);
    }
`
const BluetoothPopUp = styled(motion.div)`
    height: 4em;
    width: 2.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
    background-color: white;
    border: solid 1px black;
    position: relative;
    bottom: 4.2em;
    left: 0.3em;
    margin-left: -3.375em;
    border-radius: 25%;
    padding-left: 0.75em;

    & img{
        height: 2.5em;
    }
`

export default Bluetooth;