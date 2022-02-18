import styled, { keyframes } from 'styled-components';

interface Props {
    top: string,
    order: number
}

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