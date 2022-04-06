// React imports
import React from 'react';
import styled from 'styled-components';
// Asset imports
import partyPackApp from 'assets/partyPackApp.png'

const ReactToadsPartyPack = () => {
    return (
        <PartyPackContainer>
            <PartyPackImg src={partyPackApp} alt='A pokedex showing pikachu vs. charmander' />
            <h2>React Toads Party Pack</h2>
            <ButtonLink href='https://github.com/krferrell/AngreeBirdz' target="_blank" rel="noreferrer">Click here to visit the Github and look at the code!</ButtonLink>
            <p>This app was made with React Native code. It is a Wario-ware type games where you play small games and try to beat them all before you lose all your lives. Was coded by Jorge Villalobos, Kenneth Ferrell, and myself, plus ideas by Kendrick Mausolf. Follow the instructions on the readMe to download and play the app.
            </p>
        </PartyPackContainer>
    )
};

const PartyPackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PartyPackImg = styled.img`
    width: 75%;
    border: solid black 0.2em;
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

export default ReactToadsPartyPack;