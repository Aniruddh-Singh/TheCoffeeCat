import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/main/Main";
import OrderNow from "./pages/order/OrderNow";
import Register from "./pages/loginLogout/Register";
import Login from "./pages/loginLogout/Login";
import CartItems from "./pages/cartitems/CartItems";
// import Menu_list from "./utils/Menu_list";
import { MenuList } from "@mui/material";

function App() {
    let storedCart;
    if (localStorage.getItem("selectedCart") === null) {
        storedCart = [];
    } else {
        storedCart = JSON.parse(localStorage.getItem("selectedCart"));
    }

    const [selectedCart, setSelectedCart] = useState(storedCart);
    const [cart, setCart] = useState(0);

    function addCart(item) {
        if (cart < 10) {
            setCart(cart + 1);
        } else {
            alert("Sorry! Limit exceeded. Try some other item.");
        }
        item.cart = cart;

        setSelectedCart([...selectedCart, item]);
        console.log(selectedCart);
    }

    function deleteCart(item) {
        if (cart > 0) {
            setCart(cart - 1);
        }

        setSelectedCart(
            MenuList.map((variety) => {
                return variety.filter((e) => {
                    return e !== item;
                });
            })
        );
    }

    useEffect(() => {
        localStorage.setItem("selectedCart", JSON.stringify(selectedCart));
    }, [selectedCart]);

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/ordernow"
                        element={
                            <>
                                <Navbar />
                                <OrderNow
                                    addCart={addCart}
                                    deleteCart={deleteCart}
                                    cart={cart}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <>
                                <Register />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/cart_items"
                        element={
                            <>
                                <Navbar />
                                <CartItems selectedCart={selectedCart} />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
