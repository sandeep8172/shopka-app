import React from 'react'
import "./Welcome.css";
import { useNavigate } from 'react-router-dom';
import { replace } from 'dom/lib/mutation';

const Welcome = () => {

    const navigate = useNavigate();


    const clickHandler = () => {
        navigate("./home", { replace: true })
    }
    return (
        <div className='welcome_wrapper'>
            <section>
                <h1><i className="fa-solid fa-s"></i>Shopka</h1>
                <button onClick={clickHandler}>Start Shopping</button>
            </section>
        </div>
    )
}

export default Welcome;