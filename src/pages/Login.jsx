import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../authProvider/Provider";
import Swal from "sweetalert2";



const Login = () => {

    const { signIn, googleSignIn } = useContext(authContext);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signIn(email, password)
            .then((result) => {
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You are successfully logged in !",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    e.target.reset();
                    navigate("/");
                }

            })
            .catch((error) => {
                setLoginError(error.message);
                e.target.reset();
            });
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You are successfully logged in !",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    navigate("/");
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <>
            <div className="hero bg-[#E7E7E7] py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                        <form onSubmit={handleLogin} className="card-body">
                            {
                                loginError && <div className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Invalid-login-credentials!</span>
                                </div>
                            }

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-3 text-xl text-white bg-black rounded-lg mb-6">Login</button>
                                <button onClick={handleGoogleLogin} className="py-3 text-xl text-white bg-blue-600 mb-6 rounded-lg">Login With Google</button>
                            </div>
                            <p>If you are new in this website please <Link to="/register" className="underline text-blue-600 text-xl">Register</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;



