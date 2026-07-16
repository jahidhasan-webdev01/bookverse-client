"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    BookOpen,
    Eye,
    EyeOff,
    Loader2,
} from "lucide-react";

import { registerUser } from "@/services/auth.service";
import toast from "react-hot-toast";


export default function RegisterForm() {

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();


        const formData = new FormData(
            e.currentTarget
        );


        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;



        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }


        try {

            setLoading(true);


            await registerUser({
                name,
                email,
                password,
            });


            toast.success(
                "Registration successful"
            );


            router.push("/login");


        } catch (error) {

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Registration failed"
            );

        } finally {

            setLoading(false);

        }
    }


    return (

        <div className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-16">


            {/* Background */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />



            <div className="relative mx-auto w-full max-w-md">


                {/* Header */}
                <div className="mb-8 text-center">


                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                        <BookOpen size={28} />
                    </div>


                    <h1 className="mt-4 text-2xl font-bold text-gray-900">
                        Create Account
                    </h1>


                    <p className="mt-2 text-sm text-gray-500">
                        Join BookVerse and build your personal library.
                    </p>

                </div>




                {/* Form Card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">


                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >


                        {/* Name */}
                        <input
                            name="name"
                            placeholder="Full name"
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />



                        {/* Email */}
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />



                        {/* Password */}
                        <div className="relative">

                            <input
                                name="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Password"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />


                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-3 top-3 text-gray-400 hover:text-blue-600"
                            >
                                {
                                    showPassword
                                        ? <EyeOff size={18} />
                                        : <Eye size={18} />
                                }
                            </button>

                        </div>




                        {/* Confirm Password */}
                        <div className="relative">


                            <input
                                name="confirmPassword"
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Confirm password"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />


                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-3 top-3 text-gray-400 hover:text-blue-600"
                            >

                                {
                                    showConfirmPassword
                                        ? <EyeOff size={18} />
                                        : <Eye size={18} />
                                }

                            </button>


                        </div>




                        <button
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-70"
                        >

                            {
                                loading
                                    ?
                                    <>
                                        <Loader2
                                            size={18}
                                            className="animate-spin"
                                        />
                                        Creating...
                                    </>
                                    :
                                    "Create Account"
                            }

                        </button>


                    </form>


                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />

                        <span className="text-xs text-gray-400">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />
                    </div>


                    <p className="mt-6 text-center text-sm text-gray-500">

                        Already have an account?{" "}

                        <Link
                            href="/login"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Login
                        </Link>

                    </p>


                </div>


            </div>

        </div>

    );
}