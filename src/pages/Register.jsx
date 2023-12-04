
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../authProvider/Provider";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser, profileUpdate, setLoading } = useContext(authContext);
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // reset error
        setRegisterError("");

        if (password.length < 6) {
            setRegisterError("Password length must be at least 6 characters");
        } else if (!/[A-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
            setRegisterError("You have to use at least a Uppercase letter and have a special character");
        } else {
            createUser(email, password, name, photo)
                .then((result) => {
                    if (result.user) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "You are successfully Registered !",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                        });
                        profileUpdate(name, photo);
                        setLoading(false);
                        e.target.reset();
                        navigate("/");

                    }
                })
                .catch((error) => {
                    setRegisterError(error.message);
                });
        }
    }

    return (
        <>
            <div className="hero py-20 bg-[#E7E7E7]">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-[100%] max-w-sm shadow-2xl bg-base-400">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <p className="text-red-600">{registerError}</p>
                            <div className="form-control my-6">
                                <button className="bg-black py-3 text-xl text-white rounded-lg">Register</button>
                            </div>
                            <p>If you have Already an account please <Link to="/login" className="underline text-blue-600 text-xl">Login</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;