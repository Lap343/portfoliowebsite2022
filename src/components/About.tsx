import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
    top: string,
    order: number
}

const About = () => {
    let fileOrder = 1

    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <>
            <AboutContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>About</h2>
            </AboutContainer>
            {dblClicked && <ContentInfoContainer top="6em" order={fileOrder}>
                <h3>About Luis Perez:</h3>
                <p>
                    Welcome to my website. My name is Luis Perez. I'm a software developer living in Fresno, CA. I learned my 
                    basic understanding of coding at Geekwise Acadamy in Fresno. There I learned basic HTML5, CSS, and 
                    JavaSript. After Geekwise, I went on to expand my knowledge through online courses and making WordPress 
                    websites for business at an accounting firm. Now I am in a wonderful opprotunity as a React apprentice at 
                    Alphaworks in Fresno, CA.
            
                    <p>-Website programmer and designer</p>
                    <p>-Game Developer</p>
                    <p>-Dad joke/ dry humor enthusiast</p>
                </p>
                <div onClick={() => setDblClicked(!dblClicked)} >X</div>
            </ContentInfoContainer>}
        </>
    )
}

const AboutContainer = styled.div`
    z-index: 10;
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;
    
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    & h2{
        padding-left: 0.5em;
    }
`
const enlarge = (x:number) => keyframes`
    0%{
        width: 0em;
        height: .1em;
        padding: 0;
        left: 10em;
    }
    50%{
        width: 10em;
        height: .1em;
        padding: 0;
        left: (15 + (${x} * 4))em;
    }
    100%{
        width: 30em;
        height: 18em;
        padding: 2em 1em;
        left: (20 + (${x} * 4))em;
    }
`
export const ContentInfoContainer = styled.div<Props>`
    border: .1em solid black;
    border-radius: 1em;
    position: absolute;
    top: ${props => props.top};
    left: ${props => (props.order * 4) + 10}em; // Have the file move by two em to the right depending on the number of file clicked
    z-index: ${props => props.order}; // Have the z-index increase by one depending on the numbers of files open
    background-color: white;
    overflow: hidden;
    animation: ${props => enlarge(props.order)} 1.5s forwards ease-in-out;

    & div{
        position: absolute;
        top: 1em;
        right: 1.25em;
        font-weight: bold;

        // No text select
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
`

export default About;