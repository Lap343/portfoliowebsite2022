import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";

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

