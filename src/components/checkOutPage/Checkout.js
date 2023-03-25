import "./Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
    const item = useSelector(state => state.CART_ITEMS);
    const address = useSelector(state => state.userAddress)
    console.log(address);


    return (
        <div className="checkout_wrapper">
            <div className="items_wrapper">
                <ul>{item.map((ele) => {
                    return (<li>
                        <img src={ele.img} />
                        <section>
                            <h4>{ele.itemName}</h4>
                            <p>
                                Product variant - <span>{ele.variant}</span>
                            </p>
                            <p>
                                Quantity - <span>{ele.quantity}</span>
                            </p>
                            <p>
                                Buying Price - <span>${ele.totalPrice}</span>
                            </p>
                        </section>
                    </li>)
                })}

                </ul>
                <div className="delivery_address">
                    <h3>Delivery Details</h3>
                    <p>Name - <span>{address[0]?.name}</span></p>
                    <p>Phone - <span>{address[0]?.phone}</span></p>
                    <p>Email - <span>{address[0]?.email}</span></p>
                    <p>Payment type - <span>{address[0]?.payment}</span></p>
                    <p>Address - <span>{address[0]?.address}</span></p>
                    <p>City - <span>{address[0]?.city}</span></p>
                    <p>ZIP code - <span>{address[0]?.zipcode}</span></p>
                    <p>State - <span>{address[0]?.state}</span></p>
                    <p>Country - <span>{address[0]?.country}</span></p>
                </div>
            </div>
            <div className="price_breakdown">
                <div>
                    <h5>Pricing Breakdown</h5>
                    <p>Nike AIR:<span>1x3</span></p>
                    <p>Sub Total:<span>$500</span></p>
                    <p >Convenience Fee [2% + GST(18%)]<span className="gst">$2</span></p>
                    <h4>Total Amount:<span>$502</span></h4>
                    <button>Request Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
