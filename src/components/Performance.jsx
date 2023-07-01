import calender from "../images/list-icon.png"
import downArrow from "../images/downarrow.png"
import batch from "../images/batch.png"
import exampleGraph from "../images/example-graph.png"
import '../style/performance.scss'


function Performance(props) {

    // calculating rank
    let completedNum = 0
    let totalAssign = 0

    props.assignData.map((item) => {
        totalAssign++
        if(item.std_comp !== null){
            if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){
                completedNum++
            }
        }
    })

    let rankValue = 0
    let rank = "none"

    if(completedNum != 0){ rankValue = (completedNum/totalAssign)*100 }
    
    if(rankValue == 100){ rank = "Grand Master" }
    else if (rankValue >= 90){ rank = "Master" }
    else if(rankValue >= 80){ rank = "Diamond" }
    else if (rankValue >= 70){ rank = "Platinum" }
    else if (rankValue >= 60){ rank = "Gold" }
    else if (rankValue >= 50){ rank = "Silver" }
    else if (rankValue >= 40){ rank = "Bronze" }
    else { rank = "Iron" }


    return (
        <div className="performance">
            <div className="performanceTop">
                <div className="performanceTop_left">
                    <p className="performanceTitle">Performance</p>
                    <div className="monthSelectBox">
                        <img src={calender} alt="" className="calender" />
                        <p className="monthName">This month</p>
                        <img src={downArrow} alt="" className="downArrow" />
                    </div>
                </div>

                <div className="performanceTop_Right">
                    <img src={batch} alt="" className="batch" />
                    <p className="rankName">{rank}</p>
                </div>
            </div>

            <div className="graph">
                <img src={exampleGraph} className="exampleGraph" alt="" />
            </div>
        </div>
    )
}

export default Performance