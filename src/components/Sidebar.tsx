import "../App.css";
import LegendValue from "./Legend-Value";
import Accordian from "./Accordian";
import Switch from "./Switch";
import Button from "./Button";
import { SidebarProps } from "../types";

const Sidebar = ({
  shouldLegendRender,
  toggleDescriptions,
  connectionStatus,
  descriptions,
  colorPallete,
  toggleTheme,
  toggleOpen,
  pictureFn,
  response,
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
    Connected: "#3c903e",
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
          {shouldLegendRender && (
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
              <Switch fn={setTheme} checked={theme === "dark"} />{" "}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </div>
            <div>
              <Switch fn={setDescriptions} checked={descriptions} />{" "}
              <span>
                {descriptions ? "Hide Descriptions" : "Show Descriptions"}
              </span>
            </div>
          </div>
        </Accordian>
        <div className="sidebar-utility">
          <div className="sidebar-utility-buttons">
            <Button title=">>" fn={() => toggleOpen(false)} />
            <Button
              title="&dArr;"
              fn={pictureFn}
              styles={{
                fontSize: "1.25em",
                height: "1.6em",
                minWidth: "2.1em",
                borderRadius: ".3em",
              }}
            />
          </div>
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
