import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li className="hover:text-orange-400"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-orange-400"><NavLink>About</NavLink></li>
        <li className="hover:text-orange-400"><NavLink>Services</NavLink></li>
        <li className="hover:text-orange-400"><NavLink>Case Studies</NavLink></li>
        <li className="hover:text-orange-400"><NavLink>Add Products</NavLink></li>
        <li className="hover:text-orange-400"><NavLink>My Cart</NavLink></li>
    </>
    return (
        <div className="flex flex-col xl:flex-row justify-around py-6 bg-gray-600 items-center text-white text-center">
            <div>
                <b className="text-4xl">Electra<span className="text-orange-400">Pulse</span> </b>
            </div>
            <div>
                <ul className="flex flex-col lg:flex-row my-4 2xl:my-0 gap-8 text-2xl">
                    {navLinks}
                </ul>
            </div>
            <div>
                <button className="px-6 py-1 shadow-2xl border bg-transparent text-2xl rounded-lg font-bold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;