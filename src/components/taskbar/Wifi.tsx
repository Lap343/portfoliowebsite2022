// Npm imports
import React from "react";
import styled from 'styled-components';
// Asset imports
import wifi from "assets/wifi.png";
// Animation imports
import { smallFadeIn } from 'styles/animations';

const Wifi = () => {
    return(
        <WifiImg>
            <img className="wifi" src={wifi} alt="a wifi icon" />
        </WifiImg>
    )
};

const WifiImg = styled.div`
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: baseline;
    border-radius: 15px;
    padding: 0.2em 0 0.2em 0.5em;
    
    &:hover {
        animation: ${smallFadeIn} 0.25s linear forwards;
        background: rgba(136,136,136, 0);
        background: radial-gradient(circle, rgba(136,136,136,0.3) 0%, rgba(221,221,221,0.3) 70%);
    }
`

export default Wifi;