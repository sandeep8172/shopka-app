import React from 'react';
import "./OrderItem.css";
import { orderActions } from '../../store/orderSlice';
import { useDispatch } from "react-redux";


const OrderItem = (props) => {

    const { img, price, itemName, variant, quantity, id } = props.item;
    const dispatch = useDispatch();
    const addMoreButtonHandler = () => {
        dispatch(orderActions.addItems({ price, id }))
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
            <p className='pPrice'>${price}</p>
            <div className='pButtons'>
                <button onClick={addMoreButtonHandler}>Add More</button>
            </div>
        </div>
    )
}

export default OrderItem