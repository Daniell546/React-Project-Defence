import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PerfumeDetails from "./components/perfume-details/PerfumeDetails";

function App() {
    return (
        <div className="box">
            <Header />

            <main id="main-content">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/1/details" element={<PerfumeDetails />} />
              </Routes>
            </main>
        </div>
    );
}
export default App;
