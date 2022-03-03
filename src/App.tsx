// Npm imports
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// Component imports
import {
  About,
  Projects,
  Contact,
  Taskbar
} from 'components';
// Styles import
import GlobalStyles from 'styles/GlobalStyles';

export interface RootState {
  theme: {
    currentTheme: string
  }
}

function App() {

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <>
      <GlobalStyles theme={theme} />
      <AppStyles>
        <div className="content">
          <About />
          <Projects />
          <Contact />
        </div>
        <Taskbar />
      </AppStyles>
    </>
  );
}

const AppStyles = styled.div`
  font-family: sans-serif;

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

