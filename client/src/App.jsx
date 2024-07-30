import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PerfumeDetails from "./components/perfume-details/PerfumeDetails";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreatePerfume from "./components/create-perfume/CreatePerfume";
import Search from "./components/search/Search";
<<<<<<< HEAD
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import UserProfile from "./components/user-profile/UserProfile";

function App() {

    // const [authState, setAuthState] = useState({});

    // const changeAuthState = (state) => {
    //     setAuthState(state);
    // }
    const contextData = {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    }

=======

function App() {
>>>>>>> parent of 86f7027 (login implementation)
    return (
        <div className="box">
            <Header />

<<<<<<< HEAD
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
                        <Route path="/user-profile" element={<UserProfile />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
=======
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
>>>>>>> parent of 86f7027 (login implementation)
    );
}
export default App;
