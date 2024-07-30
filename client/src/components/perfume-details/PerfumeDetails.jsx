import { useParams } from "react-router-dom";
import { useGetOnePerfume } from "../../hooks/usePerfumes";

export default function PerfumeDetails() {

    const {perfumeId} = useParams()
    const [perfume, setPerfume] = useGetOnePerfume(perfumeId)

    return (
        <section className="section-details">
            <div className="wrapper">
                <h3>{perfume.brand}</h3>
                <div className="details-card">
                    <div className="c3">
                        <h5>{perfume.model}</h5>
                        <div className="media">
                            <img
                                src={perfume.imageUrl}
                                alt=""
                            />
                        </div>
                        <div className="price">
                            <span>${perfume.price}</span>
                        </div>
                    </div>
                    <p className="description">
                        {perfume.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
