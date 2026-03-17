import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Navbar;
// console.log(object);