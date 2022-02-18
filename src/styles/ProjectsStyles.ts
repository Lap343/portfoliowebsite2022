import styled from "styled-components";

export const ProjectsContainer = styled.div`
    z-index: 10;
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;
    margin-top: 2em;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    & h2{
        padding-left: 0.5em;
    }
`