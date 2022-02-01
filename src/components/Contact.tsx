import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
    const [dblClicked, setDblClicked] = useState<boolean>(false)

    return(
        <ProjectsContainer>
            <h2 onClick={(e) => e.detail === 2 ? (setDblClicked(!dblClicked)) : null } >Contact</h2>
            {dblClicked && <p>
                -Email: luisperez@mypcand.me<br/>
                -LinkedIn: www.linkedin.com/in/lap343<br/>
                -Github: https://github.com/Lap343<br/>
                -Twitter: @lap343<br/>
                -Raven coordinates/ sky-write over: 36.7378° N, 119.7871° W
            </p>}
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
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