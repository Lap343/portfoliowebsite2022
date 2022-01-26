import React from "react";
import styled from "styled-components";

const About = () => {
    return(
        <AboutContainer>
            <h2>About</h2>
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
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    & p{
        display: none;
    }
`

export default About;