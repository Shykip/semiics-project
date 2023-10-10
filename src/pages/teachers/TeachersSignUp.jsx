import { Icon } from "@iconify/react";

import "../../style/signup.scss";
import InputField from "../../components/common/InputField";
import TeacherSvg from "../../svgs/teacher";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

    if (!teacherFormData.username) {
      errors.username = "Username is required";
      isFormValidated = false;
    }

    if (!teacherFormData.password) {
      errors.password = "Password is required";
      isFormValidated = false;
    }

    if (!teacherFormData.subject) {
      errors.subject = "Subject is required";
      isFormValidated = false;
    }

    if (!teacherFormData.fullname) {
      errors.fullname = "Fullname is required";
      isFormValidated = false;
    }

    // if (!teacherSelectedPhoto) {
    //   errors.teacherSelectedPhoto = "Photo is required";
    //   isFormValidated = false;
    // }

    setteacherFormErrors(errors);

    return isFormValidated;
  };

  const handleSubmit = () => {
    const url = "http://localhost/semiics/teacher-signup.php";
    let fData = new FormData();
    fData.append("username", teacherFormData.username);
    fData.append("password", teacherFormData.password);
    fData.append("subject", teacherFormData.subject);
    fData.append("fullname", teacherFormData.fullname);
    // fData.append("photo", teacherSelectedPhoto);

    // const multer = require("multer");
    // const upload = multer({
    //   dest: "http://localhost/semiics/teacher-signup.php",
    // }); // Set the destination for the uploaded files

    // app.post("/api/save-data", upload.single("photo"), (req, res) => {
    //   // req.file contains information about the uploaded file
    //   // req.body contains the other form data
    // });

    axios
      .post(url, fData)
      .then((response) => alert("success signup"))
      .catch((error) => alert(error));
  };

  // this function will be called if form is submitted
  function signup(e) {
    e.preventDefault();

    if (validateForm()) {
      console.log("teacherFormData", teacherFormData);
      console.log("file", teacherSelectedPhoto);
      // call api here
      handleSubmit();
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
              name="username"
              onChange={inputHandler}
              value={teacherFormData.username}
              errorText={teacherFormErrors.username}
            />

            <InputField
              type="password"
              icon={"uis:padlock"}
              name="password"
              onChange={inputHandler}
              label={"Password"}
              value={teacherFormData.password}
              errorText={teacherFormErrors.password}
            />

            <InputField
              type="long"
              icon={"ion:book-sharp"}
              label={"Subject"}
              name="subject"
              value={teacherFormData.subject}
              onChange={inputHandler}
              errorText={teacherFormErrors.subject}
            />

            <InputField
              type="text"
              icon={"icon-park-solid:edit-name"}
              label={"Fullname"}
              name="fullname"
              value={teacherFormData.fullname}
              onChange={inputHandler}
              errorText={teacherFormErrors.fullname}
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
