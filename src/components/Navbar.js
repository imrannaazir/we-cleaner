import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {

    const navLink =
        <>
            <li >
                <NavLink to='/' className='mx-1 rounded-lg '>Home</NavLink>
            </li>
            <li >
                <NavLink to='/services' className='mx-1 rounded-lg '>Services</NavLink>
            </li>
            <li >
                <NavLink to='/contact' className='mx-1 rounded-lg '>Contact</NavLink>
            </li>
            <li >
                <NavLink to='/about' className='mx-1 rounded-lg '>About</NavLink>
            </li>
            <li >
                <NavLink to='/book' className='mx-1 rounded-lg '>Book Now</NavLink>
            </li>
            <li >
                <NavLink to='/login' className='mx-1 rounded-lg btn btn-outline  '>LOGIN</NavLink>
            </li>


        </>
    return (
        <div class="drawer  drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full lg:px-[5%] mx-auto navbar z-50 bg-base-100 fixed top-0">

                    <div class="flex-1 px-2 mx-2 text-2xl">WeCleaner</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {navLink}

                        </ul>
                    </div>

                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    {navLink}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;