import "../style/assign.scss"
import uploadIcon from '../images/upload_icon.png'
import missedIcon from '../images/missed_icon.png'
import approvedIcon from '../images/approved_icon.png'
import pendingIcon from '../images/pending_icon.png'
import AssignSubmit from "./AssignSubmit"
import { useState } from "react"
import Database from "../api/Database"

function Assignments(props) {

    const [isSubmitBox, setSubmitBox] = useState(false)
    const [file, setFile] = useState(null)
    const [assign_id, setAssign_id] = useState(-1)
    let obj = new Database

    const onChangeSubmit = (e) => {
        setSubmitBox(true)
        setFile(e.target.files[0])
        setAssign_id(e.target.getAttribute('name'))
    }

    const onFileSubmit = () => {
        let file_message = document.getElementById('file_message').value
        obj.submitAssignment(file, assign_id, file_message, props.std_id, props.studentData.full_name).then(() => {
            props.FetchAssignData()
        })
        setSubmitBox(false)
    }

    const handleCancelSubmit = () => {
        setSubmitBox(false)
    }

    return (
        <>

        {isSubmitBox ? <AssignSubmit onFileSubmit={onFileSubmit} file={file} handleCancelSubmit={handleCancelSubmit} /> : ''}

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
                        let isPending = false
                        let isCompleted = false
                        
                        if(deadline_date < current_date){
                            status = 'Missed'
                            isMissed = true
                        }
                        else {
                            status = 'On-Hold'
                            isHold = true
                        }
                        if(item.std_pend !== null){
                            if(JSON.parse(item.std_pend).includes(parseInt(props.std_id))){
                                status = 'Pending'
                                isCompleted = false
                                isMissed = false
                                isHold = false
                                isPending = true
                            }
                        }
                        if(item.std_comp !== null){
                            if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){
                                status = 'Approved'
                                isCompleted = true
                                isMissed = false
                                isHold = false
                                isPending = false
                            }
                        }

                        return (
                            <div className="singleAssignment" key={item.assign_id}>
                            
                                <div className="date">{month} <br /> {day} </div>
                                <div className="details">
                                    
                                    {isMissed ? <><label className="statusLogo"><img src={missedIcon} />Missed</label></> : ''}
                                    {isHold ? <><label className="statusLogo custom_file_upload"><input type="file" name={item.assign_id} onChange={onChangeSubmit} /><img src={uploadIcon} />Submit</label></> : ''}
                                    {isPending ? <><label className="statusLogo"><img src={pendingIcon} />Pending</label></> : ''}
                                    {isCompleted ? <><label className="statusLogo"><img src={approvedIcon} />Approved</label></> : ''}
                                    
                                    <div className="details_right">
                                        <p className="subject" >{item.subject}</p>
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
        </>
    )
}

export default Assignments