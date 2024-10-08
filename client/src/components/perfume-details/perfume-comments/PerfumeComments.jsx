import { useForm } from "../../../hooks/useForm";
import { useCreateComment, useGetCommentsByPerfume } from "../../../hooks/useComments";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { getUserById } from "../../../api/auth.api";
import { deleteComment } from "../../../api/comments-api"

const initialValues = {
    text: '',
}

export default function PerfumeComments({ isOwner }) {

    const { perfumeId } = useParams();
    const { isAuthenticated, changeAuthState, user } = useAuth();
    const commentCreateHandler = useCreateComment();
    const [comments, triggerRefreshComments] = useGetCommentsByPerfume(perfumeId);

    const addCommentHandler = async (values) => {
        try {
            const userId = user._id;
            await commentCreateHandler(perfumeId, values, userId);

            // Fetch updated user info from the server
            const updatedUser = await getUserById(userId);

            // Preserve the token
            const updatedUserWithToken = { ...updatedUser, token: user.token };

            // Update local storage
            localStorage.setItem("user", JSON.stringify(updatedUserWithToken));

            // Update context state
            changeAuthState(updatedUserWithToken);
            // Trigger a re-fetch of comments
            triggerRefreshComments();

            setValues(initialValues)

            toast.success("Comment created");
        } catch (error) {
            if (error.message) {
                toast.error(error.message);
            } else {
                toast.error(error);
            }
        }
    };

    const deleteCommentHandler = async (id) => {
        try {
            const userId = user._id;
            await deleteComment(id, perfumeId, user);

            // Fetch updated user info from the server
            const updatedUser = await getUserById(userId);

            // Preserve the token
            const updatedUserWithToken = { ...updatedUser, token: user.token };

            // Update local storage
            localStorage.setItem("user", JSON.stringify(updatedUserWithToken));

            // Update context state
            changeAuthState(updatedUserWithToken);

            // Trigger a re-fetch of comments
            triggerRefreshComments();

            toast.success("Comment deleted");
        } catch (error) {
            toast.error(error);
        }
    };

    const { values, changeHandler, submitHandler, setValues } = useForm(
        initialValues,
        addCommentHandler
    );

    return (
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
                            <span className="title">@{comment.owner.email}</span>
                            <span className="text">{comment.comment}</span>
                        </div>
                        {isOwner ? (
                            <div className="comments-btn">
                                <button onClick={() => deleteCommentHandler(comment._id)}>Delete</button>
                                <Link to={`/perfume/comment/${comment._id}/edit`}><button>Edit</button></Link>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
