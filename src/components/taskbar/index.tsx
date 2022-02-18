// Npm imports
import React, { useState, useEffect } from 'react';
// Image imports
import logo from "assets/logo.png";
// Style imports
import { 
    TaskbarContainer,
    LeftContainer,
    RightContainer,
    TimeContainer
} from 'styles';
// Component imports
import Loaction from './Location';
import Bluetooth from './Bluetooth';
import Wifi from './Wifi';
import Speaker from './Speaker';

const Taskbar = () => {

    const [date, setDate] = useState(new Date());

    let time = date.toLocaleTimeString().slice(0,5) + date.toLocaleTimeString().slice(8);

    const updateClock = () => {
        setTimeout(() => {
            setDate(new Date())
        }, 15000)
    };

    useEffect(() => {
      updateClock()
    }, [date]);

    return(
        <TaskbarContainer>

            <LeftContainer>
                <img src={logo} alt="My pc and me logo of a stick figure on a computer" />
                <div>Mypcand.me</div>
            </LeftContainer>

            <RightContainer>

                <Loaction />
                <Bluetooth />
                <Wifi />
                <Speaker />

                <TimeContainer>
                    <div>{time}</div>
                    <div>{date.toLocaleDateString()}</div>
                </TimeContainer>

            </RightContainer>

        </TaskbarContainer>
    )
};


export default Taskbar;