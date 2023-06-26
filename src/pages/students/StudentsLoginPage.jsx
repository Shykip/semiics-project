import { Link } from "react-router-dom";
import "../../style/loginpage.scss"

const StudentsLoginPage = () => {



    function login(e){

        e.preventDefault();

        console.log("hi");
        alert("ello thee")
    }
    return ( 
        <div className="main">

            <div className="form_container">
                <h3 className="title">STUDENTS LOGIN</h3>
               <form onSubmit={login}>
                <div>
                    <label htmlFor="Username">Username</label><br/>
                    <input type="text" id="Username"/>
                </div>
                <div>
                    <label htmlFor="Password">Password</label><br/>
                    <input type="Password" id="Password"/>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

               </form>

        <p className="signup">Don't have an account? <Link to="/students/signup">Signup here.</Link></p>

            </div>
        </div>
     );
}
 
export default StudentsLoginPage;