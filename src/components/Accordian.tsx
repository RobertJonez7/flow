import { useState } from "react";

const Accordian = ({ children, title }: any): JSX.Element => {
  const [isOpen, toggleOpen] = useState(
    (localStorage.getItem(title) === "true" &&
      localStorage.getItem(title) != null) ??
      true
  );

  const setOpen = () => {
    toggleOpen((open) => {
      const newSetting = !isOpen ? "true" : "false";
      localStorage.setItem(title, newSetting);
      return !open;
    });
  };

  return (
    <div className="section">
      <h3 onClick={setOpen} style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            transform: `rotate(${isOpen ? "90deg" : "0"})`,
            transition: "250ms",
            fontSize: "1em",
            marginRight: ".5em",
            marginTop: ".1em",
          }}
        >
          &#x25B8;
        </span>
        {title}
      </h3>
      <div
        style={{
          maxHeight: isOpen ? "100vh" : 0,
          overflow: "hidden",
          transition: "250ms",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
