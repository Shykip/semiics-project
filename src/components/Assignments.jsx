import "../style/assign.scss"
import uploadIcon from '../images/upload_icon.png'
import missedIcon from '../images/missed_icon.png'
import approvedIcon from '../images/approved_icon.png'
import pendingIcon from '../images/pending_icon.png'

function Assignments(props) {

    return (
        <div className={props.isAssignTab ? "assignments2" : "assignments"} onClick={props.handleListBtnClick}>
            <p className="assignTitle">Assignments</p>
            <div className="assignContainer">

                {
                    props.assignData.map((item) => { 

                        const current_date = new Date()
                        const deadline_date = new Date(item.dead_date)
                        const month_num = deadline_date.getMonth()
                        const day = deadline_date.getDate()
                        const monthNames = [
                            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                        ]
                        const month = monthNames[month_num]

                        let status = ''
                        let isMissed = false
                        let isHold = false
                        let isCompleted = false
                        
                        if(deadline_date < current_date){
                            status = 'Missed'
                            isMissed = true
                        }
                        else {
                            status = 'On-Hold'
                            isHold = true
                        }
                        if(item.std_comp !== null){
                            if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){
                                status = 'Approved'
                                isCompleted = true
                                isMissed = false
                                isHold = false
                            }
                        }

                        return (
                            <div className="singleAssignment" key={item.assign_id}>
                            
                                <div className="date">{month} <br /> {day} </div>
                                <div className="details">
                                    
                                    {isMissed ? <><label className="statusLogo"><img src={missedIcon} />Missed</label></> : ''}
                                    {isHold ? <><label className="statusLogo custom_file_upload"><input type="file"/><img src={uploadIcon} />Submit</label></> : ''}
                                    {isCompleted ? <><label className="statusLogo"><img src={approvedIcon} />Approved</label></> : ''}
                                    
                                    <div className="details_right">
                                        <p className="subject">{item.subject}</p>
                                        <p className="desc">{item.description}</p>
                                    <div className={`status${status}`}>{status}</div>
                                </div>
                            </div>
                        </div>
                        )

                    })
                }
                
            </div>
        </div>
    )
}

export default Assignments