import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
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

    console.log(brandBaseProducts);

    return (
        <div className="w-[100%]">
            <Slider></Slider>

        </div>
    );
};

export default Products;