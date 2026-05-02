'use client';

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm, Watch } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    
    const router = useRouter();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowingPassword, setIsShowingPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data);
        const { email, password, name, photoUrl } = data;
        console.log(email, password, name, photoUrl);

        
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoUrl,
            autoSignIn: false,
        })
        console.log(res, error);
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            await authClient.signOut();
            toast.success("Registration successful! Please login.");
            
            setTimeout(() => {
                router.push("/login");
            }, 1500);
            
        }
    }
    console.log(watch("email"), watch("password"), watch("name"), watch("photoUrl"));


    return (
        <div className='container mx-auto py-8 min-h-[60vh] flex items-center justify-center '>
            <div className="p-15 rounded-md bg-white">
                <h1 className="font-bold text-5xl text-center mb-6">Register your account</h1>

                <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Name</legend>
                        <input type="text" className="input w-full text-lg" {...register("name", { required: "Name is required" })} placeholder="Type here name" />

                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Photo URL</legend>
                        <input type="text" className="input w-full text-lg" {...register("photoUrl", { required: "Photo URL is required" })} placeholder="Type here photo URL" />

                        {errors.photoUrl && <span className="text-red-500 text-sm mt-1">{errors.photoUrl.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Email</legend>
                        <input type="email" className="input w-full text-lg" {...register("email", { required: "Email is required" })} placeholder="Type here email" />

                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset mb-7 relative">
                        <legend className="fieldset-legend text-xl">Password</legend>
                        <input type={isShowingPassword ? "text" : "password"} className="input w-full text-lg" {...register("password", { required: "Password is required" })} placeholder="Type here password" />

                        <span className="absolute right-5 top-4 cursor-pointer" onClick={() => setIsShowingPassword(!isShowingPassword)}>
                            {isShowingPassword ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
                        </span>

                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}

                    </fieldset>

                    <button className="p-3 rounded-sm w-full bg-slate-800 hover:bg-slate-950 text-white text-xl font-semibold cursor-pointer">Register</button>
                </form>


                {/* <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p> */}
            </div>
            <ToastContainer position="top-center" className="mt-27" />
        </div>
    );
};

export default RegisterPage;