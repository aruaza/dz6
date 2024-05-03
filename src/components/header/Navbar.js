import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom-v5-compat";
import {useSelector} from "react-redux";


const Navbar = () => {
    const value = useSelector(state => state.postSlice.counter);

    return (
        <nav className='nav'>
          <ul>
              <li>
                  <Link to={'/product'}>
                      Product
                  </Link>
              </li>
              {
                  value
              }
              <li>
                  <Link to={'/basket'}>
                      Basket
                  </Link>
              </li>
          </ul>
        </nav>
    );
};

export default Navbar;