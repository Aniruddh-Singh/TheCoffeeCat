import loginLogout from "./loginLogout.css";
import { NavLink } from "react-router-dom";

const Register = () => {
    const loginHere = (e) => {
        e.preventDefault();
    };
    return (
        <div className="register">
            <h1>Sign Up</h1>
            <div className="registration-container">
                <form
                    action="/"
                    onSubmit={loginHere}
                    className="registrationForm"
                >
                    <div>
                        <input type="text" id="name" placeholder="Name" />
                    </div>
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
                    <p>Already have an account?</p>
                    <em>
                        <NavLink to="/login">Login here</NavLink>
                    </em>
                </div>
            </div>
        </div>
    );
};

export default Register;
