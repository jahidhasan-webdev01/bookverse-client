import { BookOpen } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="text-center">

                <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                    <BookOpen size={32} />
                </div>


                <h2 className="mt-5 text-xl font-semibold text-slate-900">
                    Loading BookVerse...
                </h2>


                <p className="mt-2 text-sm text-slate-500">
                    Preparing your library experience
                </p>


                <div className="mx-auto mt-6 h-2 w-48 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />
                </div>

            </div>
        </div>
    );
} 