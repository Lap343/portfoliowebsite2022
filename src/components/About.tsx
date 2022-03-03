// Npm imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Style imports
import { AboutContainer, ContentInfoContainer } from 'styles';
// Interface imports
import { RootState } from 'App';

const About = () => {

    const theme = useSelector((state: RootState) => state.theme.currentTheme);

    let fileOrder = 1

    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <>
            <AboutContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>About</h2>
            </AboutContainer>
            {dblClicked && <ContentInfoContainer theme={theme} top="6em" order={fileOrder}>
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
                
                <div onClick={() => setDblClicked(!dblClicked)} >X</div>
            </ContentInfoContainer>}
        </>
    )
}

export default About;