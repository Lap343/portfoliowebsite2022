// Npm imports
import React, { useState } from "react";
import styled from 'styled-components';
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
// Redux imports
import { toggleMute } from 'redux/muteSlice';
// Interface imports
import { RootState } from 'App';
// Asset imports
import speaker from "assets/speaker.png";
import mute from "assets/mute.png";
// Animation imports
import { fadeIn } from "animation/fadeIn";

const Speaker = () => {

    const [hovered, setHovered] = useState<boolean>(false);

    const dispatch = useDispatch();
    const mutedState = useSelector((state: RootState) => state.mute.isMuted);

    return(
        <>
            <SpeakerImg
                // State
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                onClick={() => dispatch(toggleMute())}
            >
                <img className="speaker" src={mutedState ? mute : speaker} alt="a speaker icon" />
            </SpeakerImg>

            <AnimatePresence>
                {hovered && <WifiPopUp 
                    // Animation
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div>Click to mute</div>
                    <div>sound is {!mutedState ? "On" : "Off"}</div>
                </WifiPopUp>}
            </AnimatePresence>
        </>
    )
};

const SpeakerImg = styled.div`
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
    height: 7em;
    width: 8em;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    bottom: 4.8em;
    left: 2.5em;
    margin-left: -8em;
    border-radius: 25%;
`

export default Speaker;