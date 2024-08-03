import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import perfumesAPI from "../../api/perfumes-api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authAPI from "../../api/auth.api";
import { useForm } from "../../hooks/useForm";
import {
    useCreateComment,
    useGetCommentsByPerfume,
} from "../../hooks/useComments";

export default function PerfumeDetails() {
    const { perfumeId } = useParams();
    const navigate = useNavigate();

    const { isAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [isOwner, setIsOwner] = useState(false);

    const [perfume] = useGetOnePerfume(perfumeId);
    const commentCreateHandler = useCreateComment();
    const [comments, setComments] = useGetCommentsByPerfume(perfumeId);

    useEffect(() => {
        const userData = authAPI.fetchUser();
        setUser(userData);
    }, []);

    useEffect(() => {
        if (user && perfume) {
            setIsOwner(user._id === perfume.owner);
        }
    }, [user, perfume]);

    const deleteHandler = async () => {
        try {
            await perfumesAPI.deletePerfume(perfume._id);
            navigate("/");
            toast.success("Successful deletion");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const addCommentHandler = async (values) => {
        try {
            const userId = user._id;
            if (!isAuthenticated) {
                userId = {};
            }
            const newComment = await commentCreateHandler(
                perfumeId,
                values,
                userId
            );

            toast.success("comment created");
        } catch (error) {
            console.log("catchedError");
            if (error.message) {
                return toast.error(error.message);
            } else {
                toast.error(error);
            }
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        { text: "" },
        addCommentHandler
    );

    return (
        <section className="section-details">
            <div className="wrapper">
                <h3>{perfume.brand}</h3>
                <div className="details-card">
                    <div className="c3">
                        <h5>{perfume.model}</h5>
                        <div className="media">
                            <img src={perfume.imageUrl} alt="" />
                        </div>
                        <div className="price">
                            <span>${perfume.price}</span>
                        </div>
                    </div>
                    <p className="description">{perfume.description}</p>
                </div>
                <div className="buttons">
                    <div className="addCart">
                        <button>
                            <Link to={"/"}>Back</Link>
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

                    {isAuthenticated && (
                        <div className="addCart">
                            <button>Add to cart</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="comments">
                <h3>Comments</h3>
                <span>{comments.length} comments</span>
                {isAuthenticated && (
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            name="text"
                            value={values.text}
                            onChange={changeHandler}
                            placeholder="Add comment..."
                        />
                        <button>Add</button>
                    </form>
                )}
                <div className="comments-list">
                    {comments.map((comment) => (
                        <div key={comment._id} className="comment">
                            <div className="media">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <span className="title">
                                    @{comment.owner.email}
                                </span>
                                <span className="text">{comment.comment}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
