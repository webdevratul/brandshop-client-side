/* eslint-disable react/no-unescaped-entities */
import { AiFillCaretRight } from "react-icons/ai";
import sliderOne from "../../assets/img/slider1 .jpg";
import sliderTwo from "../../assets/img/slider2.jpg";
import sliderThree from "../../assets/img/slider3.jpg";
import "../../assets/css/Slider.css";
import { CiDiscount1 } from "react-icons/ci";

const Slider = () => {
    return (
        <div className="relative">
            <div className="carousel w-full h-[100vh] md:h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliderOne} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide4" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliderTwo} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide1" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliderThree} className="w-full object-cover image z-10" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <a href="#slide2" className="btn btn-circle bg-yellow-500 text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-yellow-500 text-white">❯</a>
                    </div>
                    <div className="overly z-10"></div>
                </div>
            </div>
            <div className="w-[60%] h-[500px] absolute top-[15%] left-[15%] text-white z-20">
                <h2 className="text-2xl lg:text-4xl font-bold">
                    Feel free to let me know if you have a specific theme !
                </h2>
                <div className="flex items-center mt-2 md:mt-5">
                    <hr className="bg-[#FFD32B] w-[10%] h-2" />
                    <hr className="w-[70%]" />
                </div>
                <div className="mt-2 md:mt-10 flex flex-col gap-y-4">
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-[22px] ml-4">Whispers of Eternity: Stories That Transcend Time !</p>
                    </div>
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-[22px] ml-4">Chasing Dreams, Catching Stars: A Tale of Endless Possibilities !</p>
                    </div>
                    <div className="flex items-center">
                        <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                        <p className="text-[22px] ml-4">Serenade of the Soul: Harmonizing Life's Beautiful Melodies !</p>
                    </div>
                </div>
                <button className="px-6 py-1 md:py-4 border-2 border-[#FFD32B] text-[#FFD32B] text-[22px] mt-2 md:mt-10 bg-black rounded-full"> Get Discount <CiDiscount1 className="inline text-2xl ml-3"></CiDiscount1> </button>
            </div>
        </div>
    );
};

export default Slider;