import { Icon } from "@iconify/react";
import "../../style/signup.scss";
import { Link } from "react-router-dom";
import "../admin/admin.scss";
import AdminSvg from "../../svgs/admin";

const AdminPanel = () => {
  return (
    <div className="main-body">
      <div className="wrapper">
        {/* Registration*/}
        <div className="form-container">
          <h4>ADMIN PANEL</h4>

          <div>
            <AdminSvg />
          </div>

          <div className="Std">
            Go to Students Signup <Link to="/students/signup">here.</Link>
          </div>

          <div className="Teacher">
            Go to Teachers Signup <Link to="/teachers/signup">here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
