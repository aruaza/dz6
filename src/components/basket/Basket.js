import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeBusketProduct} from "../features/postSlice";

const Basket = () => {
    const productBusket = useSelector(state => state.postSlice.buskets)
    const dispatch = useDispatch()
    const deleteProduct = (productRemove) => {
        dispatch(removeBusketProduct(productRemove))
    }
    return (
        <div style={{width:'1000px' ,gap:'20px',marginTop:'150px', display:'flex', justifyContent:'space-around', flexWrap:'wrap', margin:'20px auto'}}>
            {
                productBusket?(
                    productBusket.map((item) => (
                        <div style={{display:'flex',alignItems:'center', justifyContent:'space-between',width:'200px', backgroundColor:'silver', height:'250px', flexDirection:'column'}} key={item.id}>
                            <img style={{width:'150px'}} src={item.images[0]} alt=""/>
                            <span>{item.title}</span>
                            <h5>Price:{item.price}$</h5>
                            <button onClick={() => deleteProduct(item.id)}>Убрать с Busket</button>
                        </div>
                    ))
                ):(
                    <div>
                        <h2>
                            LOADING...
                        </h2>
                    </div>
                )
            }
        </div>
    );
};

export default Basket;