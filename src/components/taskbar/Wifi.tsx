// Npm imports
import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
// Asset imports
import wifi from "assets/wifi.png";
// Animation imports
import { fadeIn } from 'animation';

interface Props {
    clicked: boolean;
}

const Wifi = () => {

    const [hovered, setHovered] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    return(
        <>
            <WifiImg
                // State
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
            >
                <img className="wifi" src={wifi} alt="a wifi icon" />
            </WifiImg>

            {hovered && <WifiPopUp 
                // State
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                // Animation
                variants={fadeIn}
                initial="initial"
                animate="animate"
            >
                <div>Wifi switch</div>
                <WifiToggle 
                    clicked={clicked}
                    onClick={() => {
                        setClicked(!clicked)
                    }}
                >
                    <motion.div layout />
                </WifiToggle>
                <div>Wifi {!clicked ? "On" : "Off"}</div>
            </WifiPopUp>}
            

            {clicked && <ForOForPage>
                <div className='conatainer'>
                    <h1>Error code 404: Page not found</h1>
                    <div>You turned off the wifi</div>
                    <div>What did you think was going to happen?</div>
                </div>

                <div className='conatainer'>
                    <div>Wifi switch</div>
                    <WifiToggle 
                        clicked={clicked}
                        onClick={() => {
                            setClicked(!clicked)
                        }}
                    >
                        <motion.div layout />
                    </WifiToggle>
                    <div>Wifi {!clicked ? "On" : "Off"}</div>
                </div>
            </ForOForPage>}
        </>
    )
};

const WifiImg = styled(motion.div)`
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
const WifiPopUp = styled(motion.div)`
    z-index: -1;
    height: 8em;
    width: 8em;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    bottom: 5.3em;
    left: 2.5em;
    margin-left: -8em;
    border-radius: 25%;
`
const WifiToggle = styled.div<Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ clicked }) => clicked ? 'flex-end' : 'flex-start'};
    height: 1.75em;
    width: 4em;
    background-color: #545870be;
    border-radius: 15px;

    & div{
        width: 1.5em;
        height: 1.5em;
        background-color: white;
        border-radius: 15px;
        margin-left: 0.25em;
    }
`
const ForOForPage = styled.div`
    background-color: #d8d8d8;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & .conatainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export default Wifi;