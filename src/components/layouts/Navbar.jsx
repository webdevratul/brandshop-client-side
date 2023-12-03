import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../authProvider/Provider";


const Navbar = () => {

    const { user, logOut } = useContext(authContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const navLinks = <>
        <li className="hover:text-orange-400"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-orange-400"><NavLink to="/about">About</NavLink></li>
        <li className="hover:text-orange-400"><NavLink to="/brands">Brands</NavLink></li>
        <li className="hover:text-orange-400"><NavLink to="/contact">Contact</NavLink></li>
        {
            user &&
            <>
                <li className="hover:text-orange-400"><NavLink to="/addProducts">Add Products</NavLink></li>
                <li className="hover:text-orange-400"><NavLink>My Cart</NavLink></li>
            </>
        }
    </>
    return (
        <div className="flex flex-col xl:flex-row justify-around py-8 bg-black items-center text-white text-center">
            <div>
                <b className="text-4xl">Electra<span className="text-yellow-500">Pulse</span> </b>
            </div>
            <div className="pt-3">
                <ul className="flex flex-col lg:flex-row my-4 2xl:my-0 gap-8 text-2xl">
                    {navLinks}
                </ul>
            </div>
            <div>
                {
                    user ? <button onClick={handleSignOut} className="px-6 py-1 shadow-2xl border-2 bg-transparent text-2xl rounded-full font-bold">Logout</button> :
                        <Link to="/login">
                            <button className="px-6 py-1 shadow-2xl border-2 bg-transparent text-2xl rounded-full font-bold">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;