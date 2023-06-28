import { Link } from "react-router-dom";
import "../../style/loginpage.scss";

const AdminLoginPage = () => {
  function login(e) {
    e.preventDefault();

    function login(e){

        e.preventDefault();

        console.log("hi");
    }
    return ( 
        <div className="main">

            <div className="form_container">
                <h3 className="title">ADMIN LOGIN</h3>
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
            </div>
        </div>
     );
}
 
export default AdminLoginPage;
