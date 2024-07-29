import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="section-register">
            <div className="wrapper">
                <form action="#">
                    <h4>Sign up</h4>
                    <input type="email" placeholder="Enter your email..."/>
                    <input type="text" placeholder="Enter your name..."/>
                    <input type="password" placeholder="Enter your password..."/>
                    <input type="password" placeholder="Enter your password again..."/>
                    <button>Sign up</button>
                    <span>Already have an account? <Link to={'/login'}>Sign in here</Link></span>
                </form>
            </div>
        </section>
    );
}
