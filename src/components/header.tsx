import "../App.css";
import React from "react";
import { HeaderProps } from "../types";

const Header = ({ isOpen, title }: HeaderProps): JSX.Element => {
  return (
    <div className="header">
      <p
        className="header-text"
        style={{
          marginRight: isOpen ? "14em" : 0,
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
