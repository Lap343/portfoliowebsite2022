// Npm imports
import React, { useState, useEffect } from 'react';
// Image imports
import logo from "../assets/logo.png";
import bluetooth from "../assets/bluetooth.png";
import wifi from "../assets/wifi.png";
import speaker from "../assets/speaker.png";
// Style imports
import { 
    TaskbarContainer,
    LeftContainer,
    RightContainer,
    TimeContainer
} from '../styles';

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


export default Taskbar;