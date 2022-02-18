// Npm imports
import React, { useState } from 'react';
import styled from 'styled-components';
// Asset imports
import bluetooth from 'assets/bluetooth.png';
import abluetooth from 'assets/abluetooth.png';

interface Props {
    hovered: boolean
}

const Bluetooth = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <BluetoothImg 
                className="bluetooth" 
                src={bluetooth} 
                alt="a bluetooth icon" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                hovered={hovered}
            />
            {hovered && <BluetoothPopUp onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <img src={abluetooth} alt="a blue tooth" />
            </BluetoothPopUp>}
        </>
    )
};

const BluetoothImg = styled.img<Props>`
    border: ${props => props.hovered ? 'white' : 'none'} solid 1px;
`
const BluetoothPopUp = styled.div`
    background-color: white;
    border: solid 1px black;
    position: relative;
    bottom: 2.5em;
    margin-left: -2.5em;
`

export default Bluetooth;