import React from 'react';
import './navbar.css'
import {Link } from "react-router-dom-v5-compat";
import {useSelector} from "react-redux";
const Navbar = () => {
    const productBusket = useSelector(state => state.busketReducer.busket)

    return (
        <nav className='nav'>
            <h4 className='site-title'>Home work 6</h4>
            <ul>
                <ul>
                    <li className='active badge' data-count={productBusket.length}>
                        <Link to="/basket">
                            Basket
                        </Link>

                    </li>
                    <li className='active'>
                        <Link to='/product'>
                            Product
                        </Link>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;



// <nav >
//     <a href="/" >Home Work6</a>
//
// </nav>