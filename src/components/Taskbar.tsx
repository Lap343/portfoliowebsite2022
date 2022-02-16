import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import bluetooth from "../assets/bluetooth.png";
import wifi from "../assets/wifi.png";
import speaker from "../assets/speaker.png";

const Taskbar = () => {

    const [date, setDate] = useState(new Date());

    let time = date.toLocaleTimeString().slice(0,5) + date.toLocaleTimeString().slice(8)

    const updateClock = () => {
        setTimeout(() => {
            setDate(new Date())
        }, 15000)
    }

    useEffect(() => {
      updateClock()
    }, [date])

    return(
        <TaskbarContainer>
            <LeftContainer>
                <img src={logo} alt="My pc and me logo of a stick figure on a computer" />
                <div>Mypcand.me</div>
            </LeftContainer>
            <RightContainer>
                <img className="bluetooth" src={bluetooth} alt="a bluetooth icon" />
                <img className="wifi" src={wifi} alt="a wifi icon" />
                <img className="speaker" src={speaker} alt="a speaker icon" />
                <TimeContainer>
                    <div>{time}</div>
                    <div>{date.toLocaleDateString()}</div>
                </TimeContainer>
            </RightContainer>
        </TaskbarContainer>
    )
}

const TaskbarContainer = styled.div`
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
const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 55px;
    font-size: 2em;
    color: white;

    & img{
        padding: 0 0.25em;
        height: auto;
        width: 1em;
    }
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & img{
        height: auto;
        width: 1.5em;
        padding-right: 0.75em;
    }
`
const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-right: 1.25em;
`

export default Taskbar;