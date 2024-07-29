import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="box">
            <Header />

            <main id="main-content">
              <Routes>
              <Route path="/" element={<Home />} />

              </Routes>
            </main>
        </div>
    );
}
export default App;
