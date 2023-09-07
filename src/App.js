import "./App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Button from "./components/button";
import Grid from "./components/grid";
import data from "./test/data";
import { useState } from "react";

function App() {
  const [isOpen, toggleOpen] = useState(true);
  const [theme, toggleTheme] = useState("light");

  const sideBarProps = { toggleOpen, isOpen, toggleTheme, theme, data };
  const gridProps = {
    className: "grid-container",
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
    <div className="App" data-theme={theme}>
      <Header isOpen={isOpen} />
      <Sidebar {...sideBarProps} />
      <Button {...buttonProps} />
      <Grid {...gridProps} />
    </div>
  );
}

export default App;
