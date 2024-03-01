import React, {useEffect} from 'react';
import Navbar from "../header/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/products/actions/productGetActions";
import './product.css'
import {actionBusket} from "../../store/products/busketReducer/actionBusket";
const Products = () => {
    const products = useSelector((state) => state.productReducer.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, []);

    const addBasket = (product) => {
        dispatch(actionBusket(product))
    }

    return (
        <div>
            <Navbar/>
            <div className='main-card'>
                {products?.map((product) => (
                    <div className='product' key={product._id}>
                        <img src={product.picture} alt=""/>
                        <strong>{product.category}</strong>
                        <h2>{product.name}</h2>
                        <span>{product.description}</span>
                        <div className='shop'>
                            <h1>Цена:{product.price}</h1>
                            <button onClick={() => addBasket(product)} className='buy'>Купить</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;