// import React from "react";
import "./cartitems.css";

const CartItems = ({ selectedCart }) => {
    return (
        <>
            <div className="cart_body">
                <div className="cart_items">
                    <div className="heading">
                        <h2>Your Cart</h2>
                        <div className="noItems">
                            <p>No of Items:</p>
                            <p>{}</p>
                        </div>
                    </div>
                    <div className="body_items">
                        <ul className="listOfCartITems">
                            {selectedCart.map((items, index) => {
                                return (
                                    <li className="indItems" key={index}>
                                        <div className="item_card">
                                            <img src={items.imgsrc} alt="#" />
                                            <div className="cartDetail">
                                                <h2>{items.name}</h2>
                                                <p>{items.price_s}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="bill_pay">
                        <h2 className="total">500</h2>
                        <button className="proceedToPay">Proceed To Pay</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;
