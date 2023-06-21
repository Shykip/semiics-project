import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../common/InputField";
const SignUp = () => {
  function signup(e) {
    e.preventDefault();

    console.log("hi");
    alert("Registered");
  }

  return (
    <div className="main-body">
      <div className="wrapper">
        {/* form block */}
        <div className="form-container">
          <h3>Sign Up</h3>
          <form onSubmit={signup} className="signup-form">
            <div>
              <InputField icon={"mdi:user"} label={"Username"} />
            </div>

            <div>
              <InputField icon={"ic:baseline-email"} label={"Email"} />
            </div>

            <div>
              <InputField icon={"uis:padlock"} label={"Password"} />
              <br />
            </div>

            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p>
            Already have an account?<a href="/login">Login</a>
          </p>
        </div>

        {/* typography block */}
        <div className="textblock">
          <h3>lorem ipsum</h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
