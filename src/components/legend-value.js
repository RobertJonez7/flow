import "../App.css";
import React from "react";

const LegendValue = ({ title, color }) => {
  return (
    <div className="legend-value-container">
      <div className="box" style={{ backgroundColor: color }} />
      <p>{title}</p>
    </div>
  );
};

export default LegendValue;
