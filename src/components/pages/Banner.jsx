import { FaAnglesRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="w-[100%] h-[70vh] bg-[#5D1427]">
            <div className="w-[70%] xl:w-[50%] mx-auto text-center text-white pt-2 md:pt-10 xl:pt-28">
                <h2 className=" text-3xl xl:text-5xl font-extrabold my-3 md:my-8">Amping Up Your Tech Experience</h2>
                <p className="mb-2 md:mb-8 text-[20px]">ElectraPulse, a beacon at the forefront of technological exploration, is your gateway to a world pulsating with innovation and digital dynamism. At ElectraPulse, we harness the electric energy of ideas, channeling them into a symphony of cutting-edge advancements.</p>
                <button className="bg-transparent border-2 rounded-full px-8 py-3 text-xl">Read More <FaAnglesRight className="inline"></FaAnglesRight></button>
            </div>
        </div>
    );
};

export default Banner;