import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addProductBusket, decremenet, getDataProduct, increment, removeBusketProduct} from "../features/postSlice";

const Products = () => {
    const dispatch = useDispatch();
    const [productCounts, setProductCounts] = useState({});
    const products = useSelector(state => state.postSlice.products);

    useEffect(() => {
        dispatch(getDataProduct());
    }, []);

    const handleAddToCart = (item, action) => {
        dispatch(addProductBusket(item));
        const updatedCounts = { ...productCounts };
        if (action === 'increment') {
            updatedCounts[item.id] = (updatedCounts[item.id] || 0) + 1;
            dispatch(increment(1))
        } else if (action === 'decrement' && updatedCounts[item.id] > 0) {
            updatedCounts[item.id] -= 1;
            dispatch(decremenet(1))
        }        setProductCounts(updatedCounts);
    };


    return (
        <div style={{ width: '1000px', gap: '20px', marginTop: '150px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '20px auto' }}>
            {products.products ? (
                products.products.map((item) => (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '200px', backgroundColor: 'silver', height: '300px', flexDirection: 'column' }} key={item.id}>
                        <img style={{ width: '150px' }} src={item.images[0]} alt="" />
                        <span>{item.title}</span>
                        <h5>Price: {item.price}$</h5>
                        <div style={{display:'flex'}}>
                            <button onClick={() => handleAddToCart(item, 'increment')}>+</button>
                            <p>Количество {productCounts[item.id] || 0}</p>
                            <button onClick={() => {dispatch(removeBusketProduct(item.id)); handleAddToCart(item,'decrement')}}>-</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h2>LOADING...</h2>
                </div>
            )}
        </div>
    );
};

export default Products;
