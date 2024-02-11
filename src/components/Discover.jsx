// import React from "react";
import Discover_data from "../utils/Discover_data";
import "./CSS/discover.css";
// import Bread from "./images/bread.jpeg";
// import Burger from "./images/burger.jpeg";
// import Coffee_cup from "./images/coffee-cup.jpeg";
// import Coffee from "./images/coffee.jpg";
// import Fingers from "./images/fingers.jpg";
// import Kutlet from "./images/kutlet.jpg";
// import Momos from "./images/momos.jpg";
// import Pizza from "./images/pizza.jpeg";
// import Sandwich from "./images/sandwich.jpg";
// import Tea from "./images/tea.jpg";
// import Tikiya from "./images/tikiya.jpg";

function Discover() {
    return (
        <>
            <div className="discover" id="discover">
                <div className="Dtitle">Discover</div>
                <ul className="Dlist">
                    {Discover_data.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href="#d">
                                    <img
                                        src={item.imgsrc}
                                        alt={item.name}
                                        className="Dimg"
                                    />
                                    <h2 className="Dtext">{item.name}</h2>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Discover;
