import "../style/content.scss"
import NavBar from "./NavBar"
import Markings from "./Markings"
import Profile from "./Profile"
import Performance from "./Performance"
import Assignments from "./Assignments"
 
function ContentPage() {
    
    return (
        <div className="contentPage">
            <NavBar />
            <div className="dashboardPage">
                <div className="dashboardTopContents">
                    <Markings /><Profile />
                </div>
                <div className="dashboardBotContents">
                    <Performance /><Assignments />
                </div>
            </div>
        </div>
    )
}

export default ContentPage