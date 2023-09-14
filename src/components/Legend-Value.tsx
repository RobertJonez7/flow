import "../App.css";
import { LegendValueProps } from "../types";

const LegendValue = ({ title, color }: LegendValueProps): JSX.Element => {
  return (
    <div className="legend-value-container">
      <div className="box" style={{ backgroundColor: color }} />
      <p style={{ textAlign: "left" }}>{title}</p>
    </div>
  );
};

export default LegendValue;
