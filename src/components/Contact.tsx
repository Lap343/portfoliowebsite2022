import React from "react";
import styled from "styled-components";

const Contact = () => {
    return(
        <ProjectsContainer>
            <h2>Contact</h2>
            <p>
                -Email: luisperez@mypcand.me<br/>
                -LinkedIn: www.linkedin.com/in/lap343<br/>
                -Github: https://github.com/Lap343<br/>
                -Twitter: @lap343<br/>
                -Raven coordinates/ sky-write over: 36.7378° N, 119.7871° W
            </p>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    & p{
        display: none;
    }
`

export default Contact;