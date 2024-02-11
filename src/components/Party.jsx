// import React from "react";
import logo from "./images/logo.png";
import "./CSS/party.css";

function Party() {
    // const aaa = true;

    return (
        <>
            <div className="Hheading">
                <div className="Halignment Hlogo">
                    {/* {aaa ? <img src={logo} alt="logo" className="Hlogo" /> : ""} */}
                    <img src={logo} alt="logo" className="Hlogo" />
                </div>
            </div>
        </>
    );
}

export default Party;
