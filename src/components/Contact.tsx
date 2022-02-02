import React, { useState } from "react";
import styled from "styled-components";
import { ContentInfoContainer } from "./About";

const Contact = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <ContactContainer onClick={(e) => e.detail === 2 && setDblClicked(!dblClicked)} >
            <h2>Contact</h2>
            {dblClicked && <ContentInfoContainer>
                <h3>Contact me:</h3>
                <p>
                    -Email: luisperez@mypcand.me<br/>
                    -LinkedIn: www.linkedin.com/in/lap343<br/>
                    -Github: https://github.com/Lap343<br/>
                    -Twitter: @lap343<br/>
                    -Raven coordinates/ sky-write over: 36.7378° N, 119.7871° W
                </p>
            </ContentInfoContainer>}
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    background-image: url("folder.png");
    background-size: cover;
    background-position: center;
    width: 9em;
    height: auto;
    padding-top: 2em;
    margin-top: 2em;

    & h2{
        padding-left: 0.5em;
    }
`

export default Contact;