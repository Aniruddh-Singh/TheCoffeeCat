// import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Discover from "../../components/Discover";
import Menu from "../../components/Menu";
import ContactForm from "../../components/Contact";
import "./main.css";

function Main() {
    return (
        <>
            <Home />
            <About />
            <Discover />
            <Menu />
            <ContactForm />
            {/* <Party /> */}
            <NavLink to="/cart_items" className="Navbtn">
                <button className="add_carts">Cart Items</button>
            </NavLink>
        </>
    );
}

export default Main;
