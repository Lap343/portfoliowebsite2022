// Npm imports
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props {
    top: string,
    order: number,
    theme: ThemeProps
}

interface ThemeProps {
    theme: string
}

export const ContentInfoContainer = styled(motion.div)<Props>`
    color: ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    background-color: ${ ({theme}) => theme === 'light' ? 'white' : '#28313d' };
    border-radius: 0.5em;
    box-shadow: 0 5px 25px 0 rgba(0,0,0,0.25),
                0 0 0 0.3em ${ ({theme}) => theme === 'light' ? 'lightgrey' : '#394554' },
                0 0 0 0.35em;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ order }) => (order * 4) + 10}em; // Have the file move by two em to the right depending on the number of file clicked
    z-index: ${({ order }) => order + 10}; // Have the z-index increase by one depending on the numbers of files open
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const ContentInfoHeader = styled.div<ThemeProps>`
    background-color: ${ ({theme}) => theme === 'light' ? 'lightgrey' : '#394554' };
    border-radius: 0.5em 0.5em 0 0;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    padding-left: 1em;

    & .x{
        color: ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
        position: absolute;
        text-align: center;
        right: 0.5em;
        top: 0;
        background-color: ${ ({theme}) => theme === 'light' ? 'none' : '#28313d' };
        border: solid 1px ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
        width: 2em;

        &:hover{
            color: white;
            background-color: red;
        }
    }
`

export const ContentInfo = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1em;
`