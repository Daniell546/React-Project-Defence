import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
<<<<<<< HEAD
    const navigate = useNavigate()
    const { isAuthenticated, user } = useContext(AuthContext)

    const logoutHandler = () => {
        localStorage.removeItem('user')

        changeAuthState({})
        navigate('/')
    }

=======
>>>>>>> parent of 86f7027 (login implementation)
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
<<<<<<< HEAD
                        {isAuthenticated ? (<>
                            <li>
                                <Link to="/create">Create</Link>
                            </li>
                            <li>
                                <Link to="/user-profile">{user.email}'s profile</Link>
                            </li>
                            <li>
                                <Link to={''} onClick={logoutHandler}>Logout</Link>
                            </li>
                        </>
                        )
                            : (<>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                            )}

=======
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="#">Logout</Link>
                        </li>
>>>>>>> parent of 86f7027 (login implementation)
                    </ul>
                </nav>
            </div>
        </section>
    );
}
