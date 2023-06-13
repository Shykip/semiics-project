import "../style/heading.scss"
import searchIcon from "../images/search-icon.png"
import smallProfile from "../images/small-profile.png"
import borderLine from "../images/border-image.png"

function Heading() {

    return (
        <div className="heading">

            <div className="heading-left">
                <div className="txtLogo">Semiics</div>
                <img src={borderLine} alt="" className="borderLine" />
                <div className="pageTitle">Dashboard</div>
            </div>
            
            <div className="heading-right">
                <div className="searchProfile">
                    <div className="search-icon-box">
                        <img className="serachLogo" src={searchIcon} alt="" />
                    </div>
                    <input className="searchInput" type="text" placeholder="Search Profile" />
                </div>
                <div className="headingProfile">
                    <div className="headingProfile-left">
                        <div className="headingProfile-name">John Kuy</div>
                        <div className="headingProfile-sem">4th sem</div>
                    </div>
                    <div className="headingProfile-picture-box">
                        <img src={smallProfile} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Heading