import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreatePerfume } from "../../hooks/usePerfumes";
import { toast } from "react-toastify";


const initialValues = {
    brand: '',
    model: '',
    price: '',
    imageUrl: '',
    description: ''
}

export default function CreatePerfume() {

    const perfumeCreateHandler = useCreatePerfume();
    const navigate = useNavigate();

    const createHandler = async (values) => {
        try {
            await perfumeCreateHandler(values);
            navigate('/')
            toast.success('Successful creation!')
        } catch (error) {
            toast.error(error)
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler)

    return (
        <section className="section-create">
            <div className="wrapper">
                <form onSubmit={submitHandler}>
                    <h4>Create poster</h4>
                    <input type="text" name="brand" value={values.brand} onChange={changeHandler} placeholder="Enter brand name..." />
                    <input type="text" name="model" value={values.model} onChange={changeHandler} placeholder="Enter model..." />
                    <input type="number" name="price" value={values.price} onChange={changeHandler} placeholder="Enter price..." />
                    <input type="text" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Enter imageUrl..." />
                    <input type="text" name="description" value={values.description} onChange={changeHandler} placeholder="Enter description..." />
                    <button>Create</button>
                    <span>
                        <Link to={"/"}>Back to catalog</Link>
                    </span>
                </form>
            </div>
        </section>
    );
}
