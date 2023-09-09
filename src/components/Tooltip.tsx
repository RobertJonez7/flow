import "../App.css";

const Tooltip = ({ text }: Record<string, string>) => {
  return (
    <div className="tooltip">
      <div className="tooltip-container">
        <div className="arrow-up" />
        <div className="tooltip-element">{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
