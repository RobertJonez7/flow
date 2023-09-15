import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Button from "./components/Button";
import Grid from "./components/Grid";
import { exportComponentAsPNG } from "react-component-export-image";
import { createColorPallete } from "./helpers/create-color-pallete";
import { useState, useRef } from "react";

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
      setLoading(true);
      setError("");
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

  const gridRef = useRef(null);

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
  const colorPallete = createColorPallete(response?.data);

  const sideBarProps = {
    shouldLegendRender: response && !loading && !error,
    pictureFn: () => exportComponentAsPNG(gridRef),
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
            <div ref={gridRef}>
              <Grid {...gridProps} />
            </div>
          </div>
        )}

        <Sidebar {...sideBarProps} />
        <div className="utility-buttons">
          <Button {...buttonProps} />
          <Button
            title="&dArr;"
            fn={() => exportComponentAsPNG(gridRef)}
            styles={{
              fontSize: "1.25em",
              height: "1.6em",
              minWidth: "2.1em",
              borderRadius: ".3em",
            }}
          />
        </div>
      </div>
    </body>
  );
};

export default App;
