import "../App.css";
import React from "react";
import LegendValue from "./legend-value";
import Switch from "./switch";
import Button from "./button";

const Sidebar = ({ data, toggleOpen, isOpen, toggleTheme, theme }) => {
  return (
    <div
      className="sidebar"
      style={{
        width: isOpen ? "25em" : 0,
      }}
    >
      <div className="section">
        <h3>Legend</h3>
        {Object.values(data?.legend).map((l) => {
          return <LegendValue title={l?.title} color={l?.color} />;
        })}
      </div>

      <div className="section">
        <h3>Settings</h3>
        <div className="settings-content">
          <Switch
            fn={() =>
              toggleTheme((theme) => (theme === "light" ? "dark" : "light"))
            }
            checked={theme === "dark"}
          />{" "}
          Dark Mode
        </div>
      </div>
      <div className="toggle-button">
        <Button title=">>" fn={() => toggleOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
