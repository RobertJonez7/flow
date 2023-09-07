import "../App.css";
import React from "react";
import { SwitchProps } from "../types";

const Switch = ({ checked, fn }: SwitchProps): JSX.Element => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={fn} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
