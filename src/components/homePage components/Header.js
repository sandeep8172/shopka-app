import "./Header.css";

function Header() {
    return (
        <div className="header_wrapper">
            <h3> <i class="fa-solid fa-s"></i>Shopka</h3>
            <p className="sell">Sell on Shopka</p>
            <p className="register">Register</p>
            <section className="search_bar">
                <i class="fa-solid fa-magnifying-glass search_glass"></i>
                <input type={"text"} />
                <i class="fa-solid fa-xmark cross"></i>
            </section>
            <p className="electronics">Consumer Electronics</p>
            <section className="user_buttons">
                <button type="button" className="signin">Sign in</button>
                <button type="button" className="cart">My cart</button>
                <i class="fa-solid fa-user user_icon"></i>
            </section>
        </div>
    )
}

export default Header;