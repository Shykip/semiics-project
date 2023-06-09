import "../style/navBar.scss"
import dashboardIcon from "../images/dashboard-icon.png"
import listIcon from "../images/list-icon.png"
import settingsIcon from "../images/settings-icon.png"

function NavBar() {
    
    return (
        <div className="navBar">
            <div className="topBar">
                <img src={dashboardIcon} alt="" className="dashboard-icon" />
                <img src={listIcon} alt="" className="list-icon" />
            </div>
            <div className="botBar">
                <img src={settingsIcon} alt="" className="settings-icon" />
            </div>
        </div>
    )
}

export default NavBar