import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

import { toast } from 'react-toastify';

const initialValues = {
    email: "",
    password: "",
}

export default function Login() {

    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            toast.success('Log in successfully')
            navigate('/');

        } catch (error) {
            toast.error(error)

        }
    }

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
    )


    return (
        <section className="section-login">
            <div className="wrapper">
                <form action="#" onSubmit={submitHandler}>
                    <h4>Sign in</h4>
                    <input type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Enter your email..." />
                    <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Enter your password..." />
                    <button>Sign in</button>
                    <span>Do not have an account? <Link to={'/register'}>Sign up here</Link></span>
                </form>
            </div>
        </section>
    );
}
