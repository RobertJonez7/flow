import "../App.css";
import { LegendValueProps } from "../types";

const LegendValue = ({ title, color }: LegendValueProps): JSX.Element => {
  return (
    <div className="legend-value-container">
      <div className="box" style={{ backgroundColor: color }} />
      <p>{title}</p>
    </div>
  );
};

export default LegendValue;
