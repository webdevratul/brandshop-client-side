/* eslint-disable react/no-unescaped-entities */
import { FaAnglesRight } from "react-icons/fa6";
import aboutProfile from "../../assets/img/about-profile .jpg"

const About = () => {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="w-[70%] mx-auto text-gray-500 py-24">
                <div className="flex justify-center flex-col xl:flex-row items-center gap-8">
                    <div className="w-[100%] md:w-[70%] xl:w-[40%] text-center xl:text-start">
                        <h2 className="text-5xl font-extrabold">Our Story</h2>
                        <h3 className="text-[25px] font-semibold py-6">Journeying Together, Building Tomorrow</h3>
                        <p className="text-[18px] text-justify">Welcome to Electric Pulse where every step we take is a stride towards a shared vision. Our story is one of passion, innovation, and collaboration. As a team dedicated to shaping the future, we believe in the power of connectivity and technology to transform lives. Join us on this exciting adventure as we push boundaries, foster creativity, and embrace the spirit of progress. </p>
                        <button className="mx-auto bg-yellow-500 py-4 px-8 text-white font-semibold my-4 text-xl rounded-full font-serif my-8">More About Us <FaAnglesRight className="inline"></FaAnglesRight></button>
                    </div>
                    <div className="w-[100%] md:w-[80%] xl:w-[40%]">
                        <img className="mx-auto  w-[100%]" src={aboutProfile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;