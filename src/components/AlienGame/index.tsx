// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// Components imports
import AlienGameCanvas from './AlienGameCanvas';
// Interface imports
import { RootState } from 'App';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice';
// Asset imports
import AlienGameFile from 'assets/AlienGame/AlienGameFile.png';
// Utilities imports
import { fileIndexCheck } from 'utilities';
// Style imports
import { 
    ContentInfoContainer,
    ContentInfoHeader, 
} from 'styles';
// Animation imports
import { contentInfoVariant } from 'animation';
// Sound imports
import { open, close } from 'assets/sounds';
import { main } from 'assets/AlienGame/sounds';

interface Props {
    appRef: any
};

const AlienGame = (props: Props) => {

    let fileId = 4;

    // Redux state
    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const fileOrder = useSelector((state: RootState) => state.fileOrder);
    const mutedState = useSelector((state: RootState) => state.mute.isMuted);

    const dispatch = useDispatch();

    // React state
    const [dblClicked, setDblClicked] = useState<boolean>(false);
    const [fileIndex, setFileIndex] = useState<number>(0);

    useEffect(() => {
        setFileIndex(fileIndexCheck(fileOrder, fileId))
    }, [fileOrder])

    return(
        <>
            <AlienFileContainer 
                onClick={(e) => {
                    (!mutedState && open.play());
                    if(e.detail === 2){
                        setDblClicked(true)
                        main.play()
                    }
                    if(fileIndex === -1){
                        e.detail === 2 && dispatch(addFile(fileId))
                    }
                }
            }>
                <AlienFileImg src={AlienGameFile} alt='Alien game file png' />
            </AlienFileContainer>

            <AnimatePresence>
                {dblClicked && 
                    <ContentInfoContainer
                        style={{backgroundColor: 'black'}}
                        drag
                        dragConstraints={props.appRef}
                        dragElastic={0}
                        dragMomentum={false}
                        variants={contentInfoVariant}
                        animate='visible'
                        exit='exit'
                        custom={fileId}
                        theme={theme} 
                        top="6em" 
                        order={fileIndex}
                        onClick={() => {
                            dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                            dispatch(addFile(fileId))
                        }}
                    >
                        <ContentInfoHeader theme={theme} >
                            <h3>Alien Invasion:</h3>
                            <div 
                                className='x' 
                                onClick={() => {
                                    (!mutedState && close.play());
                                    (!mutedState && main.stop())
                                    setDblClicked(!dblClicked)
                                    if(fileIndex !== -1){
                                        dispatch(removeFile(fileIndex))
                                    }
                                    setFileIndex(-1)
                                }}
                            >X</div>
                        </ContentInfoHeader>

                        <AlienGameCanvas />

                    </ContentInfoContainer>
                }
            </AnimatePresence>
        </>
    )
};

const AlienFileContainer = styled.div`
    /* position: relative; */
    width: 9.5em;
    height: 10em;
    padding: 0.5em 0.5em;

    &:hover{
        background-color: rgba(0,0,0,0.5);
        border-radius: 1em;
    }
`
const AlienFileImg = styled.img`
    width: 10em;
`

export default AlienGame;