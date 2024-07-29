import { Link } from "react-router-dom";


export default function Home() {
    return (
        <section className="section-catalog">
            <div className="wrapper">
                <header>
                    <h3>Welocome to our beautiful online store</h3>
                </header>

                <div className="flex-columns c2">
                    <article>
                        <Link to={'/1/details'}>
                            <div className="card">
                                <div className="media">
                                    <img
                                        src="https://cdn.notinoimg.com/detail_main_mq/chanel/3145891073706_01-o/chanel-bleu-de-chanel___211007.jpg"
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

                    <article>
                        <div className="card">
                            <div className="media">
                                <img
                                    src="https://cdn.notinoimg.com/detail_main_mq/chanel/3145891073706_01-o/chanel-bleu-de-chanel___211007.jpg"
                                    alt=""
                                />
                            </div>
                            <h4 className="brand">Chanel</h4>
                            <h5 className="model">Bleu de Chanel</h5>
                        </div>
                        <div className="price">
                            <span>$200</span>
                        </div>
                    </article>

                    <article>
                        <div className="card">
                            <div className="media">
                                <img
                                    src="https://cdn.notinoimg.com/detail_main_mq/chanel/3145891073706_01-o/chanel-bleu-de-chanel___211007.jpg"
                                    alt=""
                                />
                            </div>
                            <h4 className="brand">Chanel</h4>
                            <h5 className="model">Bleu de Chanel</h5>
                        </div>
                        <div className="price">
                            <span>$200</span>
                        </div>
                    </article>

                    <article>
                        <div className="card">
                            <div className="media">
                                <img
                                    src="https://cdn.notinoimg.com/detail_main_mq/chanel/3145891073706_01-o/chanel-bleu-de-chanel___211007.jpg"
                                    alt=""
                                />
                            </div>
                            <h4 className="brand">Chanel</h4>
                            <h5 className="model">Bleu de Chanel</h5>
                        </div>
                        <div className="price">
                            <span>$200</span>
                        </div>
                    </article>

                    <article>
                        <div className="card">
                            <div className="media">
                                <img
                                    src="https://cdn.notinoimg.com/detail_main_mq/chanel/3145891073706_01-o/chanel-bleu-de-chanel___211007.jpg"
                                    alt=""
                                />
                            </div>
                            <h4 className="brand">Chanel</h4>
                            <h5 className="model">Bleu de Chanel</h5>
                        </div>
                        <div className="price">
                            <span>$200</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
