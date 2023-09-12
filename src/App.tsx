import "./App.css";
import response from "./test/test-data";
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
    (localStorage.getItem("isSidebarOpen") === "true" &&
      localStorage.getItem("isSidebarOpen") != null) ??
      true
  );
  const [descriptions, toggleDescriptions] = useState(
    (localStorage.getItem("descriptions") === "true" &&
      localStorage.getItem("descriptions") != null) ??
      false
  );
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const colorPallete = createColorPallete(response?.data);

  const setSidebarOpen = (open: boolean) => {
    const newSetting = open ? "true" : "false";
    localStorage.setItem("isSidebarOpen", newSetting);
    toggleOpen(open);
  };

  const sideBarProps = {
    toggleOpen: setSidebarOpen,
    toggleDescriptions,
    descriptions,
    colorPallete,
    toggleTheme,
    loading,
    isOpen,
    theme,
  };
  const headerProps = { isOpen, title: "ALL FLOWS" };
  const gridProps = {
    colorPallete,
    descriptions,
    key: theme,
    response,
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
        {fetched || error || loading ? (
          <p
            className="data-found"
            style={{
              marginRight: isOpen ? "25em" : 0,
            }}
          >
            <div>
              {error ? (
                <>
                  <p className="error">
                    <span style={{ color: "rgb(224, 12, 12)" }}>Error:</span>{" "}
                    {error}
                  </p>
                </>
              ) : (
                <div className="loading-container">
                  <Loader /> Loading...
                </div>
              )}
            </div>
          </p>
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
