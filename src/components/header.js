import "../App.css";
import React from "react";

const Header = ({ isOpen, title }) => {
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
