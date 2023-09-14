import { useState } from "react";

const Accordian = ({ children, title }: any): JSX.Element => {
  const [isOpen, toggleOpen] = useState(
    localStorage.getItem(title) != null
      ? localStorage.getItem(title) === "true"
      : true
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
          className="accordian-title"
          style={{
            transform: `rotate(${isOpen ? "90deg" : "0"})`,
          }}
        >
          &#x25B8;
        </span>
        {title}
      </h3>
      <div
        className="accordian-children"
        style={{
          maxHeight: isOpen ? "55vh" : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
