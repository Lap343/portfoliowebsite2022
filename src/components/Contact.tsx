import React, { useState } from "react";
import styled from "styled-components";
import { ContentInfoContainer } from "./About";

const Contact = () => {
    let fileOrder = 3

    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <>
            <ContactContainer onClick={(e) => e.detail === 2 && setDblClicked(true)} >
                <h2>Contact</h2>
            </ContactContainer>
            {dblClicked && <ContentInfoContainer top="22em" order={fileOrder}>
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

const ContactContainer = styled.div`
    z-index: 10;
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;
    margin-top: 2em;
    
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    & h2{
        padding-left: 0.5em;
    }
`

export default Contact;