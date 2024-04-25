
import React from "react";
import Logo from "./assets/logologo.png";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container mx-auto">
            <div className='navbar flex justify-between items-center py-4'>
                <div className='logo-and-name flex items-center'>
                    <div className="logo-container mr-4">
                        <img className="logo-image h-10" src={Logo} alt="business logo" />
                        <h1 className='name-org text-lg font-bold'>The <span className="comp"> Mentorship</span> Haven</h1>
                    </div>
                    <div className="navlink hidden md:flex">
                        <NavLink to='/' className='navlink mx-2'>Home</NavLink>
                        <NavLink to='/About' className='navlink mx-2'>About</NavLink>
                        <NavLink to='/Events' className='navlink mx-2'>Events</NavLink>
                        <NavLink to='/Contacts' className='navlink mx-2'>Contact</NavLink>
                        <NavLink to='/SignUp' className='navlink mx-2'>Volunteer</NavLink>
                    </div>
                </div>
                <div>
                    <button className='btn-donate'>Donate £</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
