import "../App.css";
import React from "react";

const Switch = ({ checked, fn }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={fn} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
