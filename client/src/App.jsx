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

function App() {

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }
    const contextData = {
        email: localStorage.getItem('email'),
        accessToken: localStorage.getItem('auth'),
        isAuthenticated: !!localStorage.getItem('auth'),
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>

            <div className="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/perfume/:perfumeId/details" element={<PerfumeDetails />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create" element={<CreatePerfume />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}
export default App;
