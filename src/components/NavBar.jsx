// import "../style/navBar.scss"
import dashboardIcon from "../images/dashboard-icon.png"
import listIcon from "../images/list-icon.png"
import settingsIcon from "../images/settings-icon.png"
import "../style/nav.scss"

function NavBar() {
    
    return (
        <div className="navBar">
            <div className="topBar">
                <img src={dashboardIcon} alt="" className="dashboard_icon" />
                <img src={listIcon} alt="" className="list_icon" />
            </div>

            <img src={settingsIcon} alt="" className="settings_icon" />
        </div>
    )
}

export default NavBar