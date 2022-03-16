// Npm imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { ContentInfoContainer, ProjectsContainer } from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';

const Projects = () => {

    const theme = useSelector((state: RootState) => state.theme.currentTheme);

    let fileOrder = 2

    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <>
            <ProjectsContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>Projects</h2>
            </ProjectsContainer>
            <AnimatePresence>
                {dblClicked && <ContentInfoContainer 
                    drag 
                    dragConstraints={{ left: -100, right: 800 , bottom: 375, top: -50}}
                    variants={contentInfoVariant}
                    animate='visible'
                    exit='exit'
                    custom={fileOrder}
                    theme={theme} 
                    top="14em" 
                    order={fileOrder}
                >
                    <h3>My Projects:</h3>
                    <p>
                        -Websites <br/>
                        -Phone Apps <br/>
                        -Games
                    </p>
                    <div onClick={() => setDblClicked(!dblClicked)} >X</div>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
}

export default Projects;