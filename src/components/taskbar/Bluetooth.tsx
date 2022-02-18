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
            < BluetoothImg 
                className="bluetooth" 
                src={bluetooth} 
                alt="a bluetooth icon" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                hovered={hovered}
            />
            { hovered && <BluetoothPopUp>
                <img src={abluetooth} alt="a blue tooth" />
            </BluetoothPopUp>}
        </>
    )
};

const BluetoothPopUp = styled.div`
    background-color: white;
    border: solid 1px black;
    position: relative;
    bottom: 3em;
    margin-left: -2.5em;
`
const BluetoothImg = styled.img<Props>`
    border: ${props => props.hovered ? 'white' : 'none'} solid 1px;
`

export default Bluetooth;