import React from 'react';
import Navbar from "../header/Navbar";
import {useSelector} from "react-redux";

const Basket = () => {
    const productBusket = useSelector(state => state.busketReducer.busket)
    const delate = (id_deleate) => {
        console.log(id_deleate)
    }
    return (
        <div>
            <Navbar/>
            <div className='main-card'>
                {
                    productBusket?.map((product) => (
                        <div className='product' key={product._id}>
                            <img src={product.picture} alt=""/>
                            <strong>{product.category}</strong>
                            <h2>{product.name}</h2>
                            <span>{product.description}</span>
                            <div className='shop'>
                                <h1>Цена:{product.price}</h1>
                                <button onClick={() => delate(product)}>remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Basket;