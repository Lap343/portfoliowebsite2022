import React from "react";
import styled from "styled-components";
import backgroundImage from "assets/phone_wallpaper.jpeg";
import { TopBar } from "./TopBar";

const MobileContainer = styled.div`
  font-family: "Helvetica--Neue", sans-serif;
  background-image: url(${backgroundImage});
  background-size: stretch;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CenterApps = styled.div``;

const LowerApps = styled.div``;

export const Mobile = () => {
  return (
    <MobileContainer>
      <TopBar />
      <CenterApps>Center Apps</CenterApps>
      <LowerApps>Bottom Apps</LowerApps>
    </MobileContainer>
  );
};