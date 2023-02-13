import style, { css } from "styled-components";

function App() {
  return <Container></Container>;
}

export default App;

const Container = style.div`
color:red;
`;

const NavBar = style.div`
background-color:black;
color:white;
height:70px;
width:100%;
display:flex;
align-items:center;
padding:0 10px;
list-style-type: none;
`;

const ImageContainer = style.div`
width:100px;
height:100px;
background: url('https://devmolt.com/wp-content/uploads/2021/07/devmolt-WHITE.svg') no-repeat;
`;
