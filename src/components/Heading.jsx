import "../style/heading.scss"

function Heading() {

    return (
        <div className="heading">

            <div className="heading-left">
                <div className="txtLogo"><h2>Semiics</h2></div>
                <div className="pageTitle"><h2>Dashboard</h2></div>
            </div>
            
            <div className="heading-right">
                <div className="searchProfile">
                    <img className="serachLogo" src="" alt="" />
                    <input className="searchInput" type="text" placeholder="Search Profile" />
                </div>
                <div className="headingProfile">
                    <div className="headingProfile-left">
                        <h4 className="headingProfile-name">John Kuy</h4>
                        <h4 className="headingProfile-sem">4th sem</h4>
                    </div>
                    <div className="headingProfile-picture">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Heading