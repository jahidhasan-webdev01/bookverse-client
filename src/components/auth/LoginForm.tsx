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

import { loginUser } from "@/services/auth.service";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function LoginForm() {
    const router = useRouter();

    const { refreshUser } = useAuth();

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const form = e.currentTarget;

        const data = {
            email: (
                form.elements.namedItem(
                    "email"
                ) as HTMLInputElement
            ).value,
            password: (
                form.elements.namedItem(
                    "password"
                ) as HTMLInputElement
            ).value,
        };

        try {
            setLoading(true);

            await loginUser(data);

            // Refresh authenticated user
            await refreshUser();

            router.replace("/");
            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Login failed"
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
                {/* Logo */}
                <div className="mb-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                        <BookOpen size={28} />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Login to continue your BookVerse
                        journey.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-gray-700">
                                Email Address
                            </label>

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="example@email.com"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-gray-700">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    name="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    required
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="absolute right-3 top-3 text-gray-400 hover:text-blue-600"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
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

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}