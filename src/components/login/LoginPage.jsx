import "../../style/loginpage.scss"

const LoginPage = () => {



    function login(e){

        e.preventDefault();

        console.log("hi");
        alert("ello thee")
    }
    return ( 
        <div className="main">

            <div className="form_container">
                <h3 className="title">LOGIN</h3>
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

        <p className="signup">Don't have an account? <a href="/signup">Signup here.</a></p>

            </div>
        </div>
     );
}
 
export default LoginPage;