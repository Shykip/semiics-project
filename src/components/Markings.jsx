import onHoldIcon from "../images/onhold-icon.png"
import completedIcon from "../images/completed-icon.png"
import missedIcon from "../images/missed-icon.png"
import borderLine from "../images/border-image.png"
import '../style/markings.scss'

function Markings(props) {

    let markings = {
        holdNum : 0,
        completedNum : 0,
        totalNum : 0,
        missedNum : 0
    }

    props.assignData.map((item) => {

        const current_date = new Date()
        const deadline_date = new Date(item.dead_date)
    
        markings.totalNum++
            
        if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){
            markings.completedNum++
        }
        else if(deadline_date < current_date){
            markings.missedNum++
        }
        else {
            markings.holdNum++
        }
    })

    return (
        <div className="markings">
            <div className="onHold_box">
                <div className="onHoldTop">
                    <img src={onHoldIcon} alt="" />
                    <p>On Hold</p>
                </div>
                <p className="onHold_number">{markings.holdNum}</p>
            </div>

            <img src={borderLine} alt="" className="borderLine" />

            <div className="completed_box">
                <div className="completedTop">
                    <img src={completedIcon} alt="" />
                    <p>Completed</p>
                </div>
                <p className="completed_number">{markings.completedNum}/{markings.totalNum}</p>
            </div>

            <img src={borderLine} alt="" className="borderLine" />

            <div className="missed_box">
                <div className="missedTop">
                    <img src={missedIcon} alt="" />
                    <p>Missed</p>
                </div>
                <p className="missed_number">{markings.missedNum}</p>
            </div>

        </div>
    )
}

export default Markings