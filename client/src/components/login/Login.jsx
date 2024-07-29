import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="section-login">
            <div className="wrapper">
                <form action="#">
                    <h4>Sign in</h4>
                    <input type="email" placeholder="Enter your email..."/>
                    <input type="password" placeholder="Enter your password..."/>
                    <button>Sign in</button>
                    <span>Do not have an account? <Link to={'/register'}>Sign up here</Link></span>
                </form>
            </div>
        </section>
    );
}
