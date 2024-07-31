import { useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

export default function EditPerfume() {
    const { perfumeId } = useParams();
    const [perfume] = useGetOnePerfume(perfumeId);

    //! TODO: Fix undefined initialValues!
    const initialValues = {
        brand: perfume.brand,
        model: perfume.model,
        price: perfume.price,
        imageUrl: perfume.imageUrl,
        description: perfume.description,
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues)
    return (
        <section className="section-create">
            <div className="wrapper">
                <form onSubmit={submitHandler}>
                    <h4>Edit poster</h4>
                    <input type="text" name="brand" value={values.brand} onChange={changeHandler} placeholder="Enter brand name..." />
                    <input type="text" name="model" value={values.model} onChange={changeHandler} placeholder="Enter model..." />
                    <input type="text" name="price" value={values.price} onChange={changeHandler} placeholder="Enter price..." />
                    <input type="text" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Enter imageUrl..." />
                    <input type="text" name="description" value={values.description} onChange={changeHandler} placeholder="Enter description..." />
                    <button>Edit</button>
                    <span>
                        <Link to={"/"}>Back to catalog</Link>
                    </span>
                </form>
            </div>
        </section>
    );
}