import { useForm } from "../../hooks/useForm";
import { useSearchPerfumes } from "../../hooks/usePerfumes";

import { Link } from "react-router-dom";

const initialValues = {
    text: '',
    criteria: 'brand'
}

export default function Search() {
    const { values, changeHandler } = useForm(initialValues);

    const [perfumes] = useSearchPerfumes(values.text, values.criteria);

    return (
        <section className="section-search">
            <div className="wrapper">
                <h4>Search by criteria</h4>
                <form >
                    <input type="text" name="text" value={values.text} onChange={changeHandler} placeholder="Search..." />

                    <div className="select-style">
                        <label htmlFor="criteria">Criteria: </label>
                        <select
                            className="criteria"
                            name="criteria"
                            onChange={changeHandler}
                            id="criteria"
                            defaultValue={"brand"}
                        >
                            <option value="brand">Brand</option>
                            <option value="model">Model</option>
                        </select>
                    </div>
                </form>

                <div className="flex-columns c2">
                {perfumes.length > 0
                    ? perfumes.map(perfume => (
                        <article key={perfume._id}>
                        <Link to={`/perfume/${perfume._id}/details`}>
                            <div className="card">
                                <div className="media">
                                    <img
                                        src={perfume.imageUrl}
                                        alt=""
                                    />
                                </div>
                                <h4 className="brand">{perfume.brand}</h4>
                                <h5 className="model">{perfume.model}</h5>
                            </div>
                            <div className="price">
                                <span>${perfume.price}</span>
                            </div>
                        </Link>
                    </article>
                    )):
                    <div className="emptyContainer">No perfumes matching thease criteria :(</div>}
                </div>
            </div>
        </section>
    );
}
