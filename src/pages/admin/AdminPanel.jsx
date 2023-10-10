import "../../style/signup.scss";
import { Link } from "react-router-dom";
import "../../style/admin.scss";
import style from "../admin/adminpanel.module.scss";
import { Icon } from "@iconify/react";
import logo from "../../images/semiics-logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [assignments, setAssignments] = useState(null);

  async function getAllAssignments() {
    // start fetch data
    setIsLoading(true);

    const response = await axios.get("http://localhost/semiics/admin.php");
    console.log(response);

    if (response) {
      setIsLoading(false);
      setAssignments(response.data.result);
    }
  }

  useEffect(() => {
    getAllAssignments();
  }, []);

  const handleDelete = async (assignmentId) => {
    const formData = new FormData();
    formData.append("assignment_id", assignmentId);

    const res = await axios.post(
      "http://localhost/semiics/delete-assignment.php",
      formData
    );
    if (res) {
      alert("Assignment deleted successfully");
      // populate new data
      getAllAssignments();
    }
  };

  return (
    <div className={style["main-body"]}>
      <div className={style["sidebar"]}>
        <img src={logo} alt="Logo" />

        <ul className={style["sidebar-items"]}>
          <li>
            <Icon icon="material-symbols:assignment" />
            <Link to="/">Assignments</Link>
          </li>
          <li>
            <Icon icon="mdi:register" />
            <Link to="/admin/user-register"> Register Page</Link>
          </li>
        </ul>
      </div>

      <div className={style["contents"]}>
        <div className={style["header"]}>
          <h2>Assignment List</h2>
        </div>
        <p className="delete-msg">{message}</p>

        {/* table ;of lists of aassignmnts */}
        <div>
          <table className={style["assignment-list-table"]}>
            {/* table header */}
            <thead>
              <tr>
                <th>SN.</th>
                <th>Date</th>

                <th>Description</th>
                <th>Subject</th>
                <th>Semester</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* table data */}
            <tbody>
              {isLoading && (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}

              {assignments && assignments.length === 0 && (
                <tr>
                  <td>No assignments.</td>
                </tr>
              )}

              {assignments &&
                assignments.map((assignment, index) => {
                  return (
                    <tr key={assignment.id + assignment.index}>
                      <td>{index + 1}</td>

                      <td>{assignment.dead_date}</td>

                      <td>{assignment.description}</td>
                      <td>{assignment.subject}</td>
                      <td>{assignment.semester}</td>
                      <td className={style["action"]}>
                        <button
                          onClick={() => handleDelete(assignment.assign_id)}
                        >
                          <Icon
                            width={24}
                            height={24}
                            icon="material-symbols:delete"
                          />
                        </button>
                        <button>
                          <Icon width={24} height={24} icon="bx:edit" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
