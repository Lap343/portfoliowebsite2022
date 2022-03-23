// Npm imports
import React, { useState, useEffect } from 'react';
// Style imports
import { 
    TaskbarContainer,
    LeftContainer,
    RightContainer,
    TimeContainer
} from 'styles';
// Component imports
import Logo from './Logo';
import WebsiteName from './WebsiteName';
import Loaction from './Location';
import Bluetooth from './Bluetooth';
import Wifi from './Wifi';
import Speaker from './Speaker';
import ThemeBtn from './ThemeBtn';

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
                <Logo />
                <WebsiteName />
            </LeftContainer>

            <RightContainer>

                <ThemeBtn />
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