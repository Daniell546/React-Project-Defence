import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export default function Register() {

    const register = useRegister();
    const navigate = useNavigate();

    const { values, changeHandler, submitHandler }
        = useForm({
            email: "",
            phoneNumber: "",
            password: "",
            rePass: ""
        },
            async ({ email, phoneNumber, password, rePass }) => {
                try {
                    await register(email, phoneNumber, password, rePass)
                    navigate('/');
                } catch (error) {
                    console.log('Register error: ' + error.message);
                }
            })
    return (
        <section className="section-register">
            <div className="wrapper">
                <form onSubmit={submitHandler}>
                    <h4>Sign up</h4>
                    <input type="email" name="email" value={values.email} onChange={changeHandler} placeholder="Enter your email..." />
                    <input type="text" name="phoneNumber" value={values.phoneNumber} onChange={changeHandler} placeholder="Enter your phonenumber..." />
                    <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Enter your password..." />
                    <input type="password" name="rePass" value={values.rePass} onChange={changeHandler} placeholder="Enter your password again..." />
                    <button>Sign up</button>
                    <span>Already have an account? <Link to={'/login'}>Sign in here</Link></span>
                </form>
            </div>
        </section>
    );
}
