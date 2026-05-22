'use client'
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import ProfileDropdown from "./ProfileDropdown";
import { Moon, Sun } from "@gravity-ui/icons";
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/ideas'}>Ideas</NavLink></li>
        <li><NavLink href={'/add-idea'}>Add Idea</NavLink></li>
    </>

    const userSpecificRoute = <>
        <li><NavLink href={'/my-ideas'}>My Ideas</NavLink></li>
        <li><NavLink href={'/my-interactions'}>My Interactions</NavLink></li>
    </>
    const loginRegister = <>
        <li className='text-lg block  bg-gradient-to-r from-purple-700 to-blue-600 text-white transition-all duration-300 shadow-lg hover:scale-105'><Link href={'/login'} >Login</Link></li>
        <li className='text-lg block  bg-gradient-to-r from-purple-700 to-blue-600 text-white transition-all duration-300 shadow-lg hover:scale-105'><Link href={'/register'} >Register</Link></li>

    </>
    const icons = {
        darkMode: {
            off: Moon,
            on: Sun,
            selectedControlClass: "",
        }
    }
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    console.log(user);
    const router = useRouter();
    const handleLogOut = async () => {
        await authClient.signOut();
        toast.success('Logout successfully!')
        router.push('/login')
    }
    return (
        <div className="bg-white dark:bg-gray-900 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm bg-white dark:bg-gray-900 dropdown-content  rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                            {user &&
                                <li className='text-lg block ' ><button onClick={handleLogOut} className="w-full  bg-gradient-to-r from-pink-600 to-purple-600 text-white transition-all duration-300 shadow-lg hover:scale-105" >Logout</button></li>}
                            {user && userSpecificRoute}
                            
                            {!user && loginRegister}
                             <li><ThemeToggle value={icons.darkMode}></ThemeToggle></li>
                           

                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Image src={'/images/logo.webp'} alt="logo" width={40} height={40} className="object-cover" />
                        <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600  bg-clip-text text-transparent">IdeaVault</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                        {user && userSpecificRoute}
                    </ul>
                </div>

                    

                {!user && <div className="navbar-end hidden md:flex gap-4 ">
                    <ThemeToggle value={icons.darkMode}></ThemeToggle>
                    <Link href='/login'>
                        <button className="btn btn-outline border-purple-900 text-pink-600  dark:text-white transition-all duration-300 shadow-lg hover:scale-105">Login</button>
                    </Link>
                    <Link href={'/register'}>
                        <button className="btn bg-gradient-to-r from-pink-600 to-purple-600 text-white transition-all duration-300 shadow-lg hover:scale-105">Register</button>
                    </Link>
                </div>}
                {user && <div className="navbar-end flex items-center gap-2 sm:gap-4 ">
                   
                    <ThemeToggle  value={icons.darkMode}></ThemeToggle>
                   
                    <ProfileDropdown handleLogOut={handleLogOut} image={user?.image} name={user?.name} email={user?.email}></ProfileDropdown>


                </div>}
            </div>
        </div>
    );
};

export default Navbar;