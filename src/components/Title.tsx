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
    align-items: center;
    position: absolute;
    right: 2%;
    top: 2%;
    padding: 1%;
    border-radius: 55px;
    font-size: 3em;
    background-color: rgba(99, 99, 99, 0.2);

    & img{
        padding-right: 0.5em;
        height: auto;
        width: 2em;
    }
`

export default Title;