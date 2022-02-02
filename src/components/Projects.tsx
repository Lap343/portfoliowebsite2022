import React, { useState } from "react";
import styled from "styled-components";
import { ContentInfoContainer } from "./About";

const Projects = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <ProjectsContainer onClick={(e) => e.detail === 2 && setDblClicked(!dblClicked)} >
            <h2>Projects</h2>
            {dblClicked && <ContentInfoContainer>
                <h3>My Projects:</h3>
                <p>
                    -Websites <br/>
                    -Phone Apps <br/>
                    -Games
                </p>
            </ContentInfoContainer>}
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;
    margin-top: 2em;

    & h2{
        padding-left: 0.5em;
    }
`

export default Projects;