import { Link } from "react-router-dom";

export default function Search() {
    return (
        <section className="section-search">
            <div className="wrapper">
                <h4>Search by criteria</h4>
                <form action="#">
                    <input type="text" placeholder="Search..." />

                    <div className="select-style">
                        <label htmlFor="criteria">Criteria: </label>

                        <select
                            className="criteria"
                            name="criteria"
                            id="criteria"
                            defaultValue={"brand"}
                        >
                            <option value="brand">Brand</option>
                            <option value="model">Model</option>
                        </select>
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </section>
    );
}
