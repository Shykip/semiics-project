import "../style/teacher.scss"
import searchIcon from "../images/search-icon.png"
import borderLine from "../images/border-image.png"
import listIcon from "../images/list-icon.png"
import deleteIcon from "../images/delete_icon.png"
import editIcon from "../images/edit_icon.png"
import settingsIcon from "../images/settings-icon.png"
import { useState, useEffect } from "react"
import Database from "../api/Database"
import { useNavigate } from "react-router-dom"

function TeacherDash() {

    let obj = new Database
    const navigate = useNavigate()
    const [isLogoutMenu, setLogoutMenu] = useState(false)
    const [teacherInfo, setTeacherInfo] = useState(null)
    const [assignments, setAssignments] = useState(null)
    let teacher_id = sessionStorage.getItem('teacher_id')

    const handleOnLogout = (event) => {
        event.stopPropagation()
        setLogoutMenu(false)
        sessionStorage.setItem('teacher_id', -1)
        window.location.reload()
    }

    useEffect(() => {
        
        if (teacher_id == null || teacher_id == -1) {
            navigate('/login')
        }        

        obj.fetchAssignDataTeacher(teacher_id).then(data => {
            setAssignments(data)
        })

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

    

    return(
        <>
            {teacherInfo ? <>
                <div className="teacherHeading">

                <div className="heading_left">
                    <div className="txtLogo">Semiics</div>
                    <img src={borderLine} alt="" className="borderLine" />
                    <div className="pageTitle">Dashboard</div>
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


                <div className="teacherContentPage">

                    <div className="navBar">
                        <div className="topBar">
                            <img src={listIcon} className="list_icon" />
                        </div>

                        <img src={settingsIcon} className="settings_icon" />
                    </div>

                    <div className="assignmentsT">
                        <div className="assignTitle">Assignments</div>

                        <div className="assignContainer">

                            {assignments.map((item) => {

                                return(
                                    <div className="singleAssignment">

                                        <div className="date_details">
                                            <div className="date">Jan <br /> 12 </div>
                                            <div className="details">
                                                        
                                                <div className="details_right">
                                                    <p className="subject" >{item.subject}</p>
                                                    <p className="desc">{item.description}</p>
                                                    <div className='statusApproved'>Completed</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="manageAssign">
                                            <img src={editIcon} alt="" />
                                            <img src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                )

                            })}
                            

                        </div>
                    </div>
                    
                    <div className="addAssign">
                        <h1>Give Assignments</h1>
                        <form action="" className="addAssign_form">
                            <select name="subject" className="subjectSelect">
                                {JSON.parse(teacherInfo.class).map((item) => {
                                    return(
                                        <option value={item} key={item}>{item}</option>
                                    )
                                })}
                                
                            </select>
                            <textarea placeholder="Assignment Description here..." id="" cols="30" rows="10" className="assignDescForm"></textarea>
                            <button>Submit</button>
                        </form>
                    </div>

                </div>
            </> : '' }
        </>
    )
}

export default TeacherDash