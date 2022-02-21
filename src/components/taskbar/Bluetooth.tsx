// Npm imports
import React, { useState } from 'react';
import styled from 'styled-components';
// Asset imports
import bluetooth from 'assets/bluetooth.png';
import abluetooth from 'assets/abluetooth.png';
// Animation imports
import { smallFadeIn, fadeIn } from 'styles/animations';

interface Props {
    hovered: boolean
}

const Bluetooth = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <BluetoothImg 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                hovered={hovered}
            >
                <img src={bluetooth} alt="a bluetooth icon" />
            </BluetoothImg>
            <BluetoothPopUp 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                hovered={hovered}
            >
                <img src={abluetooth} alt="a blue tooth" />
            </BluetoothPopUp>
        </>
    )
};

const BluetoothImg = styled.div<Props>`
    height: 2em;
    width: 1.9em;
    display: flex;
    align-items: center;
    justify-content: baseline;
    border-radius: 15px;
    padding: 0.2em 0.2em 0.2em 0.5em;

    &:hover{
        animation: ${smallFadeIn} 0.25s linear forwards;
        background: rgba(136,136,136, 0);
        background: radial-gradient(circle, rgba(136,136,136,0.3) 0%, rgba(221,221,221,0.3) 70%);
    }
`
const BluetoothPopUp = styled.div<Props>`
    display: ${props => !props.hovered ? 'none' : 'flex' };
    height: 4em;
    width: 2.5em;
    align-items: center;
    justify-content: baseline;
    background-color: white;
    border: solid 1px black;
    position: relative;
    bottom: 4.2em;
    left: 0.3em;
    margin-left: -3.4em;
    animation: ${fadeIn} 0.75s linear forwards;
    border-radius: 25%;
    padding: 0 0 0 0.75em;
`

export default Bluetooth;