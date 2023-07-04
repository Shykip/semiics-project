import "../../style/signup.scss";
import { Link } from "react-router-dom";
import "../../style/admin.scss";
import style from "../admin/adminpanel.module.scss";
import { Icon } from "@iconify/react";
import logo from "../../images/semiics-logo.png";

const ASSIGNMENTS_DATA = [
  {
    title: "Math Homework",
    date: "2023-07-01",
    subject: "Mathematics",
    description: "Complete exercises 1-10 on page 50",
    semester: "Fall 2023",
    id: 1,
  },
  {
    title: "English Essay",
    date: "2023-07-03",
    subject: "English",
    description: "Write a 500-word essay on your favorite book",
    semester: "Fall 2023",
    id: 2,
  },
  {
    title: "Science Project",
    date: "2023-07-05",
    subject: "Science",
    description: "Prepare a presentation on the solar system",
    semester: "Fall 2023",
    id: 3,
  },
  // Additional assignment data
  {
    title: "History Quiz",
    date: "2023-07-07",
    subject: "History",
    description: "Take a quiz on World War II",
    semester: "Fall 2023",
    id: 4,
  },
  {
    title: "Programming Assignment",
    date: "2023-07-10",
    subject: "Computer Science",
    description: "Implement a sorting algorithm",
    semester: "Fall 2023",
    id: 5,
  },
  {
    title: "Art Project",
    date: "2023-07-15",
    subject: "Art",
    description: "Create a still life painting",
    semester: "Fall 2023",
    id: 6,
  },
  {
    title: "Literature Analysis",
    date: "2023-07-18",
    subject: "Literature",
    description: "Write a critical analysis of a poem",
    semester: "Fall 2023",
    id: 7,
  },
  {
    title: "Chemistry Experiment",
    date: "2023-07-20",
    subject: "Chemistry",
    description: "Conduct a titration experiment",
    semester: "Fall 2023",
    id: 8,
  },
  {
    title: "Physical Education Fitness Test",
    date: "2023-07-23",
    subject: "Physical Education",
    description: "Complete a fitness test",
    semester: "Fall 2023",
    id: 9,
  },
  {
    title: "Geography Presentation",
    date: "2023-07-27",
    subject: "Geography",
    description: "Present on the continents and their features",
    semester: "Fall 2023",
    id: 10,
  },
  {
    title: "Music Composition",
    date: "2023-07-30",
    subject: "Music",
    description: "Compose a short musical piece",
    semester: "Fall 2023",
    id: 11,
  },
];

const AdminPanel = () => {
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

        {/* table ;of lists of aassignmnts */}
        <div>
          <table className={style["assignment-list-table"]}>
            {/* table header */}
            <thead>
              <tr>
                <th>SN.</th>
                <th>Title</th>
                <th>Date</th>

                <th>Description</th>
                <th>Subject</th>
                <th>Semester</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* table data */}
            <tbody>
              {ASSIGNMENTS_DATA.map((assignment, index) => {
                return (
                  <tr key={assignment.id}>
                    <td>{index + 1}</td>
                    <td>{assignment.title}</td>
                    <td>{assignment.date}</td>

                    <td>{assignment.description}</td>
                    <td>{assignment.subject}</td>
                    <td>{assignment.semester}</td>
                    <td className={style["action"]}>
                      <button>
                        <Icon
                          width={24}
                          height={24}
                          icon="material-symbols:delete"
                        />
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
