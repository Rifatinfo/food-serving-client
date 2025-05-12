import { RiMenuAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Our Menu', link: '/menu' },
        { name: 'Order', link: '/order' },
    ];

    const handleSignOut = () => {
        // Add sign-out logic here
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
            <div className="flex items-center justify-between py-4 px-6 md:px-10">
                <div className="text-2xl font-bold tracking-widest">
                    BISTRO BOSS
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-lg">
                    {Links.map((link, index) => (
                        <li key={index}>
                            <a href={link.link} className="hover:text-gray-400 transition">{link.name}</a>
                        </li>
                    ))}
                    <li className="flex items-center gap-1">
                        <FaShoppingBag />
                        <sup>+12</sup>
                    </li>
                    <li>
                        <a href="/login" className="hover:text-gray-400 transition">Sign In</a>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div onClick={() => setOpen(true)} className="md:hidden text-3xl cursor-pointer">
                    <RiMenuAddFill />
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-black text-white transform transition-transform duration-500 ease-in-out z-50 ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)} className="text-3xl">
                        <IoClose />
                    </button>
                </div>

                <ul className="flex flex-col items-start px-6 gap-6 text-lg">
                    {Links.map((link, index) => (
                        <li key={index}>
                            <a href={link.link} onClick={() => setOpen(false)} className="hover:text-gray-400 transition">{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => { handleSignOut(); setOpen(false); }} className="hover:text-gray-400 transition">Sign out</button>
                    </li>
                    <li className="flex items-center gap-1">
                        <FaShoppingBag />
                        <sup>+12</sup>
                    </li>
                    <li>
                        <a href="/login" onClick={() => setOpen(false)} className="hover:text-gray-400 transition">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
