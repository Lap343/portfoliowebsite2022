import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.35);
  color: white;
  padding: 0.5em 0;
`;

const ClockContainer = styled.div``;

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
      <div>Mypcand.me</div>
      <ClockContainer>
        <div>
          {date.toLocaleTimeString().slice(0, 5) +
            date.toLocaleTimeString().slice(8)}
        </div>
      </ClockContainer>
      <div>Icons</div>
    </TopBarContainer>
  );
};
