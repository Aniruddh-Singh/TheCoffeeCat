// import React from "react";
import "./CSS/footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="f_1">
                    <div className="company">
                        <h2>Company</h2>
                        <ul>
                            <li>
                                <a href="#a">About Us</a>
                            </li>
                            <li>
                                <a href="#a">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social_media">
                        <h2>Social Media</h2>
                        <ul>
                            <li>
                                <a href="#a">Instagram</a>
                            </li>
                            <li>
                                <a href="#a">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#a">Twitter</a>
                            </li>
                            <li>
                                <a href="#a">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div className="getintouch">
                        <h2>Get In Touch</h2>
                        <ul>
                            <li>
                                <a href="#a">+91-9876543210</a>
                            </li>
                            <li>
                                <a href="#a">thecoffeecat@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="f_2">
                    <p>
                        All rights are reserved || Copyright &copy; -
                        thecoffeecat
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
