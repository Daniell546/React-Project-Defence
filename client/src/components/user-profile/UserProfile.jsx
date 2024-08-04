import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export default function UserProfile() {

    const [toogleEdit, setToggleEdit] = useState(false)

    const { values, changeHandler, submitHandler } = useForm({
        email: '',
        username: ''
    },
        async ({ email, username }) => {
            try {

            } catch (error) {

            }
        }
    )

    const toggleHandler = (e) => {
        e.preventDefault();
        setToggleEdit(old => !old)
    }

    const editHandler = () => {

    }

    return (
        <section className="section-profile">
            <h3>Your posts:</h3>
            <div className="wrapper">
                <div className="container">
                    <div className="media">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="" />
                    </div>

                    <div className="info">
                        <div className="username">
                            <h4>Username: Daniel</h4>
                        </div>
                        <div className="email">
                            <h5>Email: danitud@abv.bg</h5>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
}