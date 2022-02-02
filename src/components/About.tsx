import React, { useState } from "react";
import styled from "styled-components";

const About = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <AboutContainer onClick={(e) => e.detail === 2 && setDblClicked(!dblClicked)} >
            <h2>About</h2>
            {dblClicked && <ContentInfoContainer>
                <h3>About Luis Perez:</h3>
                <p>
                    Welcome to my website. My name is Luis Perez. I'm a software developer living in Fresno, CA. I learned my 
                    basic understanding of coding at Geekwise Acadamy in Fresno. There I learned basic HTML5, CSS, and 
                    JavaSript. After Geekwise, I went on to expand my knowledge through online courses and making WordPress 
                    websites for business at an accounting firm. Now I am in a wonderful opprotunity as a React apprentice at 
                    Alphaworks in Fresno, CA.
            
                    -Website programmer and designer
                    -Game Developer
                    -Dad joke/ dry humor enthusiest
                </p>
            </ContentInfoContainer>}
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;

    & h2{
        padding-left: 0.5em;
    }
`
export const ContentInfoContainer = styled.div`
    border: .1em solid black;
    border-radius: 1em;
    position: absolute;
    left: 20em; // Have the file move by two em to the right depending on the number of file clicked
    z-index: 1; // Have the z-index increase by one depending on the numbers of files open
    background-color: white;
    width: 30em;
    padding: 2em 1em;
`

export default About;