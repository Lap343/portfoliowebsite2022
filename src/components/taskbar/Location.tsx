// Npm imports
import React, { useState } from "react";
import styled from 'styled-components';
// Asset imports
import location from "assets/location.png";
// Component import
import Earth from './Earth';
// Animation imports
import { smallFadeIn, fadeIn } from 'styles/animations';

interface Props {
    hovered: boolean
}

const Location = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <LocationImg 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img src={location} alt="a location icon" />
            </LocationImg>
            <LocationPopUp 
                hovered={hovered} 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <Earth />
            </LocationPopUp>
        </>
    )
};

const LocationImg = styled.div`
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
const LocationPopUp = styled.div<Props>`
    display: ${props => !props.hovered && 'none' };
    height: 20em;
    width: 20em;
    background-color: white;
    position: relative;
    bottom: 11.5em;
    left: 8em;
    margin-left: -20em;
    border-radius: 25%;
    animation: ${fadeIn} 0.75s linear forwards;
    background-color: rgba(0,0,0,0);
`
export default Location;