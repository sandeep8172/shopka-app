import "./MainContent.css";
import { useSelector } from "react-redux";

const MainContent = () => {

    const DUMMY_ITEMS = useSelector(state => state.DUMMY_ITEMS);

    return (
        <div className="content_wrapper">
            <div className="top_section">
                <section className="left_section">
                    <select>
                        <option>Useless first</option>
                    </select>
                    <select>
                        <option>Condition</option>
                    </select>
                    <select>
                        <option>Delivery Option </option>
                    </select>
                </section>
                <section className="right_section">
                    <button>Show all</button>
                    <button className="action">Auction</button>
                    <button className="buyNow">Buy now</button>
                    <button>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <button className="window">
                        <i class="fa-brands fa-windows"></i>
                    </button>
                </section>
            </div>
            <div className="related_list">
                <p>Related</p>
                <ul>
                    <li>worldwide shipping</li>
                    <li>under 50$</li>
                    <li>kitten</li>
                    <li>plastic plugs</li>
                    <li>pucker shoes</li>
                    <li>vintage typewriter</li>
                </ul>
            </div>
            <div className="products_list">
                {DUMMY_ITEMS.map((item, index) => {
                    return (
                        <div className="product" id={index}>
                            <img className="img" src={item.img} alt="product image" />
                            <p className="product_name">{item.name}</p>
                            <h3 className="product_price">
                                ${item.price} <span className="offer">{item.offer}</span>
                            </h3>
                            <p className="product_description">
                                {item.description}
                            </p>
                            <div className="rating">
                                {item.rating.map(ele => ele)}
                                {item.rating_Value} <button className="add_button">Add to cart</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default MainContent;
