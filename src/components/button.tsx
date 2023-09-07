import "../App.css";
import React from "react";
import { ButtonProps } from "../types";

const Button = ({ title, fn, className }: ButtonProps): JSX.Element => {
  return (
    <div className={className}>
      <button className="button" onClick={fn}>
        {title}
      </button>
    </div>
  );
};

export default Button;
