// import "../style/navBar.scss"
import dashboardIcon from "../images/dashboard-icon.png"
import listIcon from "../images/list-icon.png"
import settingsIcon from "../images/settings-icon.png"
import "../style/nav.scss"

function NavBar(props) {
    
    return (
        <div className="navBar">
            <div className="topBar">
                <img src={dashboardIcon} alt="" onClick={props.handleDashBtnClick} className={props.isDashTab ? "dashboard_icon" : "dashboard_icon_light"} />
                <img src={listIcon} alt="" onClick={props.handleListBtnClick} className={props.isAssignTab ? "list_icon" : "list_icon_light"} />
            </div>

            <img src={settingsIcon} alt="" className="settings_icon" />
        </div>
    )
}

export default NavBar