'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm, Watch } from "react-hook-form";

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLoginFunc = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Login successful!");
        }
    }
    console.log(watch("email"), watch("password"));

    return (
        <div className='container mx-auto py-8 min-h-[60vh] flex items-center justify-center '>
            <div className="p-15 rounded-md bg-white">
                <h1 className="font-bold text-5xl text-center mb-6">Login your account</h1>

                <form className="space-y-5 " onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl">Email</legend>
                        <input type="email" className="input w-full text-lg" {...register("email", { required: "Email is required" })} placeholder="Type here email" />

                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset mb-7">
                        <legend className="fieldset-legend text-xl">Password</legend>
                        <input type="password" className="input w-full text-lg" {...register("password", { required: "Password is required" })} placeholder="Type here password" />

                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}

                    </fieldset>

                    <button className="p-3 rounded-sm w-full bg-slate-800 hover:bg-slate-950 text-white text-xl font-semibold cursor-pointer">Login</button>
                </form>


                <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;