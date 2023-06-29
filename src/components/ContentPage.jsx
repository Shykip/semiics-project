import "../style/content.scss"
import NavBar from "./NavBar"
import Markings from "./Markings"
import Profile from "./Profile"
import Performance from "./Performance"
import Assignments from "./Assignments"

function ContentPage(props) {
    
    return (
        <div className="contentPage">
            <NavBar />
            <div className="dashboardPage">
                <div className="dashboardTopContents">
                    <Markings assignData={props.assignData} std_id={props.std_id} studentData={props.studentData} /><Profile std_id={props.std_id} studentData={props.studentData} assignData={props.assignData} />
                </div>
                <div className="dashboardBotContents">
                    <Performance assignData={props.assignData} std_id={props.std_id} studentData={props.studentData} /><Assignments assignData={props.assignData} std_id={props.std_id} />
                </div>
            </div>
        </div>
    )
}

export default ContentPage