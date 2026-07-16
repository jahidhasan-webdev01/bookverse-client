import Link from "next/link";
import { BookOpen, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">

            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <BookOpen size={32} />
                </div>


                <h1 className="mt-6 text-6xl font-bold text-slate-900">
                    404
                </h1>


                <h2 className="mt-3 text-xl font-semibold text-slate-800">
                    Page Not Found
                </h2>


                <p className="mt-2 text-sm text-slate-500">
                    Sorry, the page you are looking for does not exist.
                </p>


                <Link
                    href="/"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                    <Home size={17} />
                    Back to Home
                </Link>

            </div>

        </div>
    );
}