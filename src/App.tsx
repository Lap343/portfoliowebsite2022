import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";

const GlobalStyles = styled.div`
  font-family: sans-serif;

  & .content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

function App() {
  return (
    <GlobalStyles>
      <Title />
      <div className="content">
        <About />
        <Projects />
        <Contact />
      </div>
    </GlobalStyles>
  );
}

export default App;