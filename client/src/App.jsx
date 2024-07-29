import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PerfumeDetails from "./components/perfume-details/PerfumeDetails";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreatePerfume from "./components/create-perfume/CreatePerfume";

function App() {
    return (
        <div className="box">
            <Header />

            <main id="main-content">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/1/details" element={<PerfumeDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<CreatePerfume />} />
              </Routes>
            </main>
        </div>
    );
}
export default App;
