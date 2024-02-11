// import React from "react";
import "./ordernow.css";
import Menu_list from "../../utils/Menu_list";

function VarietyLeft() {
    return (
        <>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
            <ul className="variety">
                {Menu_list.map((variety, index) => {
                    return <li key={index}>{variety[0].variety}</li>;
                })}
            </ul>
        </>
    );
}

export default VarietyLeft;
