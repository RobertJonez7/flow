import "../App.css";
import React from "react";

const Button = ({ title, fn, className }) => {
  return (
    <div className={className}>
      <button className="button" onClick={fn}>
        {title}
      </button>
    </div>
  );
};

export default Button;
