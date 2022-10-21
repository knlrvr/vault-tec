import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} /> 
                
            <ul>
            <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li> 
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
} 

export default Navbar;