import React from 'react';
import {Route, Routes} from "react-router-dom-v5-compat";
import Basket from "../basket/Basket";
import Products from "../products/Products";

const Pages = () => {
    return (
        <Routes>
                <Route path="/" element={<Products/>} />
               <Route path="/basket" element={<Basket/>} />
               <Route path="/product" element={<Products/>} />
        </Routes>
    );
};

export default Pages;