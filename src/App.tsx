import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Button from "./components/button";
import Grid from "./components/grid";
import data from "./test/test-data";
import { createColorPallete } from "./helpers/create-color-pallete";
import { useState } from "react";

const App = () => {
  const [isOpen, toggleOpen] = useState(true);
  const [theme, toggleTheme] = useState("light");

  const colorPallete = createColorPallete(data);

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
    isOpen,
    theme,
    data,
  };
  const buttonProps = {
    className: "toggle-open-button",
    fn: () => toggleOpen(true),
    title: "<<",
  };

  return (
    <body className="App" data-theme={theme}>
      <Header {...headerProps} />
      <Sidebar {...sideBarProps} />
      <Button {...buttonProps} />
      <Grid {...gridProps} />
    </body>
  );
};

export default App;
