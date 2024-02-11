import { useState } from "react";
import "./CSS/contact.css";
import logo from "./images/logo.png";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";

function ContactForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        suggestion: "",
    });

    let name, value;
    const updateData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({ ...data, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, address, suggestion } = data;
        if (name && email && address && suggestion) {
            const resp = fetch(
                "https://thecoffeecat-337ac-default-rtdb.firebaseio.com/userMessage.json",
                {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, address, suggestion }),
                }
            );
            if (resp) {
                alert("data stored successfully");
                setData({
                    name: "",
                    email: "",
                    address: "",
                    suggestion: "",
                });
            } else {
                alert("please fill the data.");
            }
        } else {
            alert("Please fill all the fields.");
        }
    };

    return (
        <>
            <div className="contact" id="contact">
                <h1>Contact Us</h1>
                <div className="contact_left_right">
                    <div className="contact_left">
                        <img src={logo} alt="#" />
                    </div>
                    <div className="contact_right">
                        <h2>Tell us something.</h2>
                        <form action="submit">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={updateData}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={updateData}
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={data.address}
                                onChange={updateData}
                            />
                            <input
                                type="text"
                                name="suggestion"
                                placeholder="Suggestion"
                                value={data.suggestion}
                                onChange={updateData}
                            />
                            <input
                                type="file"
                                name="file"
                                placeholder="Share some memory"
                                value={data.file}
                                onChange={updateData}
                            />
                            <button type="submit" onClick={onSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
