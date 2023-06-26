import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../../components/common/InputField";
import { Link } from "react-router-dom";
import StudentsSvg from "../../svgs/students";

const StudentsSignUp = () => {
  function signup(e) {
    e.preventDefault();

    console.log("hi");
  }

  return (
    <div className="main-body">
      <div className="wrapper">
        {/* form block */}
        <div className="form-container">
          <h3>Students Sign Up</h3>
          <form onSubmit={signup} className="signup-form">
              <InputField icon={"mdi:user"} label={"Username"} />
          
              <InputField icon={"ic:baseline-email"} label={"Email"} />

              <InputField type="password" icon={"uis:padlock"} label={"Password"} />

              <InputField icon={"healthicons:i-training-class-negative"} label={"Course"} />
              
            <div className="btn">
              <button type="submit">Sign Up</button>
            </div>

          </form>
          <p>
            Already have an account? <Link to="/students/login">Login.</Link>
          </p>
        </div>

        {/* typography block */}
        <div className="textblock">
          <h3>Student Sign Up</h3>
          <StudentsSvg/>
        </div>
      </div>
    </div>
  );
};

export default StudentsSignUp;
