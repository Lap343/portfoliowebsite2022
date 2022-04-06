// React imports
import React from 'react';
import styled from 'styled-components';
// Asset imports
import pokedexApp from 'assets/pokedexApp.png'

const PokeApp = () => {
    return (
        <PokeContainer>
            <PokeImg src={pokedexApp} alt='A pokedex showing pikachu vs. charmander' />
            <h2>Pokedex App</h2>
            <ButtonLink href='https://pokedex-app-3fb51.web.app/' target="_blank" rel="noreferrer">Click here to play the game!</ButtonLink>
            <ButtonLink href='https://github.com/Lap343/poke-app' target="_blank" rel="noreferrer">Click here to visit the Github and look at the code!</ButtonLink>
            <p>This is a pokedex app that you can search for any pokemon and thier stats will show up. If you search another pokemon the app pust both up againt each other in a vs mode screen to see which pokemon is stronger. This was coded by Elias Gutierrez, Jorge Villalobos and myself.
            </p>
        </PokeContainer>
    )
};

const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokeImg = styled.img`
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

export default PokeApp;