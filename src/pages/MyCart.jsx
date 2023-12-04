import { useQuery } from "@tanstack/react-query";
import UseAxios from "../hooks/UseAxios";
import { useContext } from "react";
import { authContext } from "../authProvider/Provider";
import Swal from "sweetalert2";


const MyCart = () => {
    const { user } = useContext(authContext);
    const useAxios = UseAxios();

    const { data: myCarts = [], refetch } = useQuery({
        queryKey: ["myCarts"],
        queryFn: async () => {
            const res = await useAxios.get("/myCarts");
            return res.data;
        }
    });



    let myProducts = myCarts.filter((cart) => cart.email
        === user.email);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                useAxios.delete(`/myCarts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your products has been deleted !",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <>
            {
                myProducts.length > 0 ?
            <div className="w-[90%] md:w-[80%] xl:w-[70%] grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto gap-8 cursor-pointer py-20">
                {
                    myProducts.map((product, idx) =>
                        <div key={idx} className="bg-white shadow-2xl text-gray-500 rounded-xl">
                            <div className="p-4">
                                <img className="w-[100%] rounded-xl  h-[300px] object-cover" src={product.productImageInsert} alt="" />
                            </div>
                            <div className="p-4">
                                <h2 className="text-[25px] font-semibold">{product.ProductNameInsert}</h2>
                                <h2 className="py-3 text-[20px]">Product Type: {product.productTypeInsert}</h2>
                                <h2 className="text-[20px]">Price: ${product.productPriceInsert}</h2>
                                <div className="py-3 flex gap-2">
                                    <button onClick={() => handleDelete(product?._id)} className="my-4 text-xl rounded-full bg-black text-white px-6 py-2  border-2 border-[#FFD32B]">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div> :
            <h2 className="text-5xl text-center font-extrabold text-gray-500 py-40">You have not any purchased products !</h2>
            }

        </>

    );
};

export default MyCart;