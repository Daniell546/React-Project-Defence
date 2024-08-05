import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PerfumeDetails from "./components/perfume-details/PerfumeDetails";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreatePerfume from "./components/create-perfume/CreatePerfume";
import Search from "./components/search/Search";
import UserProfile from "./components/user-profile/UserProfile";
import EditPerfume from "./components/edit-perfume/EditPerfume";
import Footer from "./components/footer/Footer";
import EditComments from "./components/perfume-details/perfume-comments/edit-comments/EditComments";
import Cart from "./components/cart/Cart";
import { AuthContext } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ToastContainer } from 'react-toastify';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./components/cart/checkout/Checkout";

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
        localStorage.setItem('user', JSON.stringify(state));
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const contexAuthData = {
        user,
        isAuthenticated: !!user,
        changeAuthState,
    };

    // PayPal options
    const initialOptions = {
        "client-id": "AWDiY4d3z2OI3N5NJ_dDsX4t3K7BNrCRO5vXWU98mjb6eH5OZYs32Gain8nlwVe9dc_dyfKmmbWGb1Wd", // Replace with your actual client ID
        currency: "USD",
        intent: "capture",
    };

    return (
        <AuthContext.Provider value={contexAuthData}>
            <div className="box">
                <CartProvider>
                    <Header />
                    <ToastContainer position="bottom-left" draggable theme="colored" autoClose={2000} closeOnClick />

                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/user-profile" element={<UserProfile />} />
                            <Route path="/create" element={<CreatePerfume />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/perfume/:perfumeId/details" element={<PerfumeDetails />} />
                            <Route path="/perfume/:perfumeId/edit" element={<EditPerfume />} />
                            <Route path="/perfume/comment/:commentId/edit" element={<EditComments />} />
                            
                            {/* Cart route with PayPal provider */}
                            <Route path="/cart" element={
                                <PayPalScriptProvider options={initialOptions}>
                                    <Cart />
                                </PayPalScriptProvider>
                            }>
                                <Route path="checkout" element={<Checkout />} />
                            </Route>
                        </Routes>
                    </main>
                </CartProvider>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
