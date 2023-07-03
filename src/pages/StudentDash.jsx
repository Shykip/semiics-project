import Heading from "../components/Heading"
import ContentPage from "../components/ContentPage"
import { useEffect, useState } from "react"
import Database from "../api/Database"
import { useNavigate } from "react-router-dom"

function StudentDash() {

    const navigate = useNavigate()
    let obj = new Database
    let std_id = sessionStorage.getItem('std_id')
    const [assignData, setAssignData] = useState([])
    const [studentData, setStudentData] = useState([])

    const FetchAssignData = () => {

        obj.fetchAssignData(std_id).then(data => {
            if(data !== undefined){
                setAssignData(data)
            }
        })
    }

    useEffect(() => {

        if (std_id == null || std_id == -1) {
            navigate('/login')
        }
        FetchAssignData()

        obj.getStudentInfo(std_id).then(data => {
            setStudentData(data)
        })
    }, [])


    return (
        <>
            <Heading studentData={studentData} />
            <ContentPage assignData={assignData} studentData={studentData} std_id={std_id} FetchAssignData={FetchAssignData} />
        </>
    )
}

export default StudentDash