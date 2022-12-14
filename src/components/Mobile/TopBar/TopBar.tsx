import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.35);
  color: white;
  padding: 0.5em 0;
`;

export const TopBar = () => {
  return (
    <TopBarContainer>
      <div>Mypcand.me</div>
      <div>Time</div>
      <div>Icons</div>
    </TopBarContainer>
  );
};
