import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../../components/common/InputField";
import TeacherSvg from "../../svgs/teacher";
import { Link } from "react-router-dom";

const TeachersSignUp = () => {
  function signup(e) {
    e.preventDefault();

    console.log("hi");
  }

  return (
    <div className="main-body">
      <div className="wrapper">
        {/* form block */}
        <div className="form-container">
          <h3>Teachers Sign Up</h3>
          <form onSubmit={signup} className="signup-form">
              <InputField icon={"mdi:user"} label={"Username"} />
          
              <InputField icon={"ic:baseline-email"} label={"Email"} />

              <InputField type="password" icon={"uis:padlock"} label={"Password"} />
              
            <div className="btn">
              <button type="submit">Sign Up</button>
            </div>

          </form>
          <p>
            Already have an account? <Link to="/teachers/login">Login here.</Link>
          </p>
        </div>

        {/* typography block */}
        <div className="textblock">
          <h3>Teacher Sign Up</h3>
          <TeacherSvg/>
        </div>
      </div>
    </div>
  );
};

export default TeachersSignUp;
