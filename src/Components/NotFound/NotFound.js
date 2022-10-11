import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='text-center m-8 mt-56'>
        <h1 className='text-5xl mb-12'>Page Not Found!</h1>
        <Link to="/" className='text-2xl text-red-400 font-bold'>
            <u>Home</u>
        </Link>
    </div>
);

export default NotFound;