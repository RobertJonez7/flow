import "../App.css";
import { ButtonProps } from "../types";

const Button = ({
  title,
  fn,
  className,
  disabled,
  styles,
}: ButtonProps): JSX.Element => {
  return (
    <div className={className}>
      <button
        className="button"
        onClick={fn}
        disabled={disabled}
        style={styles}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
