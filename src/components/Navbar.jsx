// import React from "react";
import { useState } from "react";
import "./CSS/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [toggle, setToggle] = useState(true);
    const clck = () => {
        return setToggle(!toggle);
    };

    let classname;
    toggle ? (classname = "Nnavbar") : (classname = " change");

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <>
            <div className={classname} id="navbar">
                {toggle ? (
                    <MenuIcon
                        sx={{
                            display: {
                                color: "white",
                                xs: "block",
                                md: "none",
                            },
                        }}
                        className="menuicon"
                        onClick={clck}
                    />
                ) : (
                    <CloseIcon
                        sx={{
                            display: {
                                color: "white",
                                xs: "block",
                                md: "none",
                            },
                        }}
                        className="menuicon"
                        onClick={clck}
                    />
                )}
                <ul className="Nnav-items">
                    <li>
                        <a href="/#"> Home </a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                        {/* <NavLink to="/#about">About</NavLink> */}
                    </li>
                    <li>
                        <a href="/#discover">Discover</a>
                    </li>
                    <li>
                        <a href="/#menu">Menu</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact us</a>
                    </li>
                </ul>
                <div className="Btn">
                    <NavLink to="/orderNow" className="Navbtn">
                        <button className="Nbtn">Order Now</button>
                    </NavLink>
                    {/* {isAuthenticated && (
                        <button className="Nbtn">Hi, {user.name}</button>
                    )}
                    {isAuthenticated ? (
                        <button
                            onClick={() =>
                                logout({
                                    logoutParams: {
                                        returnTo: window.location.origin,
                                    },
                                })
                            }
                            className="Nbtn"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => loginWithRedirect()}
                            className="Nbtn"
                        >
                            sign in/sign up
                        </button>
                    )} */}
                    <NavLink to="/login">
                        <button className="Nbtn">SignIn/SignUp</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
