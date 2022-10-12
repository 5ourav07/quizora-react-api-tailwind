import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center px-6 py-4 text-white bg-black'>
            <div className='font-bold text-3xl'>
                <NavLink to='/'>
                    <h3 className='hover:text-slate-400'>Quizora</h3>
                </NavLink>
            </div>

            <div>
                <div className="h-6 w-6 md:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                <ul className={`bg-black md:flex w-full absolute md:static ${open ? 'top-20 right-0 py-2' : 'top-[-120px] right-0'}`}>
                    <div className='px-6 font-bold mb-2 hover:text-slate-400'>
                        <NavLink to='/topics'>Topics</NavLink>
                    </div>

                    <div className='px-6 font-bold mb-2 hover:text-slate-400'>
                        <NavLink to='/statistics'>Statistics</NavLink>
                    </div>

                    <div className='px-6 font-bold hover:text-slate-400'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;