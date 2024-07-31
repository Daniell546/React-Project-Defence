import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import perfumesAPI from "../../api/perfumes-api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function PerfumeDetails() {

    const { perfumeId } = useParams()
    const [perfume, setPerfume] = useGetOnePerfume(perfumeId)
    const navigate = useNavigate();

    const { isAuthenticated } = useContext(AuthContext)

    const deleteHandler = () => {
        try {
            perfumesAPI.deletePerfume(perfume._id)
            navigate('/')
            toast.success('Successful deletion')
        } catch (error) {
            toast.error(error)

        }
    }

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
                <div className="buttons">
                    <div className="addCart">
                        <button><Link to={'/'}>Back</Link></button>
                    </div>
                    <div className="addCart">
                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                    <div className="addCart">
                        <button><Link to={`/perfume/${perfume._id}/edit`}>Edit</Link></button>
                    </div>

                    {isAuthenticated && (

                        <div className="addCart">
                            <button>Add to cart</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
