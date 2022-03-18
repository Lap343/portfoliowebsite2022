// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { ContentInfoContainer, ProjectsContainer } from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice';

interface Props {
    appRef: any
};

const Projects = (props: Props) => {

    const dispatch = useDispatch();

    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const fileOrder = useSelector((state: RootState) => state.fileOrder);

    let fileId = 2;

    const [dblClicked, setDblClicked] = useState<boolean>(false);
    const [fileIndex, setFileIndex] = useState<number>(0);

    const fileIndexCheck = (fileOrder: number[], fileId: number) => {
        let index = fileOrder.indexOf(fileId);
        return index
    }

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
                    <h3>My Projects:</h3>
                    <p>
                        -Websites <br/>
                        -Phone Apps <br/>
                        -Games
                    </p>
                    <div onClick={() => {
                        setDblClicked(!dblClicked)
                        if(fileIndex !== -1){
                            dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                        }
                        setFileIndex(-1)
                    }} >X</div>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
};

export default Projects;