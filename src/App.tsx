import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import responses from "./test/test-data";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Button from "./components/Button";
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import { createColorPallete } from "./helpers/create-color-pallete";

const App = () => {
  const { readyState } = useWebSocket("ws://localhost:7070", {
    onMessage: (e) => handleMessage(e?.data),
    shouldReconnect: () => true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
    share: true,
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Connected",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const handleMessage = async (data: string) => {
    try {
      setResponse(JSON.parse(data));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err?.message ?? "Unable to fetch or display data.");
    }
  };

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<any>("");

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
  const colorPallete = createColorPallete(responses?.data);

  const sideBarProps = {
    shouldLegendRender: response && !loading && !error,
    toggleOpen: setSidebarOpen,
    toggleDescriptions,
    connectionStatus,
    descriptions,
    colorPallete,
    toggleTheme,
    response,
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
        <Button {...buttonProps} className="toggle-open-button" />
      </div>
    </body>
  );
};

export default App;
