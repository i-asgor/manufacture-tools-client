import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({children}) => {
    const [user] =useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth)
    }
    const navButton = <>
                 <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
                <li><NavLink to='/blog' className='rounded-lg'>Blog</NavLink></li>
                {
                    user && <li><Link to="/dashboard">Dashboard</Link></li>
                }
                <li>{user ? <button className="btn btn-ghost"  onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        
    </>
    return (
        <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-300 md:px-24"><div class="flex-none lg:hidden">
                    <label for="dashboard-sidebar" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
            <div class="flex-1">Navbar Title</div>
            <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal gap-x-2">
                    {navButton}
                </ul>
            </div>
            </div>
            {children}
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {navButton}
            
            </ul>
            
        </div>
        </div>
    );
};

export default Navbar;