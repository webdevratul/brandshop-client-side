import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import Slider from "../components/pages/slider";



const Products = () => {
    const useAxios = UseAxios()
    const products = useLoaderData();
    const { brandName } = products;

    const { data: allProducts = [] } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await useAxios.get("/allProducts");
            return res.data;
        }
    });

    let brandBaseProducts = allProducts.filter((Product) => Product.insertBrandName
        === brandName);

    return (
        <div className="w-[100%] bg-[#E3E3E3]">
            <Slider></Slider>
            {
                brandBaseProducts.length > 0 ? <div className="w-[100%] py-24">
                    <div className="w-[90%] md:w-[80%] xl:w-[70%] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto gap-8 cursor-pointer">
                        {
                            brandBaseProducts.map((product, idx) =>
                                <div key={idx} className="bg-white shadow-2xl text-gray-500 rounded-xl">
                                    <div className="p-4">
                                        <img className="w-[100%] rounded-xl  h-[300px] object-cover" src={product.photo} alt="" />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-[25px] font-semibold">{product.name}</h2>
                                        <h2 className="py-3 text-[20px]">Product Type: {product.productType}</h2>
                                        <h2 className="text-[20px]">Price: ${product.price}</h2>
                                        <div className="py-3 flex gap-2">
                                            <Link to={`/productDetails/${product?._id}`}>
                                                <button className="my-4 text-xl rounded-full bg-black text-white px-6 py-2  border-2 border-[#FFD32B]">Details</button>
                                            </Link>
                                            <Link to={`/productUpdate/${product?._id}`}>
                                                <button className="my-4 text-xl rounded-full bg-black text-white px-6 py-2  border-2 border-[#FFD32B]">Update</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div> : <h2 className="text-center py-12 text-5xl font-extrabold text-gray-500">Not have any available products</h2>
            }

        </div>
    );
};

export default Products;