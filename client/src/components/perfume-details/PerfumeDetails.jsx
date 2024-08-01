import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import perfumesAPI from "../../api/perfumes-api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authAPI from "../../api/auth.api";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetCommentsByPerfume } from "../../hooks/useComments";

export default function PerfumeDetails() {
    const { perfumeId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [perfume] = useGetOnePerfume(perfumeId);
    const commentCreateHandler = useCreateComment();
    const [comments, setComments] = useGetCommentsByPerfume(perfumeId)

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
            navigate('/');
            toast.success('Successful deletion');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const addCommentHandler = async (values) => {
        try {
            const newComment = await commentCreateHandler(perfumeId, values)
            toast.success('comments created')
        } catch (error) {
            toast.error(error)
        }
    }

    const { values, changeHandler, submitHandler } = useForm({ text: '' }, addCommentHandler)

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
                    {isOwner && isAuthenticated && (
                        <>
                            <div className="addCart">
                                <button onClick={deleteHandler}>Delete</button>
                            </div>
                            <div className="addCart">
                                <button><Link to={`/perfume/${perfume._id}/edit`}>Edit</Link></button>
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
                <form onSubmit={submitHandler}>
                    <input type="text" name="text" value={values.text} onChange={changeHandler} placeholder="Comment..." />
                    <button>Add</button>
                </form>
                <div className="comments-list">
                    {/* <div className="comment">
                        <span>Daniel</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quasi dignissimos, laboriosam quam iusto sapiente, repellendus magnam placeat rerum cupiditate nesciunt</p>
                    </div> */}
                    {comments.map(comment => (
                        <div key={comment._id} className="comment">
                            <span>Daniel</span>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
