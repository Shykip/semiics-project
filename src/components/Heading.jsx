import "../style/heading.scss"
import searchIcon from "../images/search-icon.png"
import borderLine from "../images/border-image.png"
import { useState, useEffect } from "react"

function Heading(props) {
    const [isLogoutMenu, setLogoutMenu] = useState(false)

    const handleLogout = (event) => {
        event.stopPropagation()
        sessionStorage.setItem('std_id', -1)
        setLogoutMenu(false)
        window.location.reload()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.name !== 'logoutBox'){
                setLogoutMenu(false)
            }
        }
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    return (
        <div className="heading">

            <div className="heading_left">
                <div className="txtLogo">Semiics</div>
                <img src={borderLine} alt="" className="borderLine" />
                <div className="pageTitle">Dashboard</div>
            </div>
            
            <div className="heading_right">
                <div className="searchProfile">
                    <div className="search_icon_box">
                        <img className="serachLogo" src={searchIcon} alt="" />
                    </div>
                    <input className="searchInput" type="text" placeholder="Search Profile" />
                </div>
                
                <div className="headingProfile" onClick={(event) => {event.stopPropagation(), setLogoutMenu(!isLogoutMenu)}}>
                    <div className="headingProfile_left">
                        <div className="headingProfile_name">{props.studentData.full_name}</div>
                        <div className="headingProfile_sem">{props.studentData.semester} sem</div>
                    </div>
                    <div className="headingProfile_picture_box">
                        <img src={`http://localhost/semiics/files/images/profiles/${props.studentData.profileImg}`} alt="Small_Profile" />
                    </div>
                </div>
            </div>

            {isLogoutMenu ? <div className="logoutbtn_box" name="logoutBox"><button onClick={handleLogout}>Sign out</button></div> : ''}
            
        </div>
    )
}

export default Heading