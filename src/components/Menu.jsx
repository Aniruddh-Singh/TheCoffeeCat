// import React from "react";
import "./CSS/menu.css";
import Menu_list from "../utils/Menu_list";

function Menu() {
    return (
        <>
            <div className="menu" id="menu">
                <h1 className="Mmenu">Menu</h1>
                <div className="Mvariety">
                    {Menu_list.map((type, index) => {
                        return (
                            <div className="Mlist" key={index}>
                                <a href="#head" className="varietyName">
                                    {type[0].variety}
                                </a>
                                <ul className="itemNames">
                                    {type.map((item) => {
                                        return (
                                            <li
                                                key={item.itemNo}
                                                className="itemName"
                                            >
                                                {item.itemNo} {item.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Menu;
