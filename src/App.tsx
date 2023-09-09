import "./App.css";
import response from "./test/test-data";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Button from "./components/Button";
import Grid from "./components/Grid";
import { createColorPallete } from "./helpers/create-color-pallete";
import { useState } from "react";

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [theme, toggleTheme] = useState("light");

  const colorPallete = createColorPallete(response?.data);

  const sideBarProps = {
    colorPallete,
    toggleOpen,
    isOpen,
    toggleTheme,
    theme,
  };
  const headerProps = { isOpen, title: "ALL FLOWS" };
  const gridProps = {
    className: "grid-container",
    colorPallete,
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
