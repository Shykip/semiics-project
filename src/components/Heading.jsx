import "../style/heading.scss"
import searchIcon from "../images/search-icon.png"
import smallProfile from "../images/small-profile.png"
import borderLine from "../images/border-image.png"

function Heading(props) {

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
                
                <div className="headingProfile">
                    <div className="headingProfile_left">
                        <div className="headingProfile_name">{props.studentData.full_name}</div>
                        <div className="headingProfile_sem">{props.studentData.semester} sem</div>
                    </div>
                    <div className="headingProfile_picture_box">
                        <img src={`http://localhost/semiics/files/images/profiles/${props.studentData.profileImg}`} alt="Small_Profile" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Heading