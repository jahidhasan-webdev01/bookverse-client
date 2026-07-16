import type { ReactNode } from "react";

import {
    BookOpen,
    Users,
    Target,
    Sparkles,
} from "lucide-react";


export default function AboutPage() {

    return (
        <main className="min-h-screen bg-slate-50">

            <section className="mx-auto max-w-7xl px-5 py-20 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <BookOpen size={32} />
                </div>


                <h1 className="mt-6 text-4xl font-bold text-slate-900">
                    About BookVerse
                </h1>


                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                    BookVerse is a modern digital library platform where
                    readers can discover, manage, and organize their
                    favorite books.
                </p>

            </section>


            <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 md:grid-cols-3">

                <InfoCard
                    icon={<Target size={25} />}
                    title="Our Mission"
                    description="Making book management simple and accessible."
                />


                <InfoCard
                    icon={<Users size={25} />}
                    title="For Readers"
                    description="Helping readers build their personal library."
                />


                <InfoCard
                    icon={<Sparkles size={25} />}
                    title="Our Vision"
                    description="Creating a better reading experience."
                />

            </section>

        </main>
    );
}



function InfoCard({
    icon,
    title,
    description,
}: {
    icon: ReactNode;
    title: string;
    description: string;
}) {

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {icon}
            </div>


            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {title}
            </h3>


            <p className="mt-3 text-sm text-slate-600">
                {description}
            </p>

        </div>
    );
}