import React from "react";
import "./AddressPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { orderActions } from "../../store/orderSlice";
import { useNavigate } from "react-router-dom";


const AddressPage = () => {
    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        street: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        payment: "",
    });
    const navigate = useNavigate();

    const items = useSelector(state => state.CART_ITEMS)
    const dispatch = useDispatch();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(orderActions.addAddress(input))
        navigate("/home/orderDetail/address/checkout")

    };

    const inputDataHandler = (event) => {
        const data = event.target.value;
        setInput({
            ...input,
            [event.target.name]: data,
        })
    }
    console.log(input.payment);

    return (
        <div className="address_wrapper">
            <div className="items_list_wrapper">
                <ul>{items.map((item, index) => {
                    return (
                        <li>
                            <img src={item.img} />
                            <section>
                                <h4>{item.itemName}</h4>
                                <p>
                                    Product variant - <span>{item.variant}</span>
                                </p>
                                <p>
                                    Quantity - <span>{item.quantity}</span>
                                </p>
                                <p>
                                    Buying Price - <span>${item.totalPrice}</span>
                                </p>
                            </section>
                        </li>
                    )
                })}

                </ul>
            </div>
            <div className="input_wrapper">
                <p>Enter Delivery Address</p>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="name">Cusomer Name</label>
                    <br />
                    <input type="text" name="name" value={input.name} onChange={inputDataHandler} required />
                    <br />
                    <div>
                        <section>
                            <label htmlFor="phone">Phone</label>
                            <br />
                            <input type="number" value={input.phone} name="phone" onChange={inputDataHandler} required />
                        </section>
                        <section>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="email" name="email" value={input.email} onChange={inputDataHandler} required />
                        </section>
                    </div>

                    <label htmlFor="address">Address</label>
                    <br />
                    <input type="text" name="address" value={input.address} onChange={inputDataHandler} required />
                    <br />

                    <label htmlFor="street">Sreet</label>
                    <br />
                    <input type="text" name="street" value={input.street} onChange={inputDataHandler} required />
                    <br />

                    <label htmlFor="pincode">Pincod</label>
                    <br />
                    <input type="number" name="pincode" value={input.pincode} onChange={inputDataHandler} required />
                    <br />

                    <label htmlFor="city">City</label>
                    <br />
                    <input type="text" name="city" value={input.city} onChange={inputDataHandler} required />
                    <br />

                    <label htmlFor="state">State</label>
                    <br />
                    <input type="text" name="state" value={input.state} onChange={inputDataHandler} required />
                    <br />

                    <label htmlFor="country">Country</label>
                    <br />
                    <input type="text" name="country" value={input.country} onChange={inputDataHandler} required />
                    <br />

                    <label>Select Payment type</label>
                    <br />
                    <input
                        className="radio_one"
                        type="radio"
                        name="payment"
                        value="prepaid"
                        onChange={inputDataHandler} required
                    />
                    <label htmlFor="paymetType">Prepaid</label>
                    <input
                        className="radio_two"
                        type="radio"
                        name="payment"
                        value="COD"
                        onChange={inputDataHandler} required
                    />
                    <label htmlFor="paymetType">COD</label><br />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default AddressPage;
