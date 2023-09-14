import "../App.css";
import LegendValue from "./Legend-Value";
import Switch from "./Switch";
import Button from "./Button";
import { SidebarProps } from "../types";
import Accordian from "./Accordian";

const Sidebar = ({
  toggleDescriptions,
  connectionStatus,
  descriptions,
  colorPallete,
  toggleTheme,
  toggleOpen,
  response,
  loading,
  isOpen,
  theme,
}: SidebarProps) => {
  const setTheme = () => {
    toggleTheme((theme: string) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const setDescriptions = () => {
    toggleDescriptions((description: boolean) => {
      const newDescriptionSetting = !description ? "true" : "false";
      localStorage.setItem("descriptions", newDescriptionSetting);
      return !description;
    });
  };

  const statusColors = {
    Connecting: "#2196f3",
    Open: "#46a949",
    Closing: "#eca313",
    Closed: "rgb(224, 12, 12)",
    Uninstantiated: "#2196f3",
  };

  return (
    <div
      className="sidebar-container"
      style={{
        width: isOpen ? "25em" : 0,
      }}
    >
      <div className="sidebar">
        <Accordian title="Legend">
          {!loading && (
            <div style={{ marginBottom: "1em" }}>
              {Object.entries(colorPallete).map(([key, val]: any) => {
                return (
                  <LegendValue
                    title={`${key}-${
                      Object.values(response?.data).find(
                        (r) => r.elder_id === key
                      )?.address
                    }`}
                    color={val}
                  />
                );
              })}
            </div>
          )}
        </Accordian>
        <Accordian title="Settings">
          <div className="settings-content">
            <div style={{ marginTop: "1em" }}>
              <Switch
                fn={setTheme}
                checked={theme === "dark"}
                disabled={loading}
              />{" "}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </div>
            <div>
              <Switch
                fn={setDescriptions}
                checked={descriptions}
                disabled={loading}
              />{" "}
              <span>
                {descriptions ? "Hide Descriptions" : "Show Descriptions"}
              </span>
            </div>
          </div>
        </Accordian>
        <div className="toggle-button">
          <Button title=">>" fn={() => toggleOpen(false)} disabled={loading} />
          <p>
            Status:{" "}
            <span
              style={{
                // @ts-ignore
                color: statusColors[connectionStatus],
              }}
            >
              {connectionStatus}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
