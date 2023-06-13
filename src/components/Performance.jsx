import calender from "../images/list-icon.png"
import downArrow from "../images/downarrow.png"
import batch from "../images/batch.png"
import exampleGraph from "../images/example-graph.png"


function Performance() {
    return (
        <div className="performance">
            <div className="performanceTop">
                <div className="performanceTop-left">
                    <p className="performanceTitle">Performance</p>
                    <div className="monthSelectBox">
                        <img src={calender} alt="" className="calender" />
                        <p className="monthName">This month</p>
                        <img src={downArrow} alt="" className="downArrow" />
                    </div>
                </div>

                <div className="performanceTop-Right">
                    <img src={batch} alt="" className="batch" />
                    <p className="rankName">Diamond</p>
                </div>
            </div>

            <div className="graph">
                <img src={exampleGraph} className="exampleGraph" alt="" />
            </div>
        </div>
    )
}

export default Performance