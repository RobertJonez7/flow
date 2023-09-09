import "../App.css";
import { SwitchProps } from "../types";

const Switch = ({ checked, fn, disabled }: SwitchProps): JSX.Element => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={fn}
        disabled={disabled}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
