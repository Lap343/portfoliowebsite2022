// Npm imports
import React from "react";
import styled from "styled-components";
// Component imports
import {
  About,
  Projects,
  Contact,
  Taskbar
} from "components";

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

function App() {
  return (
    <AppStyles>
      <div className="content">
        <About />
        <Projects />
        <Contact />
      </div>
      <Taskbar />
    </AppStyles>
  );
}

export default App;

