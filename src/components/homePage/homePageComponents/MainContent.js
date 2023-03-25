import "./MainContent.css";
import ListItems from "./ListItems";
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
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <button className="window">
                        <i className="fa-brands fa-windows"></i>
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
                        <ListItems key={index} id={index} itemName={item.name} img={item.img} price={item.price} offer={item.offer} description={item.description} rating={item.rating.map(ele => ele)} rating_Value={item.rating_Value} variant={item.variant} />
                    )
                })
                }
            </div>
        </div>
    );
};

export default MainContent;
