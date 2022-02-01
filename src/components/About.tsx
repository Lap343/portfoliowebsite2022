import React, { useState } from "react";
import styled from "styled-components";

const About = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <AboutContainer>
            <h2 onClick={(e) => e.detail === 2 ? (setDblClicked(!dblClicked)) : null } >About</h2>
            {dblClicked && <p>
                Welcome to my website. My name is Luis Perez. I'm a software developer living in Fresno, CA. I learned my 
                basic understanding of coding at Geekwise Acadamy in Fresno. There I learned basic HTML5, CSS, and 
                JavaSript. After Geekwise, I went on to expand my knowledge through online courses and making WordPress 
                websites for business at an accounting firm. Now I am in a wonderful opprotunity as a React apprentice at 
                Alphaworks in Fresno, CA.
        
                -Website programmer and designer
                -Game Developer
                -Dad joke/ dry humor enthusiest
            </p>}
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

export default About;