import { Link } from "react-router-dom";
import { useGetAllPerfumes } from "../../hooks/usePerfumes";

export default function Home() {

    const [perfumes, setPerfumes] = useGetAllPerfumes()

    return (
        <section className="section-catalog">
            <div className="wrapper">
                <header>
                    <h3>Welcome to our beautiful online store</h3>
                </header>

                <div className="flex-columns c2">
                    {/* {perfumes.map(perfume => (
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
                    ))} */}
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
                    <div className="emptyContainer">No perfumes at this moment :(</div>}

                    
                </div>
            </div>
        </section>
    );
}
