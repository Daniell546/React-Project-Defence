import { Routes, Route } from "react-router-dom";
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
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateGuard from "./components/common/PrivateGuard";
import PublicGuard from "./components/common/PublicGuard";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="box">
                    <Header />
                    <ToastContainer position="bottom-left" draggable theme="colored" autoClose={2000} closeOnClick stacked={true} />
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/perfume/:perfumeId/details" element={<PerfumeDetails />} />

                            <Route element={<PublicGuard />}>
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                            </Route>

                            <Route element={<PrivateGuard />}>
                                <Route path="/user-profile" element={<UserProfile />} />
                                <Route path="/create" element={<CreatePerfume />} />
                                <Route path="/perfume/comment/:commentId/edit" element={<EditComments />} />
                                <Route path="/perfume/:perfumeId/edit" element={<EditPerfume />} />
                                <Route path="/cart" element={<Cart />} />
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
