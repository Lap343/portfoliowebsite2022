// Npm imports
import styled from "styled-components";

export const ProjectsContainer = styled.div`
    position: relative;
    width: 9em;
    height: 7em;
    padding: 1em;
    z-index: 10;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    &:hover{
        background-color: rgba(0,0,0,0.5);
        border-radius: 1em;
    }

    & h2{
        position: absolute;
        left: 1.25em;
        bottom: 0.75em;
    }
`