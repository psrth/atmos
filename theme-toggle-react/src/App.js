import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Toggle = styled.div `
display: flex;
justify-content: center;
`

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
        <Toggle><button onClick={() => themeToggler()}>Change Theme</button></Toggle>
        <Card />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;