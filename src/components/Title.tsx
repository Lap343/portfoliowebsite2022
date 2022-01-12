import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Title = () => {
    return(
        <TitleContainer>
            <img src={logo} alt="My pc and me logo of a stick figure on a computer" />
            <div>Mypcand.me</div>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;

    & img{
        padding-right: 0.5em;
        height: auto;
        width: 2em;
    }
    font-size: 3em;
`

export default Title;