import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {

    const navigate = useNavigate();
    const { isAuthenticated, changeAuthState } = useContext(AuthContext);

    const logoutHandler = () => {
        localStorage.removeItem('user');
        changeAuthState({})
        navigate('/')
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
                            <Link to="/search">Search</Link>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to="/create">Create</Link>
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
