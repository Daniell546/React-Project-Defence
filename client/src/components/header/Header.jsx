import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="section-header">
            <div className="wrapper narrow">
                <h6 class="site-title">
                    <Link to="/">Logo</Link>
                </h6>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
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
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
