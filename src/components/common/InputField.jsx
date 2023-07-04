import { Icon } from "@iconify/react";
import "./inputfield.scss";

const InputField = ({
  icon,
  label,
  type = "text",
  onChange,
  value,
  name,
  errorText,
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <br />
      <div className="inputwrapper">
        <Icon icon={icon} className="icon" width={20} height={20} />
        <input
          name={name}
          value={value}
          type={type}
          className={`custominput  ${errorText ? "error" : ""}`}
          onChange={onChange}
        />
      </div>
      {/* show error if errortext is provided */}
      {errorText && <p className="input-error">{errorText}</p>}
    </div>
  );
};

export default InputField;
