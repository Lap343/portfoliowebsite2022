// Npm imports
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// Component imports
import {
  About,
  Projects,
  Contact,
  Taskbar,
  AlienGame
} from 'components';
// Styles import
import GlobalStyles from 'styles/GlobalStyles';

export interface RootState {
  theme: {
    currentTheme: string,
  },
  fileOrder: number[]
}

function App() {

  const appRef = useRef(null);

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <>
      <GlobalStyles theme={theme} />
      <AppStyles ref={appRef}>
        <div className="content">
          <About appRef={appRef} />
          <Projects appRef={appRef} />
          <Contact appRef={appRef} />
          <AlienGame appRef={appRef} />
        </div>
        <Taskbar />
      </AppStyles>
    </>
  );
}

const AppStyles = styled.div`
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Roboto Condensed', sans-serif;
    margin-left: 2%;
    padding-top: 2em;
  }
`

export default App;

