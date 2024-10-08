import { Link, useNavigate } from "react-router-dom";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext, useAuth } from "../../contexts/AuthContext";

import { toast } from 'react-toastify';
import { useCart } from "../../contexts/CartContext";

export default function Header() {

    const navigate = useNavigate();
    const { isAuthenticated, changeAuthState } = useAuth();
    const { clearCart } = useCart();

    const logoutHandler = (e) => {
        e.preventDefault();
        try {
            changeAuthState({})
            clearCart();
            localStorage.removeItem('user')
            toast.success('Logout successful')
            
        } catch (error) {
            toast.error('Logout unsuccessful')
        } finally{

            navigate('/')
        }
        
    }

    return (
        <section className="section-header">
            <div className="wrapper narrow">
                <h6 className="site-title">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </h6>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to="/create"><FontAwesomeIcon icon={faPlus} /></Link>
                                </li>
                                <li>
                                    <Link to="/user-profile"><FontAwesomeIcon icon={faUser} /></Link>
                                </li>
                                <li>
                                    <Link to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} /></Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={logoutHandler}>Logout</Link>
                                </li>
                            </>
                        )
                            : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                    </ul>
                </nav>
            </div>
        </section>
    );
}
