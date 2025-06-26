import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontex';


const Navbar = () => {
const { user, logout, isAuthenticated } = useAuth();
const navigate = useNavigate();
const handleLogout = () => {
logout();
navigate('/');
};
return (
<nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
<div className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80">
<Link to="/">EduWawasan</Link>
</div>
<div className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80">
<Link Class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" to="/">Home</Link>
{isAuthenticated ? (
<>
<Link to="/dashboard">Dashboard</Link>
<Link to="/profile">Profile</Link>
<span>Welcome, {user?.name}</span>
<button onClick={handleLogout}>Logout</button>
</>
) : (
<>
<Link Class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" to="/login">Login</Link>
<Link Class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" to="/register">Register</Link>
<Link class="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" to="/Materi">Materi</Link>
</>
)}
</div>
</nav>
);
};
export default Navbar;