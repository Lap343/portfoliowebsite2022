import styled from 'styled-components';

export const TaskbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 2.75em;
    background-color: #00000088;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 55px;
    font-size: 2em;

    & .logo{
        padding: 0 0.25em;
        height: auto;
        width: 1em;
    }
`
export const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & img{
        height: auto;
        width: 1.5em;
        padding-right: 0.75em;
    }
`
export const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 0 1.25em;
`