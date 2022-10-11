import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center px-6 py-2 bg-red-400'>
            <div className='font-bold text-3xl'>
                <NavLink to='/'>
                    <h3>Quizora</h3>
                </NavLink>
            </div>

            <div>
                <div className="h-6 w-6 md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                <ul className={`bg-red-400 md:flex w-full absolute md:static ${open ? 'top-20 right-0 py-2' : 'top-[-120px] right-0'}`}>
                    <div className='px-6 font-bold mb-2'>
                        <NavLink to='/home'>Home</NavLink>
                    </div>

                    <div className='px-6 font-bold mb-2'>
                        <NavLink to='/statistics'>Statistics</NavLink>
                    </div>

                    <div className='px-6 font-bold'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;