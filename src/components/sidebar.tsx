import "../App.css";
import LegendValue from "./legend-value";
import Switch from "./switch";
import Button from "./button";
import { SidebarProps } from "../types";

const Sidebar = ({
  data,
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
          {Object.values(data?.legend).map((l: any) => {
            return <LegendValue title={l?.title} color={l?.color} />;
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
