/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="text-center py-10 w-[100%] md:w-[50%] mx-auto text-gray-500">
                <div className="p-2">
                    <h2 className="text-5xl font-extrabold py-8">Contact Us</h2>
                    <p className="text-xl">Get in touch with us! Your feedback, inquiries, and thoughts are invaluable to us. Whether you have questions about our products, want to collaborate, or simply want to say hello, we're here for you</p>
                </div>

                <form className="w-[100%] py-6 pr-6 pl-2 md:pr-0 md:pl-0">
                    <input className=" w-[100%]  xl:w-[48%] px-2 py-3 border outline-none m-2" type="text" name="name" placeholder="Name:" />
                    <input className=" w-[100%] xl:w-[48%] px-2 py-3 border outline-none m-2" type="email" name="name" placeholder="E-mail:" />
                    <br />
                    <textarea name="" id="" className="w-[100%] xl:w-[98%] h-36 px-2 py-2 m-2 border outline-none" placeholder="Text Us"></textarea>
                    <button className="mx-auto bg-yellow-600 py-4 px-8 text-white font-semibold my-4 text-xl rounded-full font-serif">Message</button>
                </form>

            </div>
        </div>
    );
};

export default Contact;

