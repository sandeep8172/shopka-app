import React from "react";
import { orderActions } from "../../../store/orderSlice";
import { useDispatch } from "react-redux";


const ListItems = (props) => {
    const { itemName, img, price, rating, rating_Value, description, offer, id, variant } = props;
    // console.log(props)

    const dispatch = useDispatch();

    const cartButtonHandler = () => {
        dispatch(orderActions.addItems({ itemName, img, price, id, variant }))
    }

    return (
        <div className="product">
            <img className="img" src={img} alt="product image" />
            <p className="product_name">{itemName}</p>
            <h3 className="product_price">
                ${price} <span className="offer">{offer}</span>
            </h3>
            <p className="product_description">{description}</p>
            <div className="rating">
                {rating}
                {rating_Value} <button className="add_button" onClick={cartButtonHandler}>Add to cart</button>
            </div>
        </div>
    );
};

export default ListItems;
