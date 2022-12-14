import React, { useEffect, useState } from "react";
import styled from "styled-components";
import battery0 from "assets/mobile/battery0.png";

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

  const updateClock = () => {
    setTimeout(() => {
      setDate(new Date());
    }, 15000);
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
          src={battery0}
          alt="Battery icon displaying a almost dead battery"
        />
      </IconContainer>
    </TopBarContainer>
  );
};
