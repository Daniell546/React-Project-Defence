import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useEditComment, useGetOneComment } from "../../../../hooks/useComments";

export default function EditComments() {
    const { commentId } = useParams();
    const [comment] = useGetOneComment(commentId)
    const editCommentHandler = useEditComment()
    const navigate = useNavigate();

    const editHandler = async (values) => {
        try {
            await editCommentHandler(commentId, values)
            navigate(`/`)
            toast.success('Edit successful')
        } catch (error) {
            toast.error(error)

        }
    }


    const initialValues = {
        comment: ''
    };

    const { values, changeHandler, submitHandler, resetForm } = useForm(initialValues, editHandler);

    useEffect(() => {
        if (comment) {
            resetForm({
                comment: comment.comment || '',
            });
        }
    }, [comment, resetForm]);

    if (!comment) {
        return <div>Loading...</div>;
    }

    return (
        <section className="section-comment-edit">
            <div className="comments">
                <h3>Comment edit</h3>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        name="comment"
                        value={values.comment}
                        onChange={changeHandler}
                        placeholder="Add comment..."
                    />
                    <button>Edit</button>
                </form>
            </div>
        </section>
    );
}
