// Npm imports
import React from "react";
import styled from 'styled-components';
// Asset imports
import speaker from "assets/speaker.png";

const Speaker = () => {
    return(
        <SpeakerImg>
            <img className="speaker" src={speaker} alt="a speaker icon" />
        </SpeakerImg>
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

export default Speaker;