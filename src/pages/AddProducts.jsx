import Swal from "sweetalert2";


const AddProducts = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const brandName = (form.brandName.value).toUpperCase();
        const insertBrandName = brandName.replace(/\s/g, '');

        const storeProductData = {
            photo, name,insertBrandName, productType, price, description, rating,
        }

        fetch("http://localhost:200/productData", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(storeProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully added a product !',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset();
                }
            });
    }

    return (
        <div className="w-[100%] bg-[#E7E7E7] py-24">
            <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto">
                <h2 className="text-5xl font-bold pb-8 text-center text-gray-500">Add Product</h2>
                <form onSubmit={handleAddProduct} className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto">
                    <small className="m-2 text-gray-400">Product Image URL*</small>
                    <input className="w-[100%] h-12 bg-white outline-none rounded-md px-2" type="text" name="photo" placeholder="Image URL" required />
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Product Name*</small>
                    <input className="w-[100%] h-12 bg-white outline-none rounded-md  px-2" type="text" name="name" placeholder="Name" required />
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Brand Name*</small>
                    <input className="w-[100%] h-12 bg-white outline-none rounded-md px-2" type="text" name="brandName" placeholder="Brand Name" required />
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Product Type*</small>
                    <select className="w-[100%] text-gray-500 h-12 bg-white outline-none rounded-md px-2" name="productType" required>
                        <option value="Mobile">Mobile</option>
                        <option value="Computer">Computer</option>
                        <option value="Head-Phone">Head-Phone</option>
                    </select>
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Price*</small>
                    <input className="w-[100%] h-12 bg-white outline-none rounded-md  px-2" type="number" name="price" required placeholder="Price" />
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Small Description*</small>
                    <textarea className="w-[100%] h-28 bg-white outline-none rounded-md  px-2 py-2" name="description" required placeholder="Write Small Description"></textarea>
                    <br />
                    <br />
                    <small className="m-2 text-gray-400">Rating*</small>
                    <input className="w-[100%] h-12 bg-white outline-none rounded-md  px-2" type="number" name="rating" required placeholder="Give Rating" />
                    <br />
                    <br />
                    <input className="w-[100%] h-12 outline-none rounded-md  px-2 bg-black text-white text-xl font-semibold cursor-pointer" type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;