// Npm imports
import React, { useState } from "react";
import styled from 'styled-components';
// Asset imports
import location from "assets/location.png";
// Component import
import Earth from './Earth';

interface Props {
    hovered: boolean
}

const Location = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <LocationImg 
                className="location" 
                src={location} 
                alt="a location icon" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                hovered={hovered}
            />
            {hovered && 
                <LocationPopUp onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Earth />
                </LocationPopUp>
            }
        </>
    )
};

const LocationImg = styled.img<Props>`
    border: ${props => props.hovered ? 'white' : 'none'} solid 1px;
`
const LocationPopUp = styled.div`
    background-color: white;
    border: solid 1px black;
    position: relative;
    bottom: 1.5em;
    margin-left: -1em;
`
export default Location;