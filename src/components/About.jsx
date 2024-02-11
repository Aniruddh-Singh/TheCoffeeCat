// import React from "react";
import view from "./images/view.webp";
import scene from "./images/scene.jpg";
import "./CSS/about.css";

function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="about_us">
                    <h1 className="aboutus">About Us</h1>
                </div>
                <div className="about_text_img">
                    <img src={view} alt="inner_view" className="about_img" />
                    <p className="about_text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eveniet vero praesentium aut soluta neque ex vel
                        commodi cumque sapiente. Consequatur impedit debitis
                        pariatur odit ut eaque doloremque accusamus repellendus
                        eos placeat facere quaerat odio, totam velit repudiandae
                        voluptatibus! Nobis dolore rem animi laudantium ullam
                        aperiam quia commodi alias minus similique?
                    </p>
                </div>
                <div className="about_text_img about_text_img_rev">
                    <p className="about_text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eveniet vero praesentium aut soluta neque ex vel
                        commodi cumque sapiente. Consequatur impedit debitis
                        pariatur odit ut eaque doloremque accusamus repellendus
                        eos placeat facere quaerat odio, totam velit repudiandae
                        voluptatibus! Nobis dolore rem animi laudantium ullam
                        aperiam quia commodi alias minus similique?
                    </p>
                    <img src={scene} alt="inner_view" className="about_img" />
                </div>
            </div>
        </>
    );
}

export default About;
