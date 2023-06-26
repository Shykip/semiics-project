import "../style/contentPage.scss"
import NavBar from "../components/NavBar"
import Markings from "../components/Markings"
import Profile from "../components/Profile"
import Performance from "../components/Performance"
import Assignments from "../components/Assignments"

function Dashboard() {
    
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

export default Dashboard