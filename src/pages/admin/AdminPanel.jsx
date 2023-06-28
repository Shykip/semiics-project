import { Icon } from "@iconify/react";
import "../../style/signup.scss";
import { Link } from "react-router-dom";
import "../../style/admin.scss";
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
            <Link to="/register/student">Register Student?</Link>
          </div>

          <div className="Teacher">
            <Link to="/register/teacher">Register Teacher?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
