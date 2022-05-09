// Npm imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";
// Redux imports
import { changeTheme } from 'redux/themeSlice';
// Asset imports
import moon from 'assets/moon.png';
import sun from 'assets/sun.png';

interface Props {
    clicked: boolean;
}

const ThemeBtn = () => {

    const dispatch = useDispatch();

    const [clicked, setClicked] = useState<boolean>(false);

    return(
        <ThemeBtnStyle onClick={() => {
                setClicked(!clicked)
                dispatch(changeTheme())
            }}>
            <ThemeBtnContainer clicked={clicked}>
                <SunImg src={sun} alt="the sun" clicked={clicked} />
                <MoonImg src={moon} alt="the moon" clicked={clicked} />
                <motion.div layout />
            </ThemeBtnContainer>
        </ThemeBtnStyle>
    )
};

const ThemeBtnStyle = styled.div`
    color: white;
    height: 2em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: baseline;
    border-radius: 15px;
    padding: 0.2em 0.2em 0.2em 0.2em;
    
    &:hover {
        background: rgba(136,136,136, 0);
        background: radial-gradient(circle, rgba(136,136,136,0.3) 0%, rgba(221,221,221,0.3) 70%);
    }
`
const ThemeBtnContainer = styled.div<Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ clicked }) => clicked ? 'flex-end' : 'flex-start'};
    height: 1.75em;
    width: 4em;
    background-color: #545870be;
    border-radius: 15px;
    
    & div{
        width: 1.5em;
        height: 1.5em;
        background-color: white;
        border-radius: 15px;
        margin-left: 0.25em;
    }
`
const SunImg = styled.img<Props>`
    opacity: ${({ clicked }) => clicked ? 1 : 0};
    position: relative;
    right: 2em;
`
const MoonImg = styled.img<Props>`
    opacity: ${({ clicked }) => clicked ? 0 : 1};
    position: relative;
    left: 4.6em;
    margin-left: -4.5em;
`

export default ThemeBtn;