// Npm imports
import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Asset imports
import location from "assets/location.png";
// Component import
import Earth from './Earth';
// Animation imports
import { fadeIn } from 'animation';

const Location = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    return(
        <>
            <LocationImg 
                // State
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <img src={location} alt="a location icon" />
            </LocationImg>

            {hovered && <LocationPopUp 
                // State
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                // Animation
                variants={fadeIn}
                initial="initial"
                animate="animate"
            >
                <Earth />
            </LocationPopUp>}
        </>
    )
};

const LocationImg = styled(motion.div)`
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: baseline;
    border-radius: 15px;
    padding: 0.2em 0 0.2em 0.5em;
    
    &:hover {
        background: rgba(136,136,136, 0);
        background: radial-gradient(circle, rgba(136,136,136,0.3) 0%, rgba(221,221,221,0.3) 70%);
    }
`
const LocationPopUp = styled(motion.div)`
    z-index: -1;
    height: 20em;
    width: 20em;
    position: relative;
    bottom: 9em;
    left: 8.25em;
    margin-left: -20em;
    border-radius: 25%;
    background-color: rgba(0,0,0,0);
`
export default Location;