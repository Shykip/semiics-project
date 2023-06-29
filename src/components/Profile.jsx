import bigProfile from "../images/big-profile.png"
import '../style/profile.scss'
import borderLine from '../images/border-image.png'

function Profile(props) {
    
    // calculating level
    let completedNum = 0
    let totalAssign = 0
    props.assignData.map((item) => {
        totalAssign++
        if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){
            completedNum++
        }
    })
    let totalxp = completedNum*300
    let level = Math.floor(totalxp/1000)
    let currentxp = totalxp-(level*1000)
    let xpPercent = (currentxp/1000)*100

    if(props.studentData.full_name === "The Saviour"){
        level = 999
        xpPercent = 90
    }

    return (
        <div className="profile">

            <img src={borderLine} alt="" className="borderLine" />
            
            <div className="profile_picture">
                <img src={`http://localhost/semiics/files/images/profiles/${props.studentData.profileImg}`} alt="Big_Profile" />
            </div>
            <div className="profileRight">
                <p className="profile_name">{props.studentData.full_name}</p>
                <p className="sem">{props.studentData.semester} sem</p>
                <p className="level">Lvl {level}</p>
                <div className="expLineBox">
                    <div className="expLine" style={{ width: `${xpPercent}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default Profile