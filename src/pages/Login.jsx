import { useState } from 'react'
import '../style/login.scss'
import Database from '../api/Database'
import { useNavigate } from "react-router-dom"

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    let obj = new Database()

    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()

        obj.authStudent(username, password).then(data => {
            sessionStorage.setItem('std_id', data)
            navigate('/')
        })
    }


    return (
        <>
            <section className="background">
                <div className="form_container">
                    <h3>Semiics</h3>

                    <form onSubmit={handelSubmit}>
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