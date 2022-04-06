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
    font-size: 1;
    color: ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    background-color: ${ ({theme}) => theme === 'light' ? 'white' : '#28313d' };
    border: .15em solid ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ order }) => (order * 4) + 10}em; // Have the file move by two em to the right depending on the number of file clicked
    z-index: ${({ order }) => order + 10}; // Have the z-index increase by one depending on the numbers of files open
    border-radius: 0.5em;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const ContentInfoHeader = styled.div<ThemeProps>`
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: .1em solid ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    margin-bottom: 0.5em;
`