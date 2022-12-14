import React from "react";
import styled from "styled-components";
import backgroundImage from "assets/phone_wallpaper.jpeg";

const MobileContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: stretch;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopBar = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  color: white;
  padding: 0.5em 0;
`;

const CenterApps = styled.div``;

const LowerApps = styled.div``;

export const Mobile = () => {
  return (
    <MobileContainer>
      <TopBar>Top nav bbbbar</TopBar>
      <CenterApps>Center Apps</CenterApps>
      <LowerApps>Bottom Apps</LowerApps>
    </MobileContainer>
  );
};
