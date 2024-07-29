import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3000/api/home')
            const result = await response.json();
            setPerfumes(result)
        })()
    },[])

    return (
        <section className="section-catalog">
            <div className="wrapper">
                <header>
                    <h3>Welocome to our beautiful online store</h3>
                </header>

                <div className="flex-columns c2">
                    {perfumes.map(perfume => (
                        <article key={perfume._id}>
                        <Link to={"/1/details"}>
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
                    ))}
                    <article>
                        <Link to={"/1/details"}>
                            <div className="card">
                                <div className="media">
                                    <img
                                        src="https://douglas.bg/media/catalog/product/cache/83c3102c66132fadf4e80b1264bd57a8/1/-/1-e1ba0c82a705b84c78e8ba2fa398ae9b-a96f49b2e7594e5544142dbff743d299.jpg"
                                        alt=""
                                    />
                                </div>
                                <h4 className="brand">Chanel</h4>
                                <h5 className="model">Bleu de Chanel</h5>
                            </div>
                            <div className="price">
                                <span>$200</span>
                            </div>
                        </Link>
                    </article>

                    
                </div>
            </div>
        </section>
    );
}
