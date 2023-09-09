import "../App.css";
import LegendValue from "./Legend-Value";
import Switch from "./Switch";
import Button from "./Button";
import { SidebarProps } from "../types";

const Sidebar = ({
  toggleDescriptions,
  descriptions,
  colorPallete,
  toggleTheme,
  toggleOpen,
  loading,
  isOpen,
  theme,
}: SidebarProps) => {
  return (
    <div
      className="sidebar-container"
      style={{
        width: isOpen ? "25em" : 0,
      }}
    >
      <div className="sidebar">
        <div className="section">
          <h3>Legend</h3>
          {Object.entries(colorPallete).map(([key, val]: any) => {
            return <LegendValue title={key} color={val} />;
          })}
        </div>

        <div className="section">
          <h3>Settings</h3>
          <div className="settings-content">
            <div>
              <Switch
                fn={() =>
                  toggleTheme((theme: string) =>
                    theme === "light" ? "dark" : "light"
                  )
                }
                checked={theme === "dark"}
                disabled={loading}
              />{" "}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </div>
            <div>
              <Switch
                fn={() =>
                  toggleDescriptions((description: boolean) => !description)
                }
                checked={descriptions}
                disabled={loading}
              />{" "}
              <span>
                {descriptions ? "Hide Descriptions" : "Show Descriptions"}
              </span>
            </div>
          </div>
        </div>
        <div className="toggle-button">
          <Button title=">>" fn={() => toggleOpen(false)} disabled={loading} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
