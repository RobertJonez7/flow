import "../App.css";
import LegendValue from "./Legend-Value";
import Switch from "./Switch";
import Button from "./Button";
import { SidebarProps } from "../types";

const Sidebar = ({
  colorPallete,
  toggleOpen,
  isOpen,
  toggleTheme,
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
              />{" "}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </div>
          </div>
        </div>
        <div className="toggle-button">
          <Button title=">>" fn={() => toggleOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
