// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { ContentInfoContainer, ProjectsContainer, ContentInfoHeader } from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice';
// Utilities imports
import { fileIndexCheck } from 'utilities';
// Component imports
import ZeldaProject from './ZeldaProject';
import PokeApp from './PokeApp';
import ReactToadsPartyPack from './ReactToadsPartyPack';

interface Props {
    appRef: any
};

const Projects = (props: Props) => {

    let fileId = 2;

    // Redux state
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const fileOrder = useSelector((state: RootState) => state.fileOrder);

    const dispatch = useDispatch();

    // React state
    const [dblClicked, setDblClicked] = useState<boolean>(false);
    const [fileIndex, setFileIndex] = useState<number>(0);

    useEffect(() => {
        setFileIndex(fileIndexCheck(fileOrder, fileId))
    }, [fileOrder])

    return(
        <>
            <ProjectsContainer onClick={(e) => {
                e.detail === 2 && setDblClicked(true)
                if(fileIndex === -1){
                    e.detail === 2 && dispatch(addFile(fileId))
                }
            }}>
                <h2>Projects</h2>
            </ProjectsContainer>

            {/* Projects File */}
            <AnimatePresence>
                {dblClicked && <ContentInfoContainer 
                    drag 
                    dragConstraints={props.appRef}
                    dragElastic={0}
                    dragMomentum={false}
                    variants={contentInfoVariant}
                    animate='visible'
                    exit='exit'
                    custom={fileId}
                    theme={theme} 
                    top="14em" 
                    order={fileIndex}
                    onClick={() => {
                        dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                        dispatch(addFile(fileId))
                    }}
                >
                    <ContentInfoHeader theme={theme} >
                        <h3>My Projects:</h3>
                        <div className='x' onClick={() => {
                            setDblClicked(!dblClicked)
                            if(fileIndex !== -1){
                                dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                            }
                            setFileIndex(-1)
                        }} >X</div>
                    </ContentInfoHeader>

                    <ReactToadsPartyPack /><hr/>
                    <PokeApp /><hr/>
                    <ZeldaProject />
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
};

export default Projects;