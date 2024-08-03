import { useForm } from "../../../hooks/useForm";
import {
    useCreateComment,
    useGetCommentsByPerfume,
} from "../../../hooks/useComments";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function PerfumeComments() {
    const { perfumeId } = useParams();
    const { isAuthenticated, user } = useContext(AuthContext);
    const commentCreateHandler = useCreateComment();
    const [comments, triggerRefreshComments] = useGetCommentsByPerfume(perfumeId);

    const addCommentHandler = async (values) => {
        try {
            const userId = user._id;
            
            await commentCreateHandler(perfumeId, values, userId);

            // Trigger a re-fetch of comments
            triggerRefreshComments();

            toast.success("Comment created");
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
    );
}
