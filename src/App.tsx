import "./App.css";
import response from "./test/test-data";
import Sidebar from "./components/Sidebars";
import Header from "./components/Header";
import Button from "./components/Button";
import Grid from "./components/Grids";
import { createColorPallete } from "./helpers/create-color-pallete";
import { useState } from "react";

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [theme, toggleTheme] = useState("light");
  const [descriptions, toggleDescriptions] = useState(false);

  const colorPallete = createColorPallete(response?.data);

  const sideBarProps = {
    toggleDescriptions,
    descriptions,
    colorPallete,
    toggleTheme,
    toggleOpen,
    isOpen,
    theme,
  };
  const headerProps = { isOpen, title: "ALL FLOWS" };
  const gridProps = {
    className: "grid-container",
    colorPallete,
    descriptions,
    key: theme,
    response,
    isOpen,
    theme,
  };
  const buttonProps = {
    className: "toggle-open-button",
    fn: () => toggleOpen(true),
    title: "<<",
  };

  return (
    <body data-theme={theme}>
      <div className="App">
        <Header {...headerProps} />
        <Sidebar {...sideBarProps} />
        <Button {...buttonProps} />
        <Grid {...gridProps} />
      </div>
    </body>
  );
};

export default App;
