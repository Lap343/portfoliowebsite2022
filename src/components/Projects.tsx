// Npm imports
import React, { useState } from 'react';
//Style imports
import { ContentInfoContainer, ProjectsContainer } from 'styles';

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

export default Projects;