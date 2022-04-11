// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { 
    ContentInfoContainer, 
    AboutContainer, 
    ContentInfoHeader, 
    ContentInfo 
} from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice';
// Utilities imports
import { fileIndexCheck } from 'utilities';

interface Props {
    appRef: any
};

const About = (props: Props) => {

    let fileId = 1;

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
                    <ContentInfoHeader theme={theme}>
                        <h3>About Luis Perez:</h3>
                        <div 
                            className='x' 
                            onClick={() => {
                                setDblClicked(!dblClicked)
                                if(fileIndex !== -1){
                                    dispatch(removeFile(fileIndex))
                                }
                                setFileIndex(-1)
                            }}
                        >X</div>
                    </ContentInfoHeader>
                    <ContentInfo>
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
                    </ContentInfo>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
};

export default About;