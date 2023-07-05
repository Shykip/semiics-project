import "../style/teacher.scss"
import searchIcon from "../images/search-icon.png"
import borderLine from "../images/border-image.png"
import listIcon from "../images/list-icon.png"
import deleteIcon from "../images/delete_icon.png"
import approveIcon from "../images/approved_icon.png"
import dashIcon from "../images/dashboard-icon.png"
import settingsIcon from "../images/settings-icon.png"
import deniedIcon from "../images/missed_icon.png"
import downloadIcon from "../images/download_icon.png"
import PopupBox from "../components/PopupBox"
import { useState, useEffect } from "react"
import Database from "../api/Database"
import { useNavigate } from "react-router-dom"

function TeacherDash() {

    let obj = new Database
    const navigate = useNavigate()
    const [isLogoutMenu, setLogoutMenu] = useState(false)
    const [teacherInfo, setTeacherInfo] = useState(null)
    const [assignments, setAssignments] = useState(null)
    const [isAssignSubTab, setAssignSubTab] = useState(false)
    const [submits, setsubmits] = useState(null)
    const [load, setLoad] = useState(false)
    let teacher_id = sessionStorage.getItem('teacher_id')

    const fetchAssignDataTeacher = () => {
        obj.fetchAssignDataTeacher(teacher_id).then(data => {
            setAssignments(data)
        })
    }

    const fetchSubmitsData = () => {
        obj.getAssignSubmits(teacher_id).then(data => {
            setsubmits(data)
            setLoad(true)
        })
    }

    const handleOnLogout = (event) => {
        event.stopPropagation()
        setLogoutMenu(false)
        sessionStorage.setItem('teacher_id', -1)
        window.location.reload()
    }

    const handleDeleteAssign = (event) => {
        obj.deleteAssignment(event.target.id).then(data => {
            fetchAssignDataTeacher()
        })
    }

    const handleAssignAdd = (event) => {
        event.preventDefault()
        let subject = document.getElementById('subjectSelect').value
        let description = document.getElementById('assignDescForm').value

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const post_date = `${year}-${month}-${day}`;

        let dead_date = document.getElementById('dead_date').value
        let semester = ''

        obj.fetchClasses().then(data => {

            data.map((item) => {
                if(JSON.parse(item.subject).includes(subject)){
                    semester = item.semester
                }
            })

            if (subject.trim() === '' || dead_date.trim() === '' || description.trim() === '' || semester === '') {
                alert('Please fill out all required fields.');
            } else{
                obj.addAssignment(semester, subject, description, post_date, dead_date, teacher_id).then(data => {
                    fetchAssignDataTeacher()
                    document.getElementById('dead_date').value = ''
                    document.getElementById('assignDescForm').value = ''
                })
            }
        })

        
    }

    const [clickedAssignData, setClickedAssignData] = useState(null)
    const handleDownload = (file_loc, std_id, assign_id, asub_id) => {
        window.open(`http://localhost/semiics/${file_loc}`, '_blank');
        setClickedAssignData({
            std_id : std_id,
            assign_id : assign_id,
            asub_id : asub_id
    })
        handleButtonClick()
    }

    useEffect(() => {
        
        if (teacher_id == null || teacher_id == -1) {
            navigate('/login')
        }        

        fetchAssignDataTeacher()
        fetchSubmitsData()

        obj.getTeacherInfo(teacher_id).then(data => {
            setTeacherInfo(data)
        })

        const handleClickOutside = (event) => {
            if (event.target.name !== 'logoutBox'){
                setLogoutMenu(false)
            }
        }
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };


    }, [])


    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true)
    };

    const handlePopupConfirm = () => {
        obj.updateAssignStatus("Approved", clickedAssignData.asub_id, clickedAssignData.assign_id, clickedAssignData.std_id)
        setLoad(false)
        fetchSubmitsData()
        setShowPopup(false)
        
    };

    const handlePopupCancel = () => {
        setShowPopup(false)
    };

    const handlePopupDeny =() => {
        obj.updateAssignStatus("Denied", clickedAssignData.asub_id, clickedAssignData.assign_id, clickedAssignData.std_id)
        setLoad(false)
        fetchSubmitsData()
        setShowPopup(false)
        setLoad(false)
    }

    

    return(
        <>
            {teacherInfo && load ? <>
                <div className="teacherHeading">

                <div className="heading_left">
                    <div className="txtLogo">Semiics</div>
                    <img src={borderLine} alt="" className="borderLine" />
                    <div className="pageTitle">{isAssignSubTab ? 'Submission List' : 'Dashboard'}</div>
                </div>

                <div className="heading_right">
                    <div className="searchProfile">
                        <div className="search_icon_box">
                            <img className="serachLogo" src={searchIcon} alt="" />
                        </div>
                        <input className="searchInput" type="text" placeholder="Search Profile" />
                    </div>
                    
                    <div className="headingProfile" onClick={(event) => {event.stopPropagation(), setLogoutMenu(!isLogoutMenu)}}>
                        <div className="headingProfile_left">
                            <div className="headingProfile_name">{teacherInfo.full_name}</div>
                            <div className="headingProfile_sem">Teacher</div>
                        </div>
                        <div className="headingProfile_picture_box">
                            <img src={`http://localhost/semiics/files/images/profiles/${teacherInfo.profileImg}`} alt="Small_Profile" />
                        </div>
                    </div>
                </div>

                {isLogoutMenu ? <div className="logoutbtn_box" name="logoutBox"><button onClick={handleOnLogout}>Sign out</button></div> : ''}

                </div>

                {showPopup && (<PopupBox onConfirm={handlePopupConfirm} onCancel={handlePopupCancel} onDeny={handlePopupDeny} />)}

                <div className="teacherContentPage">

                    <div className="navBar">
                        <div className="topBar">
                            <img src={dashIcon} className={isAssignSubTab ? 'dashboard_icon_light' : 'dashboard_icon'} onClick={() => {setAssignSubTab(false)}} />
                            <img src={listIcon} className={isAssignSubTab ? 'list_icon' : 'list_icon_light'} onClick={() => setAssignSubTab(true)} />
                        </div>

                        <img src={settingsIcon} className="settings_icon" />
                    </div>

                    { !isAssignSubTab ? <>
                        <div className="assignmentsT">
                            <div className="assignTitle">Assignments</div>

                            <div className="assignContainer">

                                {assignments ? assignments.map((item) => {

                                    const dead_date = new Date(item.dead_date)
                                    const currentDate = new Date()

                                    // Calculate the time difference in milliseconds
                                    const timeDiff = dead_date.getTime() - currentDate.getTime();

                                    // Convert the time difference to days
                                    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

                                    const post_date = new Date(item.post_date)
                                    const month_num = post_date.getMonth()
                                    const day = post_date.getDate()
                                    const monthNames = [
                                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                                    ]
                                    const month = monthNames[month_num]

                                    item.std_comp

                                    return(
                                        <div className="singleAssignment" key={item.assign_id}>

                                            <div className="date_details">
                                                <div className="date"><span>{daysLeft} Days</span>Remaining</div>
                                                <div className="details">
                                                            
                                                    <div className="details_right">
                                                        <p className="subject" >{item.subject}</p>
                                                        <p className="desc">{item.description}</p>
                                                        <div className="status">
                                                            <div className='statusApproved'>{item.std_comp ? JSON.parse(item.std_comp).length : 0} Approves</div>
                                                            <div className='statusPending'>{item.std_pend ? JSON.parse(item.std_pend).length : 0} Pending</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="manageAssign">
                                                {/* <img src={editIcon} alt="" /> */}
                                                <img src={deleteIcon} id={item.assign_id} onClick={handleDeleteAssign} />
                                            </div>
                                        </div>
                                    )

                                }) : ''}
                                

                            </div>
                        </div>
                        
                        <div className="addAssign">
                            <h1>Give Assignments</h1>
                            <form action="" className="addAssign_form">
                                <select name="subject" className="subjectSelect" id="subjectSelect">
                                    {JSON.parse(teacherInfo.subject).map((item) => {
                                        return(
                                            <option value={item} key={item}>{item}</option>
                                        )
                                    })}
                                    
                                </select>
                                <input type="date" className="dead_date" id="dead_date" />
                                <textarea placeholder="Assignment Description here..." cols="30" rows="10" className="assignDescForm" id="assignDescForm"></textarea>
                                <button onClick={handleAssignAdd}>Submit</button>
                            </form>
                        </div>
                    </>
                    :
                        <div className="assignmentSubList">

                            <div className="assignSubTitle">Student Submits</div>
                            
                            <div className="submitsContainer">


                                
                                {submits ?
                                    
                                    submits.map((item) => {
                                        let status = ''
                                        if(item.status === "Approved") {status = item.status}
                                        if(item.status === "Pending") {status = item.status}
                                        if(item.status === "Denied") {status = item.status}

                                        return (
                                            
                                            <div className="singleAssignmentT" key={item.asub_id}>
                                                <div className="date_details">
                                                    <div className="date"><span>3 Days</span>Remaining</div>
                                                    <div className="details">

                                                        
                                                            {
                                                            item.status == "Approved" ? <><div className="subApproved"><img src={approveIcon} /></div></>
                                                            : item.status == "Pending" ? <>
                                                                <button className="custom_file_download" onClick={() => handleDownload(item.file_loc, item.std_id, item.assign_id, item.asub_id)}><img src={downloadIcon} />Download</button>
                                                            </>
                                                            : <><div className="subDenied"><img src={deniedIcon} /></div></>
                                                            }
                                                        
                                                                
                                                        <div className="details_right">
                                                            <p className="submitter">{item.std_fullname}</p>
                                                            <p className="subject" >{item.subject} ({item.semester} sem)</p>
                                                            <p className="desc">{item.title}</p>
                                                            <p className="message"><span>Message</span> : {item.message}</p>
                                                            <div className="status">
                                                                {
                                                                item.status == "Approved" ? <div className='statusApproved'>Approved</div>
                                                                : item.status == "Pending" ? <div className='statusPending'>Pending</div>
                                                                : <div className='statusMissed'>Denied</div>
                                                                }
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                : ''}

                            </div>

                        </div>
                    }

                </div>
            </> : '' }
        </>
    )
}

export default TeacherDash