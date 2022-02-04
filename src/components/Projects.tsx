import React, { useState } from "react";
import styled from "styled-components";
import { ContentInfoContainer } from "./About";

const Projects = () => {
    let fileOrder = 2

    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <>
            <ProjectsContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>Projects</h2>
            </ProjectsContainer>
            {dblClicked && <ContentInfoContainer top="14em" order={fileOrder}>
                <h3>My Projects:</h3>
                <p>
                    -Websites <br/>
                    -Phone Apps <br/>
                    -Games
                </p>
                <div onClick={() => setDblClicked(!dblClicked)} >X</div>
            </ContentInfoContainer>}
        </>
    )
}

const ProjectsContainer = styled.div`
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

export default Projects;