import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import PerfumeComments from "./perfume-comments/PerfumeComments";
import perfumesAPI from "../../api/perfumes-api";
import { toast } from "react-toastify";
import { useCart } from "../../contexts/CartContext";

export default function PerfumeDetails() {
    const { perfumeId } = useParams();
    const { isAuthenticated, user } = useAuth()
    const [isOwner, setIsOwner] = useState(false);
    const [perfume] = useGetOnePerfume(perfumeId);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // This hook is triggered when perfume's value is being changed!
    useEffect(() => {
        if (user && perfume) {
            setIsOwner(user._id === perfume.owner);
        }
    }, [perfume, user]);

    const deleteHandler = async () => {
        try {
            await perfumesAPI.deletePerfume(perfume._id);
            navigate("/");
            toast.success("Successful deletion");
        } catch (error) {
            if (error.message) {
                toast.error(error.message);
            } else {
                toast.error(error);

            }
        }
    };

    const addToCartHandler = () => {
        addToCart(perfume);
        navigate('/cart');
    };

    const handleGoBack = () => {
        navigate(-1); // This navigates to the previous page in the history stack
    };

    return (
        <section className="section-details">
            <div className="wrapper">
                <h3>{perfume.brand}</h3>
                <div className="details-card">
                    <div className="c3">
                        <h5>{perfume.model}</h5>
                        <div className="media">
                            <img src={perfume.imageUrl} alt={perfume.model} />
                        </div>
                        <div className="price">
                            <span>${perfume.price}</span>
                        </div>
                    </div>
                    <p className="description">{perfume.description}</p>
                </div>
                <div className="buttons">
                    <div className="addCart">
                        <button onClick={handleGoBack}>
                            Back
                        </button>
                    </div>
                    {isOwner && isAuthenticated && (
                        <>
                            <div className="addCart">
                                <button onClick={deleteHandler}>Delete</button>
                            </div>
                            <div className="addCart">
                                <button>
                                    <Link to={`/perfume/${perfume._id}/edit`}>
                                        Edit
                                    </Link>
                                </button>
                            </div>
                        </>
                    )}

                    {isAuthenticated && !isOwner && (
                        <div className="addCart">
                            <button onClick={addToCartHandler}>Add to cart</button>
                        </div>
                    )}
                </div>
            </div>

            <PerfumeComments isOwner={isOwner} />
        </section>
    );
}
