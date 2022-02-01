import React, { useState } from "react";
import styled from "styled-components";

const Projects = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <ProjectsContainer onClick={(e) => e.detail === 2 && setDblClicked(!dblClicked)} >
            <h2>Projects</h2>
            {dblClicked && <p>
                -Websites <br/>
                -Phone Apps <br/>
                -Games
            </p>}
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