import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.35);
  color: white;
  padding: 0.5em 0;
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
  top: -1.2em;
  height: 0;
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
      <IconContainer>Icons</IconContainer>
    </TopBarContainer>
  );
};
