/* eslint-disable react/no-unescaped-entities */

import post1 from "../assets/img/post1.jpg";
import post2 from "../assets/img/post2.jfif";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="w-[100%] bg-[#5D1427] py-10">
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
                <div>
                    <div className="bg-white p-2 rounded-lg">
                        <b className="text-4xl">Electra<span className="text-yellow-500">Pulse</span> </b>
                    </div>
                    <p className="my-4 text-white text-xl">Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>
                    <div className="flex gap-x-4 justify-center md:justify-start mb-4">
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <AiOutlineMail className="mx-auto text-yellow-600"></AiOutlineMail>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaFacebook className="mx-auto text-yellow-600"></FaFacebook>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaInstagram className="mx-auto text-yellow-600"></FaInstagram>
                        </p>
                    </div>
                </div>
                <div className="md:ml-28 mx-auto md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to='/'>Brands</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to='/'>Contact</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to='/fq'>Add Products</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to='/'>My Cart</Link> </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:ml-8 md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Popular Brands</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Mobile</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Computer</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">QuantumByte</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">SynthiCore</Link></p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Latest Post</h2>
                    <div>
                        <div className="flex item items-center mb-4">
                            <img className="w-[120px] h-[80px] object-cover" src={post1} alt="" />
                            <h5 className="ml-2">Exploring Electric Pulse Applications</h5>
                        </div>
                        <div className="flex items-center">
                            <img className="w-[120px] h-[80px] object-cover" src={post2} alt="" />
                            <h5 className="ml-2">Electropluse Advancements Unveiled"</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto h-1 bg-yellow-500 mt-10 rounded-xl border-2" />
            <h2 className="text-center mt-10 text-2xl font-bold text-white">All Rights Reserved by &copy; Electra  <span className="text-yellow-600">Pulse</span> </h2>
        </div>
    );
};

export default Footer;