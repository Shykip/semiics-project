import { Icon } from "@iconify/react";
import "./inputfield.scss";

const InputField = ({ icon, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <br />
      <div className="inputwrapper">
        <Icon icon={icon} className="icon" width={20} height={20} />
        <input type="text" className="custominput" />
      </div>
    </div>
  );
};

export default InputField;
