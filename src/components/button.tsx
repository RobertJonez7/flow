import "../App.css";
import { ButtonProps } from "../types";

const Button = ({
  title,
  fn,
  className,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <div className={className}>
      <button className="button" onClick={fn} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default Button;
