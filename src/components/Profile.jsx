import bigProfile from "../images/big-profile.png"

function Profile() {
    return (
        <div className="profile">
            <div className="profile-picture">
                <img src={bigProfile} alt="" />
            </div>
            <div className="profileRight">
                <p className="profile-name">John Kuy</p>
                <p className="sem">4th sem</p>
                <p className="level">Lvl 246</p>
                <div className="expLineBox">
                    <div className="expLine"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile