import "./App.css";
import responses from "./test/test-data";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Button from "./components/Button";
import Grid from "./components/Grid";
import { createColorPallete } from "./helpers/create-color-pallete";
import { useState } from "react";

const App = () => {
  const [theme, toggleTheme] = useState(
    localStorage.getItem("theme") ?? "light"
  );
  const [isOpen, toggleOpen] = useState(
    localStorage.getItem("isSidebarOpen") != null
      ? localStorage.getItem("isSidebarOpen") === "true"
      : true
  );
  const [descriptions, toggleDescriptions] = useState(
    localStorage.getItem("descriptions") != null
      ? localStorage.getItem("descriptions") === "true"
      : false
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("filler");

  const colorPallete = createColorPallete(responses?.data);

  const setSidebarOpen = (open: boolean) => {
    const newSetting = open ? "true" : "false";
    localStorage.setItem("isSidebarOpen", newSetting);
    toggleOpen(open);
  };

  const generatePreContent = () => {
    if (error) {
      return (
        <p className="pre-content">
          <span style={{ color: "rgb(224, 12, 12)", fontWeight: "bold" }}>
            Error:
          </span>{" "}
          {error}
        </p>
      );
    }
    if (!response) {
      return <p className="pre-content">No Data Found</p>;
    }
    if (loading) {
      return (
        <div className="loading-container">
          <Loader /> Loading...
        </div>
      );
    }
  };

  const preContent = generatePreContent();

  const sideBarProps = {
    toggleOpen: setSidebarOpen,
    toggleDescriptions,
    descriptions,
    colorPallete,
    toggleTheme,
    response: responses,
    loading,
    isOpen,
    theme,
  };
  const headerProps = { isOpen, title: "ALL FLOWS" };
  const gridProps = {
    colorPallete,
    descriptions,
    key: theme,
    response: responses,
    isOpen,
    theme,
  };
  const buttonProps = {
    className: "toggle-open-button",
    fn: () => setSidebarOpen(true),
    disabled: loading,
    title: "<<",
  };

  return (
    <body data-theme={theme}>
      <div className="App">
        {preContent ? (
          <div
            className="pre-content-container"
            style={{
              marginRight: isOpen ? "25em" : 0,
            }}
          >
            {preContent}
          </div>
        ) : (
          <div className="content-container">
            <Header {...headerProps} />
            <Grid {...gridProps} />
          </div>
        )}

        <Sidebar {...sideBarProps} />
        <Button {...buttonProps} />
      </div>
    </body>
  );
};

export default App;
