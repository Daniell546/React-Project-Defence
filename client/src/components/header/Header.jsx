import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
<<<<<<< HEAD
    const navigate = useNavigate()
    const { isAuthenticated, user } = useContext(AuthContext)
    const { isAuthenticated, email, changeAuthState } = useContext(AuthContext)
    console.log('Email: ' + email);

    const logoutHandler = () => {
        localStorage.removeItem('user')

        localStorage.removeItem('auth')
        localStorage.removeItem('email')
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
                        {isAuthenticated ? (<>
                            <li>
                                <Link to="/create">Create</Link>
                            </li>
                            <li>
                                <Link to="/user-profile">{email}'s profile</Link>
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

                    </ul>
                </nav>
            </div>
        </section>
    );
}
