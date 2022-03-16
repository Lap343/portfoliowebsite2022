// Npm imports
import styled from 'styled-components';
import { motion } from "framer-motion";

interface Props {
    top: string,
    order: number,
    theme: string
}

export const ContentInfoContainer = styled(motion.div)<Props>`
    width: 30em;
    height: 18em;
    padding: 2em 1em;
    color: ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    background-color: ${ ({theme}) => theme === 'light' ? 'white' : '#28313d' };
    border: .1em solid ${ ({theme}) => theme === 'light' ? 'black' : 'white' };
    border-radius: 1em;
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ order }) => (order * 4) + 10}em; // Have the file move by two em to the right depending on the number of file clicked
    z-index: ${({ order }) => order}; // Have the z-index increase by one depending on the numbers of files open
    overflow: hidden;

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