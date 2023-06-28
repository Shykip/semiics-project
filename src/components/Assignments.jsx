import "../style/assign.scss"

function Assignments(props) {

    return (
        <div className="assignments">
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

                        let status = 'Missed'
                        if(JSON.parse(item.std_comp).includes(parseInt(props.std_id))){ status = 'Completed' }
                        else if(deadline_date > current_date){ status = 'On-Hold' }

                        return (
                            <div className="singleAssignment" key={item.assign_id}>
                            
                            <div className="date">{month} <br /> {day} </div>
                            <div className="details">
                                <p className="subject">{item.subject}</p>
                                <p className="desc">{item.description}</p>
                                <div className={`status${status}`}>{status}</div>
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