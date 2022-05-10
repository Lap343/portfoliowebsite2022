// Npm imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
// Style imports
import { 
    ContentInfoContainer, 
    ContactContainer, 
    ContentInfoHeader,
    ContentInfo,
    FolderBack,
    FolderFront
} from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';
// Redux imports
import { addFile, removeFile } from 'redux/fileOrderSlice';
// Utilities imports
import { fileIndexCheck } from 'utilities';
// Image imports
import folderBackImg from 'assets/folderBack.png';
import folderFrontImg from 'assets/folderFront.png';

interface Props {
    appRef: any
};

const Contact = (props: Props) => {

    let fileId = 3;

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

    let sendEmail = (e:any) => {
        e.preventDefault();

        emailjs.sendForm('service_lhwlz4b', 'template_09tjdk3', e.target, process.env.REACT_APP_EMAILJS_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return(
        <>
            {/* Contact Folder */}
            <ContactContainer 
                onClick={(e) => {
                    e.detail === 2 && setDblClicked(true)
                    if(fileIndex === -1){
                        e.detail === 2 && dispatch(addFile(fileId))
                    }
                }
            }>
                <FolderBack src={folderBackImg} alt="back of folder" />
                <FolderFront src={folderFrontImg} alt="front of folder" />
                <h2>Contact</h2>
            </ContactContainer>

            {/* Contact File */}
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
                    top="22em" 
                    order={fileIndex}
                    onClick={() => {
                        dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                        dispatch(addFile(fileId))
                    }}
                >
                    <ContentInfoHeader theme={theme} >
                        <h3>Contact me:</h3>
                        <div 
                            className='x' 
                            onClick={() => {
                                setDblClicked(!dblClicked)
                                if(fileIndex !== -1){
                                    dispatch(removeFile(fileIndexCheck(fileOrder, fileId)))
                                }
                                setFileIndex(-1)
                            }}
                        >X</div>
                    </ContentInfoHeader>

                    <ContentInfo>
                        <p>
                            - Email: luisperez@mypcand.me<br/>
                            - LinkedIn: www.linkedin.com/in/lap343<br/>
                            - Github: https://github.com/Lap343<br/>
                            - Twitter: @lap343<br/>
                            - Raven coordinates/ sky-write over: 36.7378° N, 119.7871° W
                        </p>

                        <form onSubmit={sendEmail}>
                            <h3>Send me a message</h3>
                            <input type="text" placeholder="Name" name="name"></input><br/>
                            <input type="email" placeholder="Email Address" name="email"></input><br/>
                            <input type="text" placeholder="Subject" name="subject"></input><br/>
                            <textarea id="" cols={30} rows={8} placeholder="Your Message" name="message"></textarea><br/>
                            <input type="submit" value="Send Message"></input>
                        </form>
                    </ContentInfo>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
};

export default Contact;