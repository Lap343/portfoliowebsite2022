// Npm imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
// Style imports
import { ContentInfoContainer, ContactContainer } from 'styles';
// Interface imports
import { RootState } from 'App';
// Animation imports
import { contentInfoVariant } from 'animation';

const Contact = () => {

    const theme = useSelector((state: RootState) => state.theme.currentTheme);

    let fileOrder = 3;

    const [dblClicked, setDblClicked] = useState<boolean>(false);

    return(
        <>
            <ContactContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>Contact</h2>
            </ContactContainer>
            <AnimatePresence>
                {dblClicked && <ContentInfoContainer 
                    drag 
                    dragConstraints={{ left: -100, right: 800 , bottom: 375, top: -50}}
                    variants={contentInfoVariant}
                    animate='visible'
                    exit='exit'
                    custom={fileOrder}
                    theme={theme} 
                    top="22em" 
                    order={fileOrder}
                >
                    <h3>Contact me:</h3>
                    <p>
                        -Email: luisperez@mypcand.me<br/>
                        -LinkedIn: www.linkedin.com/in/lap343<br/>
                        -Github: https://github.com/Lap343<br/>
                        -Twitter: @lap343<br/>
                        -Raven coordinates/ sky-write over: 36.7378° N, 119.7871° W
                    </p>
                    <div onClick={() => setDblClicked(!dblClicked)} >X</div>
                </ContentInfoContainer>}
            </AnimatePresence>
        </>
    )
}

export default Contact;