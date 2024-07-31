import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PerfumeDetails from "./components/perfume-details/PerfumeDetails";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreatePerfume from "./components/create-perfume/CreatePerfume";
import Search from "./components/search/Search";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import UserProfile from "./components/user-profile/UserProfile";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditPerfume from "./components/edit-perfume/EditPerfume";

function App() {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const user = JSON.parse(localStorage.getItem('user'))
    const contexData = {
        user,
        isAuthenticated: !!user,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contexData}>

            <div className="box">
                <Header />

                <ToastContainer position="bottom-left" draggable theme="colored" autoClose={2000} closeOnClick/>
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
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}
export default App;
