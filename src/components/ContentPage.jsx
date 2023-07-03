import "../style/content.scss"
import NavBar from "./NavBar"
import Markings from "./Markings"
import Profile from "./Profile"
import Performance from "./Performance"
import Assignments from "./Assignments"
import { useState } from "react"

function ContentPage(props) {

    const [isAssignTab, setAssignTab] = useState(false)
    const [isDashTab, setDashTab] = useState(true)

    const handleListBtnClick = () => {
        setAssignTab(true)
        setDashTab(false)
    }
    const handleDashBtnClick = () => {
        setDashTab(true)
        setAssignTab(false)
    }
    
    return (
        <div className="contentPage">
            <NavBar handleListBtnClick={handleListBtnClick} handleDashBtnClick={handleDashBtnClick} isDashTab={isDashTab} isAssignTab={isAssignTab} />
            {
                isAssignTab ? 
                <Assignments assignData={props.assignData} std_id={props.std_id} isAssignTab={true} studentData={props.studentData} FetchAssignData={props.FetchAssignData} key={props.assignReloadKey} />
                :
                <div className="dashboardPage">
                    <div className="dashboardTopContents">
                        <Markings assignData={props.assignData} std_id={props.std_id} /><Profile std_id={props.std_id} studentData={props.studentData} assignData={props.assignData} />
                    </div>
                    <div className="dashboardBotContents">
                        <Performance assignData={props.assignData} std_id={props.std_id} /><Assignments assignData={props.assignData} std_id={props.std_id} isAssignTab={false} handleListBtnClick={handleListBtnClick} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ContentPage