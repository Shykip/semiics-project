import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../../components/common/InputField";
import TeacherSvg from "../../svgs/teacher";
import { Link } from "react-router-dom";
import { useState } from "react";

const TeachersSignUp = () => {
  const [teacherFormData, setteacherFormData] = useState({});
  const [teacherSelectedPhoto, setteacherSelectedPhoto] = useState(null);
  const [teacherFormErrors, setteacherFormErrors] = useState({});

  function inputHandler(e) {
    setteacherFormData((previousValue) => {
      return { ...previousValue, [e.target.name]: e.target.value };
    });
  }

  // this function is used to validate form data
  const validateForm = () => {
    let isFormValidated = true;
    let errors = {};

    setteacherFormErrors({});

    if (!teacherFormData.userName) {
      errors.userName = "Username is required";
      isFormValidated = false;
    }

    if (!teacherFormData.password) {
      errors.password = "Password is required";
      isFormValidated = false;
    }

    if (!teacherFormData.email) {
      errors.email = "Email is required";
      isFormValidated = false;
    }

    if (!teacherSelectedPhoto) {
      errors.teacherSelectedPhoto = "Photo is required";
      isFormValidated = false;
    }

    setteacherFormErrors(errors);

    return isFormValidated;
  };

  // this function will be called if form is submitted
  function signup(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("teacherFormData", teacherFormData);
      console.log("file", teacherSelectedPhoto);
      // call api here
    }
  }

  return (
    <div className="main-body">
      <div className="wrapper">
        {/* form block */}
        <div className="form-container">
          <h3>Register Teachers</h3>
          <form onSubmit={signup} className="signup-form">
            <InputField
              icon={"mdi:user"}
              label={"Username"}
              name="userName"
              onChange={inputHandler}
              value={teacherFormData.userName}
              errorText={teacherFormErrors.userName}
            />

            <InputField
              type="password"
              icon={"uis:padlock"}
              name="password"
              onChange={inputHandler}
              label={"Password"}
              errorText={teacherFormErrors.password}
            />

            <InputField
              icon={"ic:baseline-email"}
              label={"Email"}
              name="email"
              onChange={inputHandler}
              errorText={teacherFormErrors.email}
            />

            <InputField
              icon={"foundation:photo"}
              label={"Photo"}
              type="file"
              onChange={(e) => {
                setteacherSelectedPhoto(e.target.files[0]);
              }}
              errorText={teacherFormErrors.teacherSelectedPhoto}
            />

            <div className="btn">
              <button type="submit">Register</button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/teachers/login">Login here.</Link>
          </p>
        </div>

        {/* typography block */}
        <div className="textblock">
          <h3>Teacher Registration</h3>
          <TeacherSvg />
        </div>
      </div>
    </div>
  );
};

export default TeachersSignUp;
