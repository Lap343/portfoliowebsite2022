import React from "react";
import styled from "styled-components";

const Projects = () => {
    return(
        <ProjectsContainer>
            <h2>Projects</h2>
            <p>
                -Websites <br/>
                -Phone Apps <br/>
                -Games
            </p>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    & p{
        display: none;
    }
`

export default Projects;