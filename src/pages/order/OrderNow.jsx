// import React from "react";
import { NavLink } from "react-router-dom";
import VarietyLeft from "./VarietyLeft";
import VarietyRight from "./VarietyRight";
import "./ordernow.css";

const OrderNow = ({ addCart, deleteCart, cart }) => {
    return (
        <>
            <div className="order_now">
                <div className="search_side">
                    <div className="search_box">
                        <VarietyLeft />
                    </div>
                </div>
                <div className="items_side">
                    <VarietyRight
                        addCart={addCart}
                        deleteCart={deleteCart}
                        cart={cart}
                    />
                </div>
            </div>
            <NavLink to="/cart_items" className="Navbtn">
                <button className="add_cart">Cart Items</button>
            </NavLink>
        </>
    );
};

export default OrderNow;
