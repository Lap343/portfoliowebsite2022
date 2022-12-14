import React, { useEffect, useState } from "react";
import styled from "styled-components";
import battery0 from "assets/mobile/battery0.png";
import battery1 from "assets/mobile/battery1.png";
import battery2 from "assets/mobile/battery2.png";
import battery3 from "assets/mobile/battery3.png";
import battery4 from "assets/mobile/battery4.png";
import battery5 from "assets/mobile/battery5.png";
import charged from "assets/mobile/charged.png";
import charging0 from "assets/mobile/charging0.png";
import charging1 from "assets/mobile/charging1.png";

const TopBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.1em;
  height: 1.4em;
  padding: 0.5em;
`;

const WebsiteName = styled.div``;

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -1.15em;
  height: 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -1.4em;
`;

const BatteryImg = styled.img`
  height: 1.5em;
`;

export const TopBar = () => {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  let batteryIconList = [
    battery0,
    battery1,
    battery2,
    battery3,
    battery4,
    battery5,
    charged,
    charging0,
    charging1,
  ];

  const updateClock = () => {
    setTimeout(() => {
      setDate(new Date());
      if (count > batteryIconList.length) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
  };

  useEffect(() => {
    updateClock();
  }, [date]);
  return (
    <TopBarContainer>
      <WebsiteName>Mypcand.me</WebsiteName>
      <ClockContainer>
        <div>
          {date.toLocaleTimeString().slice(0, 5) +
            date.toLocaleTimeString().slice(8)}
        </div>
      </ClockContainer>
      <IconContainer>
        <BatteryImg
          src={batteryIconList[count]}
          alt="Battery icon displaying a almost dead battery"
        />
      </IconContainer>
    </TopBarContainer>
  );
};
