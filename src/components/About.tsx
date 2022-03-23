// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { ContentInfoContainer, AboutContainer } from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice'

interface Props {
    appRef: any
};

const About = (props: Props) => {

    const dispatch = useDispatch();

    const theme = useSelector((state: RootState) => state.theme.currentTheme);
    const fileOrder = useSelector((state: RootState) => state.fileOrder);

    let fileId = 1;

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
            <AboutContainer onClick={(e) => {
                e.detail === 2 && setDblClicked(true)
                if(fileIndex === -1){
                    e.detail === 2 && dispatch(addFile(fileId))
                }
            }}>
                <h2>About</h2>
            </AboutContainer>
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
                    top="6em" 
                    order={fileIndex}
                    onClick={() => {
                        dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                        dispatch(addFile(fileId))
                    }}
                >
                    <h3>About Luis Perez:</h3>
                    <p>
                        Welcome to my website. My name is Luis Perez. I'm a software developer living in Fresno, CA. I learned my 
                        basic understanding of coding at Geekwise Acadamy in Fresno. There I learned basic HTML5, CSS, and 
                        JavaSript. After Geekwise, I went on to expand my knowledge through online courses and making WordPress 
                        websites for business at an accounting firm. Now I am in a wonderful opprotunity as a React apprentice at 
                        Alphaworks in Fresno, CA.
                    </p>
                    <p>-Website programmer and designer</p>
                    <p>-Game Developer</p>
                    <p>-Dad joke/ dry humor enthusiast</p>
                    
                    <div onClick={() => {
                        setDblClicked(!dblClicked)
                        if(fileIndex !== -1){
                            dispatch(removeFile(fileIndex))
                        }
                        setFileIndex(-1)
                    }} >X</div>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
};

export default About;