import UseAxios from "../../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";


const Brands = () => {

    const useAxios = UseAxios();

    const { data: allBrands = [] } = useQuery({
        queryKey: ["brands"],
        queryFn: async () => {
            const res = await useAxios.get("/brands");
            return res.data;
        }
    });

    return (
        <div className="w-[100%] text-gray-500 bg-[#E7E7E7] pb-20">
            <h2 className="text-center text-5xl font-extrabold py-16">Brands</h2>
            <div className="w-[80%] md:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 cursor-pointer">
                {
                    allBrands.map((brand, index) =>
                        <div key={index} className="h-[310px]  bg-white p-4 shadow-2xl">
                            <img className="w-[100%] h-[250px]" src={brand.imageUrl} alt="" />
                            <h2 className="text-center text-2xl font-bold py-1">{brand.brandName}</h2>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Brands;