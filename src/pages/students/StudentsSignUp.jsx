import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../../components/common/InputField";
import { Link } from "react-router-dom";
import StudentsSvg from "../../svgs/students";
import { useState } from "react";

const StudentsSignUp = () => {
  const [formData, setformData] = useState({});
  const [selectedPhoto, setselectedPhoto] = useState(null);
  const [formErrors, setformErrors] = useState({});

  function inputHandler(e) {
    setformData((previousValue) => {
      return { ...previousValue, [e.target.name]: e.target.value };
    });
  }

  const validateForm = () => {
    let isFormValidated = true;
    let errors = {};

    setformErrors({});

    if (!formData.fullName) {
      errors.fullName = "Full name is required";
      isFormValidated = false;
    }

    if (!formData.userName) {
      errors.userName = "Username is required";
      isFormValidated = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isFormValidated = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      isFormValidated = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Password didnt match";
      isFormValidated = false;
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      isFormValidated = false;
    }

    if (!formData.course) {
      errors.course = "Course is required";
      isFormValidated = false;
    }

    if (!formData.semester) {
      errors.semester = "Semester is required";
      isFormValidated = false;
    }

    if (!selectedPhoto) {
      errors.selectedPhoto = "Photo is required";
      isFormValidated = false;
    }
    setformErrors(errors);

    return isFormValidated;
  };

  function signup(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("formData", formData);
      console.log("file", selectedPhoto);
      // call api here
    }
  }

  return (
    <div className="main-body">
      <div className="wrapper">
        {/* form block */}
        <div className="form-container">
          <h3>Register Students</h3>
          <form onSubmit={signup} className="signup-form">
            <InputField
              icon={"icon-park-solid:edit-name"}
              label={"Full Name"}
              name="fullName"
              onChange={inputHandler}
              errorText={formErrors.fullName}
            />

            <InputField
              icon={"mdi:user"}
              label={"Username"}
              name="userName"
              onChange={inputHandler}
              value={formData.userName}
              errorText={formErrors.userName}
            />

            <InputField
              icon={"ic:baseline-email"}
              label={"Email"}
              name="email"
              onChange={inputHandler}
              errorText={formErrors.email}
            />

            <InputField
              type="password"
              icon={"uis:padlock"}
              name="password"
              onChange={inputHandler}
              label={"Password"}
              errorText={formErrors.password}
            />

            <InputField
              type="password"
              icon={"uis:padlock"}
              label={"Confirm Password"}
              name="confirmPassword"
              onChange={inputHandler}
              errorText={formErrors.confirmPassword}
            />
            <InputField
              icon={"healthicons:i-training-class-negative"}
              label={"Course"}
              name="course"
              onChange={inputHandler}
              errorText={formErrors.course}
            />
            <InputField
              icon={"bxs:book"}
              label={"Semester"}
              name="semester"
              onChange={inputHandler}
              errorText={formErrors.semester}
            />

            <InputField
              icon={"foundation:photo"}
              label={"Photo"}
              type="file"
              onChange={(e) => {
                setselectedPhoto(e.target.files[0]);
              }}
              errorText={formErrors.selectedPhoto}
            />
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
          <h3>Student Registration</h3>
          <StudentsSvg />
        </div>
      </div>
    </div>
  );
};

export default StudentsSignUp;
