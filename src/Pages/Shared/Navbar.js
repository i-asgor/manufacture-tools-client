import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({children}) => {
    const [user] =useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const navButton = <>
                 <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
                <li><NavLink to='/blog' className='rounded-lg'>Blog</NavLink></li>
                <li><NavLink to='/portfolio' className='rounded-lg'>Portfolio</NavLink></li>
                {
                    user && <li><Link to="/dashboard">Dashboard</Link></li>
                }
                <li>{user ? <button className="btn btn-ghost"  onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        
    </>
    return (
        <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300 md:px-24"><div className="flex-none lg:hidden">
                    <label for="dashboard-sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
            <div className="flex-1 text-4xl font-bold">AA Hand Tools</div>
            <div className="flex-none lg:hidden">
                <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal gap-x-2">
                    {navButton}
                </ul>
            </div>
            </div>
            {children}
        </div> 
        <div className="drawer-side">
            <label for="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {navButton}
            
            </ul>
            
        </div>
        </div>
    );
};

export default Navbar;