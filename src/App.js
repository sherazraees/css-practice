import "./App.css";
import style, { css } from "styled-components";
import Day1 from "./Components/Day1";

function App() {
  return (
    <Container>
      <Day1></Day1>
    </Container>
  );
}

export default App;

const Container = style.div`
  width: 100%;
  height: 100%;
`;
