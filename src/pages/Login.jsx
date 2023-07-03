import { useState } from 'react'
import '../style/login.scss'
import Database from '../api/Database'
import { useNavigate } from "react-router-dom"

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [userType, setUserType] = useState('student')

    let obj = new Database()

    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()

        if(userType === 'student'){
            obj.authStudent(username, password).then(data => {
                sessionStorage.setItem('std_id', data)
                navigate('/student')
            })
        } else if(userType === 'teacher') {
            obj.authTeacher(username, password).then(data => {
                sessionStorage.setItem('teacher_id', data)
                navigate('/teacher')
            })
        }
        
    }


    return (
        <>
            <section className="background">
                <div className="form_container">
                    <h3>Semiics</h3>

                    <form onSubmit={handelSubmit}>
                        <select name="user" className="userSelect" onChange={(e) => setUserType(e.target.value)}>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                        <input type="text" placeholder='username' name="username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='password' name="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login