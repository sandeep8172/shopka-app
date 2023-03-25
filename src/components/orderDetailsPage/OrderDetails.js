import React from "react";
import "./OrderDetails.css";
import jpg from "./deo.webp";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
    const CART_ITEMS = useSelector((state) => state.CART_ITEMS);
    const navigate = useNavigate()

    const continueButtonHandler = () => {
        navigate("/home/orderDetail/address")
    }

    const cartData = CART_ITEMS.map((item, index) => {
        return (
            <OrderItem
                key={index}
                item={{
                    id: item.id,
                    itemName: item.itemName,
                    img: item.img,
                    price: item.totalPrice,
                    variant: item.variant,
                    quantity: item.quantity,
                }}
            />
        );
    });

    return (
        <div className="pMain_wrapper">
            <p className="top_text">Place your Order Securely with Order App</p>
            <div className="details_wrapper">{cartData}</div>
            <div className="continue">
                <p>
                    Are you a Reseller? <a href="#">Click here</a>
                </p>
                <button onClick={continueButtonHandler}>Continue</button>
            </div>
        </div>
    );
};

export default OrderDetails;
