import onHoldIcon from "../images/onhold-icon.png"
import completedIcon from "../images/completed-icon.png"
import missedIcon from "../images/missed-icon.png"
import borderLine from "../images/border-image.png"
import '../style/markings.scss'

function Markings() {
    return (
        <div className="markings">
            <div className="onHold-box">
                <div className="onHoldTop">
                    <img src={onHoldIcon} alt="" />
                    <p>On Hold</p>
                </div>
                <p className="onHold-number">4</p>
            </div>

            <img src={borderLine} alt="" className="borderLine" />

            <div className="completed-box">
                <div className="completedTop">
                    <img src={completedIcon} alt="" />
                    <p>Completed</p>
                </div>
                <p className="completed-number">25/32</p>
            </div>

            <img src={borderLine} alt="" className="borderLine" />

            <div className="missed-box">
                <div className="missedTop">
                    <img src={missedIcon} alt="" />
                    <p>On Hold</p>
                </div>
                <p className="missed-number">3</p>
            </div>

            <img src={borderLine} alt="" className="borderLine" />
        </div>
    )
}

export default Markings