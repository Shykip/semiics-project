import bigProfile from "../images/big-profile.png"
import '../style/profile.scss'
import borderLine from '../images/border-image.png'

function Profile(props) {

    console.log(props.studentData)

    return (
        <div className="profile">

            <img src={borderLine} alt="" className="borderLine" />
            
            <div className="profile_picture">
                <img src={bigProfile} alt="" />
            </div>
            <div className="profileRight">
                <p className="profile_name">{props.studentData.full_name}</p>
                <p className="sem">{props.studentData.semester} sem</p>
                <p className="level">Lvl 246</p>
                <div className="expLineBox">
                    <div className="expLine"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile