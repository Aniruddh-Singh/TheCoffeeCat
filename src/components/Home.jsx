// import React from "react";
import "./CSS/home.css";
// import { animated, useSpring } from "@react-spring/web";

function Home() {
    return (
        <>
            <div className="home" id="home">
                <div className="home_wish">
                    <h1 className="home_text_1">Namaste</h1>
                    <h1 className="home_text_2">
                        Welc<span className="home_blue">om</span>e to
                    </h1>
                    <h1 className="home_text_3">The Coffee Cat</h1>
                    <p className="home_para">
                        THE COFFEE CAT is an iconic brand that serves coffee &
                        finger licking snacks with a tinge of inspiration that
                        encourages people to forge their own identities
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
