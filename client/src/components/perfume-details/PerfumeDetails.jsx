import { useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function PerfumeDetails() {

    const { perfumeId } = useParams()
    const [perfume, setPerfume] = useGetOnePerfume(perfumeId)

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <section className="section-details">
            <div className="wrapper">
                <h3>{perfume.brand}</h3>
                <div className="details-card">
                    <div className="c3">
                        <h5>{perfume.model}</h5>
                        <div className="media">
                            <img
                                src={perfume.imageUrl}
                                alt=""
                            />
                        </div>
                        <div className="price">
                            <span>${perfume.price}</span>
                        </div>
                    </div>
                    <p className="description">
                        {perfume.description}
                    </p>
                </div>
                {isAuthenticated && (

                    <div className="addCart">
                        <button>Add to cart</button>
                    </div>
                )}
            </div>
        </section>
    );
}
