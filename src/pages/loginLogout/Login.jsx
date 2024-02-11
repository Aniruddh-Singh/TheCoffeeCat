import loginLogout from "./loginLogout.css";
import { NavLink } from "react-router-dom";

const Login = () => {
    // const loginHere = (e) => {
    //     e.preventDefault();
    // };
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login-container">
                <form
                    action="/"
                    onSubmit={(event) => event.preventDefault()}
                    className="loginForm"
                >
                    <div>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
                <div className="registerLogin">
                    <p>Not have an account?</p>
                    <em>
                        <NavLink to="/register">Register Here.</NavLink>
                    </em>
                </div>
            </div>
        </div>
    );
};

export default Login;
