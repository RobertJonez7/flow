import "../App.css";
import React from "react";

const Header = ({ isOpen }) => {
  return (
    <div className="header">
      <p
        className="header-text"
        style={{
          marginRight: isOpen ? "14em" : 0,
        }}
      >
        FLOW
      </p>
    </div>
  );
};

export default Header;
