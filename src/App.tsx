import styled from "styled-components";
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Taskbar from "./components/Taskbar";

const GlobalStyles = styled.div`
  font-family: sans-serif;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Roboto Condensed', sans-serif;
    margin-left: 2%;
  }
`

function App() {
  return (
    <GlobalStyles>
      <div className="content">
        <About />
        <Projects />
        <Contact />
      </div>
      <Taskbar />
    </GlobalStyles>
  );
}

export default App;

