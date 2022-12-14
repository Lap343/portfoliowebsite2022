// Npm imports
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Component imports
import { About, Projects, Contact, Taskbar, AlienGame } from "components";
// Styles import
import GlobalStyles from "styles/GlobalStyles";
import { Mobile } from "components/Mobile";

export interface RootState {
  theme: {
    currentTheme: string;
  };
  fileOrder: number[];
  mute: {
    isMuted: boolean;
  };
}

const App = () => {
  const appRef = useRef(null);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize.innerWidth < 800 ? (
        <>
          <GlobalStyles theme={theme} />
          <Mobile />
        </>
      ) : (
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
      )}
    </>
  );
};

const AppStyles = styled.div`
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: "Roboto Condensed", sans-serif;
    margin-left: 2%;
    padding-top: 2em;
  }
`;

export default App;
