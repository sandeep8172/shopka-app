import React from 'react';
import "./OrderItem.css";
import { orderActions } from '../../store/orderSlice';
import { useDispatch } from "react-redux";


const OrderItem = (props) => {

    const { img, totalPrice, price, itemName, variant, quantity, id } = props.item;
    const dispatch = useDispatch();
    const increaseButtonHandler = () => {
        dispatch(orderActions.addItems({ price, id }))
    }
    const decreaseButtonHandler = () => {
        dispatch(orderActions.removeItem(id))
    }
    return (
        <div className='inside_wrapper'>
            <p>product picture*</p>
            <img src={img}></img>
            <p>Product Name*</p>
            <p className='pName'>{itemName}</p>
            <div className='variant'>
                <section><p>Variant</p>
                    <p className='pColor'>{variant}</p></section>
                <section><p>Quantity</p>
                    <p className='pQuantity'>{quantity}</p></section>
            </div>
            <p>Product Price</p>
            <p className='pPrice'>${totalPrice}</p>
            <div className='pButtons'>
                <button onClick={increaseButtonHandler}>+</button>
                <button onClick={decreaseButtonHandler}>-</button>
            </div>
        </div>
    )
}

export default OrderItem