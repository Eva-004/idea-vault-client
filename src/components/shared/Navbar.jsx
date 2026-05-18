import Image from "next/image";
import NavLink from "./NavLink";
import { Button } from "@heroui/react";


const Navbar = () => {
    const links = <>
      <li><NavLink href={'/'}>Home</NavLink></li>
      <li><NavLink href={'/ideas'}>Ideas</NavLink></li>
      <li><NavLink href={'/add-ideas'}>Add Idea</NavLink></li>
    </>
    return (
        <div className="bg-base-200 shadow-sm ">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Image src={'/images/logo.webp'} alt="logo" width={40} height={40} className="object-cover"/>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-800 to-cyan-600 bg-clip-text text-transparent">IdeaVault</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                   <button className="btn btn-outline text-cyan-800 border-cyan-800 ">Login</button>
                   <button className="btn  bg-cyan-800 text-white">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;