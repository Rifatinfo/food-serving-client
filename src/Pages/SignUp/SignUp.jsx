import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import uesAxiosPublic from "../../hooks/uesAxiosPublic";

const SignUp = () => {
    const axiosPublic = uesAxiosPublic();
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    email: data.email,
                    password: data.password
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Successfully Register! & User add database",
                                icon: "success",
                                draggable: true
                            });
                            console.log(result.user);
                            Navigate('/');
                        }
                    })

            })
    }

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} name="password" type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn  bg-black text-white">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;