// import React from "react";
// import { useState } from "react";
import Menu_list from "../../utils/Menu_list";

const VarietyRight = ({ addCart, deleteCart }) => {
    // const [cart, setCart] = useState(0);

    // function cartUpdate1() {
    //     if (cart > 0) {
    //         setCart(cart - 1);
    //     }
    // }

    // function cartUpdate2() {
    //     if (cart < 10) {
    //         setCart(cart + 1);
    //     } else {
    //         alert("Sorry! Limit exceeded. Try some other item.");
    //     }
    // }

    return (
        <>
            <h1 className="variety_heading">Menu</h1>
            <div className="variety_list">
                <ul className="variety_list_ul">
                    {Menu_list.map((variety) => {
                        return (
                            <li
                                className="variety_name_li"
                                key={variety[0].varietyNo}
                            >
                                <div className="variety_name">
                                    <h2>{variety[0].variety}</h2>
                                </div>
                                <ul className="item_name">
                                    {variety.map((item) => {
                                        return (
                                            <>
                                                <li
                                                    className="item_name_li"
                                                    key={item.itemNo}
                                                >
                                                    <div className="item_img">
                                                        <img
                                                            src={item.imgsrc}
                                                            alt="#"
                                                        />
                                                    </div>
                                                    <div className="item_text">
                                                        <h4>{item.name}</h4>
                                                        <p>
                                                            Price:
                                                            {item.price_s}
                                                        </p>
                                                        <span className="item_span">
                                                            Add to Cart:
                                                        </span>
                                                        <span className="item_span_s">
                                                            <span
                                                                className="item_spans item_span1"
                                                                onClick={() => {
                                                                    deleteCart(
                                                                        item
                                                                    );
                                                                }}
                                                            >
                                                                -
                                                            </span>
                                                            <span className="item_spans item_span2">
                                                                {item.cart + 1}
                                                            </span>
                                                            <span
                                                                className="item_spans item_span3"
                                                                onClick={() => {
                                                                    addCart(
                                                                        item
                                                                    );
                                                                }}
                                                            >
                                                                +
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default VarietyRight;
