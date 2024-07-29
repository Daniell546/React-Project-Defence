import { Link } from "react-router-dom";

export default function CreatePerfume() {
    return (
        <section className="section-create">
            <div className="wrapper">
                <form action="#">
                    <h4>Create poster</h4>
                    <input type="text" placeholder="Enter brand name..." />
                    <input type="text" placeholder="Enter model..." />
                    <input type="text" placeholder="Enter price..." />
                    <input type="text" placeholder="Enter imageUrl..." />
                    <input type="text" placeholder="Enter description..." />
                    <button>Create</button>
                    <span>
                        <Link to={"/"}>Back to catalog</Link>
                    </span>
                </form>
            </div>
        </section>
    );
}
