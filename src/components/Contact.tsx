// Npm imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Style imports
import { ContentInfoContainer, ContactContainer } from 'styles';
// Interface imports
import { RootState } from 'App';

const Contact = () => {

    const theme = useSelector((state: RootState) => state.theme.currentTheme);

    let fileOrder = 3;

    const [dblClicked, setDblClicked] = useState<boolean>(false);

    return(
        <>
            <ContactContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>Contact</h2>
            </ContactContainer>
            {dblClicked && <ContentInfoContainer theme={theme} top="22em" order={fileOrder}>
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
        </>
    )
}

export default Contact;