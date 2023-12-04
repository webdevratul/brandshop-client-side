import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../authProvider/Provider";


const ProductsDetails = () => {
    const { user } = useContext(authContext);
    const Product = useLoaderData();

    const handlePurchase = () => {
        const ProductName = document.getElementById("product_name");
        const productImage = document.getElementById("product_image");
        const productType = document.getElementById("product_type");
        const productPrice = document.getElementById("product_price");
        const description = document.getElementById("description");

        const ProductNameInsert = ProductName.innerHTML;
        const productImageInsert = productImage.src;
        const productTypeInsert = productType.innerHTML;
        const productPriceInsert = productPrice.innerHTML;
        const descriptionInsert = description.innerHTML;
        const email = user.email;
        const addToCartProducts = {
            ProductNameInsert, productImageInsert, productTypeInsert, productPriceInsert, descriptionInsert, email
        }

        fetch("http://localhost:200/addCart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addToCartProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully Purchased !',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    }

    return (
        <div className="w-[90%] mx-auto flex flex-col xl:flex-row justify-around items-center  my-10">
            <div className=" w-[100%] xl:w-[40%] h-[50vh] my-8 shadow-lg rounded-lg">
                <img className="w-[100%] h-full rounded-lg object-cover" id="product_image" src={Product?.photo} alt="" />
            </div>
            <div className=" w-[100%] xl:w-[40%]">
                <h2 className="text-2xl md:text-3xl font-bold my-6">Product Name: <span id="product_name" className="text-yellow-600">{Product?.name}</span> </h2>
                <h3 className="text-2xl font-bold pb-6">Product Type: <span className="text-yellow-600" id="product_type">{Product?.productType}</span></h3>
                <h3 className="text-2xl font-bold">Purchase Price: <span className="text-yellow-600" id="product_price">${Product?.price}</span></h3>
                <h4 className="my-6" id="description">{Product?.description}</h4>

                <button onClick={handlePurchase} className="bg-black rounded-full px-8 py-4 text-xl font-bold text-white my-8 border-2 border-[#FFD32B]">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductsDetails;