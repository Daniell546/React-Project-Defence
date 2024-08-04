import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useGetPerfumesByUser } from "../../hooks/usePerfumes";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export default function UserProfile() {

    const { userId } = useParams()
    const [perfumes] = useGetPerfumesByUser(userId)
    const { user } = useContext(AuthContext)

    return (
        <section className="section-profile">
            <h3>Your posts:</h3>
            <div className="wrapper">
                <div className="container">
                    <div className="media">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="" />
                    </div>

                    <div className="info">
                        <div className="email">
                            <h5>Email: danitud@abv.bg</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-columns c2">
                {perfumes.length > 0
                    ? perfumes.map(perfume => (
                        <article key={perfume._id}>
                            <Link to={`/perfume/${perfume._id}/details`}>
                                <div className="card">
                                    <div className="media">
                                        <img
                                            src={perfume.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="brand">{perfume.brand}</h4>
                                    <h5 className="model">{perfume.model}</h5>
                                </div>
                                <div className="price">
                                    <span>${perfume.price}</span>
                                </div>
                            </Link>
                        </article>
                    )) :
                    <div className="emptyContainer">No perfumes matching thease criteria :(</div>}
            </div>
        </section>
    );
}