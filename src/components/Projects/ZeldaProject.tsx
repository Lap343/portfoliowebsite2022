// React imports
import React from 'react';
import styled from 'styled-components';
// Asset imports
import zeldaScreenshot from 'assets/zeldaScreenshot.png'

const ZeldaProject = () => {
    return (
        <ZeldaContainer>
            <h2>Legend of Zelda game</h2>
            <ZeldaImg src={zeldaScreenshot} alt='Link in front of an octorock ready to battle' />
            <ButtonLink href='https://lap343.github.io/Zelda-project/' target="_blank" rel="noreferrer">Click here to play the game!</ButtonLink>
            <ButtonLink href='https://github.com/Lap343/Zelda-project' target="_blank" rel="noreferrer">Click here to visit the Github and look at the code!</ButtonLink>
            <p>This was a small side project I made while taking a JavaScript class to better understand JS. I created this game with the help of a couple of youtube videos. Woking on this game really hammered in how JS works and how quickly you code can become spaghetti code and look really messy.
            </p>
        </ZeldaContainer>
    )
};

const ZeldaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ZeldaImg = styled.img`
    width: 75%;
    border: solid black 0.2em;
    margin-bottom: 1em;
`

const ButtonLink = styled.a`
    text-decoration: none;
    color: white;
    background-color: green;
    border: 0.1em solid green;
    border-radius: 1em;
    padding: 0.25em;
    margin-bottom: 0.5em;

    &:hover{
        color: green;
        background-color: white;
    }

    &:visited{
        display: none;
    }
`

export default ZeldaProject;