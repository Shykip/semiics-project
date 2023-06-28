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
                    <Markings assignData={props.assignData} std_id={props.std_id} /><Profile studentData={props.studentData} />
                </div>
                <div className="dashboardBotContents">
                    <Performance /><Assignments assignData={props.assignData} std_id={props.std_id} />
                </div>
            </div>
        </div>
    )
}

export default ContentPage