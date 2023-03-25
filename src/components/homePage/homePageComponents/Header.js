import "./Header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const totalQuantity = useSelector(state => state.totalQuantity);

    const cartButtonHandler = () => {
        navigate("/home/orderDetail");
    }

    return (
        <div className="header_wrapper">
            <h3> <i className="fa-solid fa-s"></i>Shopka</h3>
            <p className="sell">Sell on Shopka</p>
            <p className="register">Register</p>
            <section className="search_bar">
                <i className="fa-solid fa-magnifying-glass search_glass"></i>
                <input type={"text"} />
                <i className="fa-solid fa-xmark cross"></i>
            </section>
            <p className="electronics">Consumer Electronics</p>
            <section className="user_buttons">
                <button type="button" className="signin">Sign in</button>
                {/* <Link to={"./home/orderDetail"}> */}
                <button onClick={cartButtonHandler} type="button" className="cart">My cart<span className="quantity">{totalQuantity}</span></button>
                {/* </Link> */}
                <i className="fa-solid fa-user user_icon"></i>
            </section>
        </div>
    )
}

export default Header;